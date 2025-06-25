import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';
import { generateBlogSchema } from '@/lib/blog-registry';

export const metadata: Metadata = {
  title: 'Tracer Resources',
  description: 'Insights, updates, technical articles, and tools related to HPC observability, bioinformatics, and scientific computing',
};

export default function ResourcesPage() {
  const blogSchema = generateBlogSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogPageClient />
    </>
  );
}
