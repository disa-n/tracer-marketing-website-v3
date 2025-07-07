/**
 * Resources Route Redirect - Redirects to canonical blog URLs
 * Route: /resources/[slug] -> /blog/[slug]
 *
 * This provides SEO-friendly redirects from old resource URLs to the new unified blog structure.
 */


import { loadContent } from '@/lib/content-loader';
import { redirect } from 'next/navigation';

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Redirect resources to canonical blog URLs
 * This ensures SEO consistency and prevents duplicate content
 */
export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;

  // Check if content exists before redirecting
  const content = await loadContent(slug, 'resource');

  if (!content) {
    // If content doesn't exist as resource, try as blog
    const blogContent = await loadContent(slug, 'blog');
    if (blogContent) {
      redirect(`/blog/${slug}`);
    }
    // If neither exists, let the blog route handle the 404
    redirect(`/blog/${slug}`);
  }

  // Redirect to canonical blog URL
  redirect(`/blog/${slug}`);
}
