/**
 * Unified Metadata Generator - Consistent metadata across all content types
 */

import { Metadata } from 'next';
import { UnifiedContent, getCanonicalUrl } from './content-loader';

const SITE_NAME = 'Tracer';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tracer.ai';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.png`;

/**
 * Generate metadata for any content type
 */
export function generateContentMetadata(content: UnifiedContent): Metadata {
  const canonicalUrl = getCanonicalUrl(content);
  const ogImage = content.ogImage || DEFAULT_OG_IMAGE;
  
  const baseMetadata: Metadata = {
    title: `${content.title} | ${SITE_NAME}`,
    description: content.description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: content.title
        }
      ],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: [ogImage]
    }
  };

  // Add content-specific metadata
  switch (content.type) {
    case 'blog':
    case 'resource':
      return {
        ...baseMetadata,
        authors: content.author ? [{ name: content.author }] : [{ name: 'Team Tracer' }],
        keywords: content.tag ? [content.tag, 'tracer', 'observability', 'monitoring'] : undefined,
        openGraph: {
          ...baseMetadata.openGraph,
          type: 'article',
          publishedTime: content.date,
          authors: content.author ? [content.author] : ['Team Tracer']
        }
      };
      
    case 'whitepaper':
      return {
        ...baseMetadata,
        openGraph: {
          ...baseMetadata.openGraph,
          type: 'website' // Whitepapers are more like landing pages
        },
        keywords: ['whitepaper', 'tracer', 'observability', 'monitoring', 'download']
      };
      
    default:
      return baseMetadata;
  }
}

/**
 * Generate not found metadata
 */
export function generateNotFoundMetadata(contentType: string): Metadata {
  return {
    title: `${contentType} Not Found | ${SITE_NAME}`,
    description: `The requested ${contentType.toLowerCase()} could not be found.`,
    robots: {
      index: false,
      follow: false
    }
  };
}

/**
 * Generate error metadata
 */
export function generateErrorMetadata(contentType: string): Metadata {
  return {
    title: `Error Loading ${contentType} | ${SITE_NAME}`,
    description: `An error occurred while loading this ${contentType.toLowerCase()}.`,
    robots: {
      index: false,
      follow: false
    }
  };
}

/**
 * Generate JSON-LD schema for content
 */
export function generateContentSchema(content: UnifiedContent) {
  const canonicalUrl = getCanonicalUrl(content);
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": content.type === 'whitepaper' ? 'WebPage' : 'BlogPosting',
    "headline": content.title,
    "description": content.description,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "inLanguage": "en-US"
  };

  // Add content-specific schema
  if (content.type === 'blog' || content.type === 'resource') {
    return {
      ...baseSchema,
      "author": {
        "@type": "Person",
        "name": content.author || "Team Tracer"
      },
      "datePublished": content.date,
      "image": content.ogImage,
      "articleSection": content.tag || "Technology"
    };
  }

  if (content.type === 'whitepaper') {
    return {
      ...baseSchema,
      "@type": "WebPage",
      "mainEntity": {
        "@type": "DigitalDocument",
        "name": content.title,
        "description": content.description,
        "url": content.downloadUrl
      }
    };
  }

  return baseSchema;
}
