import { Metadata } from 'next';
import ResourcesPageClient from './ResourcesPageClient';

export const metadata: Metadata = {
  title: 'Tracer | Resources',
  description: 'Explore our collection of guides, case studies, whitepapers, and tools to help you implement enterprise observability.',
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
