/**
 * Unified Content Loader - Single source for all content types
 * Handles MDX, static content, and whitepapers consistently
 */

import { getBlogPost, isMDXBlogPost } from './blog-registry';
import { getWhitepaperBySlug, Whitepaper } from './whitepapers';

export type ContentType = 'blog' | 'resource' | 'whitepaper';

export interface UnifiedContent {
  type: ContentType;
  slug: string;
  title: string;
  description: string;
  date?: string;
  author?: string;
  tag?: string;
  readTime?: string;
  ogImage?: string;
  template?: 'default' | 'minimal' | 'magazine' | 'technical';
  published?: boolean;
  // Content-specific fields
  content?: string; // For static content
  isMDX?: boolean; // For MDX content
  downloadUrl?: string; // For whitepapers
  fileSize?: string; // For whitepapers
  whitepaperData?: Whitepaper; // Full whitepaper object
}

/**
 * Load content by slug and type
 */
export async function loadContent(slug: string, type: ContentType): Promise<UnifiedContent | null> {
  try {
    switch (type) {
      case 'blog':
      case 'resource': {
        const blogPost = await getBlogPost(slug);
        if (!blogPost) return null;
        
        const result: UnifiedContent = {
          type,
          slug: blogPost.slug,
          title: blogPost.title,
          description: blogPost.description,
          date: blogPost.date,
          isMDX: isMDXBlogPost(slug)
        };

        // Only add optional properties if they exist
        if (blogPost.author) result.author = blogPost.author;
        if (blogPost.tag) result.tag = blogPost.tag;
        if (blogPost.readTime) result.readTime = blogPost.readTime;
        if (blogPost.ogImage || blogPost.imageSrc) result.ogImage = blogPost.ogImage || blogPost.imageSrc;
        if (blogPost.template) result.template = blogPost.template;
        if (blogPost.published !== undefined) result.published = blogPost.published;
        if (blogPost.content) result.content = blogPost.content;

        return result;
      }
      
      case 'whitepaper': {
        const whitepaper = getWhitepaperBySlug(slug);
        if (!whitepaper) return null;

        const result: UnifiedContent = {
          type,
          slug: whitepaper.slug,
          title: whitepaper.title,
          description: whitepaper.description,
          whitepaperData: whitepaper
        };

        // Whitepapers are always published
        result.published = true;

        // Only add optional properties if they exist
        if (whitepaper.coverImage) result.ogImage = whitepaper.coverImage;

        return result;
      }
      
      default:
        return null;
    }
  } catch (error) {
    console.error(`Error loading content for ${type}/${slug}:`, error);
    return null;
  }
}

/**
 * Check if content exists
 */
export async function contentExists(slug: string, type: ContentType): Promise<boolean> {
  const content = await loadContent(slug, type);
  return content !== null && (content.published !== false);
}

/**
 * Get content type from URL path
 */
export function getContentTypeFromPath(pathname: string): ContentType {
  if (pathname.startsWith('/blog/')) return 'blog';
  if (pathname.startsWith('/resources/')) return 'resource';
  if (pathname.startsWith('/whitepapers/')) return 'whitepaper';
  return 'blog'; // default fallback
}

/**
 * Generate canonical URL for content
 */
export function getCanonicalUrl(content: UnifiedContent): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tracer.ai';
  
  // Prefer /blog/ URLs for SEO consistency
  if (content.type === 'blog' || content.type === 'resource') {
    return `${baseUrl}/blog/${content.slug}`;
  }
  
  return `${baseUrl}/${content.type === 'whitepaper' ? 'whitepapers' : 'blog'}/${content.slug}`;
}
