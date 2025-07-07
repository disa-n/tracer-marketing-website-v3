/**
 * Dynamic Whitepaper Download Page
 * 
 * Individual whitepaper pages with download gateway
 * Route: /whitepapers/[slug]
 */

import WhitepaperDownloadGateway from '@/components/downloads/WhitepaperDownloadGateway';
import { generateWhitepaperMetadata, getWhitepaperBySlug } from '@/lib/whitepapers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface WhitepaperPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: WhitepaperPageProps): Promise<Metadata> {
  const { slug } = await params;
  const whitepaper = getWhitepaperBySlug(slug);
  
  if (!whitepaper) {
    return {
      title: 'Whitepaper Not Found | Tracer',
      description: 'The requested whitepaper could not be found.'
    };
  }

  return generateWhitepaperMetadata(whitepaper);
}

export default async function WhitepaperPage({ params }: WhitepaperPageProps) {
  const { slug } = await params;
  const whitepaper = getWhitepaperBySlug(slug);

  // Return 404 if whitepaper not found
  if (!whitepaper) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#FCFCFC]">
      <WhitepaperDownloadGateway whitepaper={whitepaper} />
    </main>
  );
}

// Generate static paths for all whitepapers (optional - for better performance)
export async function generateStaticParams() {
  // For now, generate pages on-demand for better development experience
  // In production, you might want to pre-generate popular whitepapers
  return [];
}
