import { Metadata } from 'next';
import BlogPageClient from '../blog/BlogPageClient';

export const metadata: Metadata = {
  title: 'Tracer | Resources',
  description: 'Explore our latest blog posts, whitepapers, case studies, and resources.',
};

export default function ResourcesPage() {
  return <BlogPageClient />;
}
