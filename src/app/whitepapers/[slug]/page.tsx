/**
 * Dynamic Whitepaper Download Page
 *
 * Individual whitepaper pages with download gateway
 * Route: /whitepapers/[slug]
 */

import { loadContent } from '@/lib/content-loader';
import { generateContentMetadata, generateNotFoundMetadata } from '@/lib/metadata-generator';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface WhitepaperPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: WhitepaperPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const content = await loadContent(slug, 'whitepaper');

    if (!content) {
      return generateNotFoundMetadata('Whitepaper');
    }

    return generateContentMetadata(content);
  } catch (error) {
    console.error("Error generating metadata:", error);
    return generateNotFoundMetadata('Whitepaper');
  }
}

import UnifiedContentRenderer from '@/components/resources/UnifiedContentRenderer';
import { generateContentSchema } from '@/lib/metadata-generator';

export default async function WhitepaperPage({ params }: WhitepaperPageProps) {
  try {
    const { slug } = await params;
    const content = await loadContent(slug, 'whitepaper');

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
    console.error("Error loading whitepaper:", error);
    notFound();
  }
}

// Generate static paths for all whitepapers (optional - for better performance)
export async function generateStaticParams() {
  // For now, generate pages on-demand for better development experience
  // In production, you might want to pre-generate popular whitepapers
  return [];
}
