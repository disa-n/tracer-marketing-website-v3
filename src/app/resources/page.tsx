import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Resources | Tracer',
  description: 'Explore our latest blog posts, whitepapers, case studies, and helper tools to support bioinformatic workflows.',
};

export default function ResourcesPage() {
  return <BlogPageClient />;
}
