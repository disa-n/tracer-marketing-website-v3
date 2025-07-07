/**
 * Unified Blog Post Route - Handles both blog and resource content
 * Route: /blog/[slug]
 *
 * This route serves as the canonical location for all blog content.
 * Resources are redirected here for SEO consistency.
 */

import { loadContent } from '@/lib/content-loader';
import { generateContentMetadata, generateNotFoundMetadata } from '@/lib/metadata-generator';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;

    // Try to load as blog content first, then as resource
    let content = await loadContent(slug, 'blog');
    if (!content) {
      content = await loadContent(slug, 'resource');
    }

    if (!content) {
      return generateNotFoundMetadata('Blog Post');
    }

    return generateContentMetadata(content);
  } catch (error) {
    console.error("Error generating metadata:", error);
    return generateNotFoundMetadata('Blog Post');
  }
}

import UnifiedContentRenderer from '@/components/resources/UnifiedContentRenderer';
import { generateContentSchema } from '@/lib/metadata-generator';

/**
 * Main blog post page component
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;

    // Try to load as blog content first, then as resource
    let content = await loadContent(slug, 'blog');
    if (!content) {
      content = await loadContent(slug, 'resource');
    }

    if (!content) {
      notFound();
    }

    // Generate JSON-LD schema for SEO
    const contentSchema = generateContentSchema(content);

    return (
      <>
        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }}
        />

        {/* Render the content */}
        <UnifiedContentRenderer content={content} />
      </>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}

/**
 * Generate static params for better performance
 * This can be expanded to pre-generate popular posts
 */
export async function generateStaticParams() {
  // For now, generate pages on-demand for better development experience
  // In production, you might want to pre-generate popular blog posts
  return [];
}
