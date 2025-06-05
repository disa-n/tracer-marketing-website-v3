/**
 * Centralized Blog Registry - Single Source of Truth for all blog posts
 * 
 * This file automatically discovers and manages all blog posts from both:
 * - MDX files in src/components/content/blog/
 * - Static posts in blogPosts.ts (legacy)
 */

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  author?: string;
  tag?: string;
  readTime?: string;
  ogImage?: string;
  template?: 'default' | 'minimal' | 'magazine' | 'technical';
  imageSrc?: string; // For backward compatibility
}

export interface BlogPost extends BlogPostMetadata {
  type: 'mdx' | 'static';
  content?: string; // Only for static posts
}

// Registry of all available MDX blog posts
// This is the ONLY place where MDX slugs should be listed
const MDX_BLOG_POSTS = [
  'introducing-tracer-pt-1',
  'introducing-tracer-pt-2', 
  'experimenting-with-tracer-pt-3',
  'error-detection-with-tracer-pt-4',
  'tracer-use-case101',
  'test-post-1',
  'test-post-2',
  'sample-mdx-post',
  'kenya-day-one',
  'kenya-day-two',
  'kenya-day-three',
] as const;

// Type for MDX blog post slugs
export type MDXBlogSlug = typeof MDX_BLOG_POSTS[number];

/**
 * Check if a slug corresponds to an MDX blog post
 */
export function isMDXBlogPost(slug: string): slug is MDXBlogSlug {
  return MDX_BLOG_POSTS.includes(slug as MDXBlogSlug);
}

/**
 * Get all MDX blog post slugs
 */
export function getAllMDXSlugs(): readonly string[] {
  return MDX_BLOG_POSTS;
}

/**
 * Load metadata from an MDX file
 */
export async function loadMDXMetadata(slug: string): Promise<BlogPostMetadata | null> {
  try {
    const module = await import(`@/components/content/blog/${slug}.mdx`);
    const metadata = module.metadata;
    
    if (!metadata) {
      console.warn(`No metadata found for MDX post: ${slug}`);
      return null;
    }

    return {
      slug,
      title: metadata.title,
      date: metadata.date,
      description: metadata.description,
      author: metadata.author,
      tag: metadata.tag,
      readTime: metadata.readTime,
      ogImage: metadata.ogImage,
      template: metadata.template,
      imageSrc: metadata.ogImage, // For backward compatibility
    };
  } catch (error) {
    console.error(`Error loading MDX metadata for ${slug}:`, error);
    return null;
  }
}

/**
 * Load metadata from static blog posts (legacy)
 */
export async function loadStaticBlogPosts(): Promise<BlogPost[]> {
  try {
    const { getAllBlogPosts } = await import('@/app/blog/blogPosts');
    const staticPosts = getAllBlogPosts();
    
    return staticPosts.map(post => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      description: post.description,
      author: post.author,
      tag: post.tag,
      readTime: post.readTime,
      ogImage: post.imageSrc,
      imageSrc: post.imageSrc,
      type: 'static' as const,
      content: post.content,
    }));
  } catch (error) {
    console.error('Error loading static blog posts:', error);
    return [];
  }
}

/**
 * Get all blog posts (both MDX and static) with their metadata
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const allPosts: BlogPost[] = [];
  const processedSlugs = new Set<string>();

  // Load MDX posts first (they take priority)
  for (const slug of MDX_BLOG_POSTS) {
    const metadata = await loadMDXMetadata(slug);
    if (metadata) {
      allPosts.push({
        ...metadata,
        type: 'mdx',
      });
      processedSlugs.add(slug);
    }
  }

  // Load static posts, but skip any that already exist as MDX
  const staticPosts = await loadStaticBlogPosts();
  for (const staticPost of staticPosts) {
    if (!processedSlugs.has(staticPost.slug)) {
      allPosts.push(staticPost);
      processedSlugs.add(staticPost.slug);
    }
  }

  // Sort by date (newest first)
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a specific blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Check if it's an MDX post
  if (isMDXBlogPost(slug)) {
    const metadata = await loadMDXMetadata(slug);
    if (metadata) {
      return {
        ...metadata,
        type: 'mdx',
      };
    }
  }

  // Check static posts
  const staticPosts = await loadStaticBlogPosts();
  const staticPost = staticPosts.find(post => post.slug === slug);
  
  return staticPost || null;
}

/**
 * Get blog posts for static generation
 */
export async function getBlogPostsForStaticGeneration(): Promise<{ slug: string }[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.map(post => ({ slug: post.slug }));
}

/**
 * Get blog posts formatted for the blog page client
 */
export async function getBlogPostsForClient(): Promise<Array<{
  slug: string;
  metadata: {
    title: string;
    date: string;
    description: string;
    tag?: string;
    ogImage?: string;
    author?: string | string[];
  };
}>> {
  // Use getAllBlogPosts which already handles deduplication
  const allPosts = await getAllBlogPosts();

  return allPosts.map(post => ({
    slug: post.slug,
    metadata: {
      title: post.title,
      date: post.date,
      description: post.description,
      tag: post.tag,
      ogImage: post.ogImage,
      author: post.author,
    },
  }));
}
