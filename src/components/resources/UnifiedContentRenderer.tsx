/**
 * Unified Content Renderer - Handles all content types consistently
 */

'use client';

import BlogPostTemplate from '@/components/resources/blog/BlogPostTemplate';
import WhitepaperDownloadGateway from '@/components/resources/downloads/WhitepaperDownloadGateway';
import { MDXProviderWrapper } from '@/components/resources/mdx/MdxProvider';
import ComingSoon from '@/components/ui/content/ComingSoon';
import { UnifiedContent } from '@/lib/content-loader';
import React from 'react';

interface UnifiedContentRendererProps {
  content: UnifiedContent;
}

interface MDXModule {
  default: React.ComponentType;
  metadata?: {
    title: string;
    date: string;
    description: string;
    author?: string;
    tag?: string;
    readTime?: string;
    ogImage?: string;
    template?: 'default' | 'minimal' | 'magazine' | 'technical';
  };
}

export default function UnifiedContentRenderer({ content }: UnifiedContentRendererProps) {
  const [mdxComponent, setMdxComponent] = React.useState<React.ComponentType | null>(null);
  const [mdxMetadata, setMdxMetadata] = React.useState<MDXModule['metadata'] | null>(null);
  const [mdxError, setMdxError] = React.useState(false);
  const [loading, setLoading] = React.useState(content.isMDX);

  // Load MDX component if needed
  React.useEffect(() => {
    if (!content.isMDX) {
      setLoading(false);
      return;
    }

    async function loadMDXComponent() {
      try {
        // Try to load the MDX file
        const mdxModule = await import(`../../../content/blog/${content.slug}.mdx`) as MDXModule;
        setMdxComponent(() => mdxModule.default);
        setMdxMetadata(mdxModule.metadata || null);
      } catch (error) {
        console.error(`Failed to load MDX component for ${content.slug}:`, error);
        setMdxError(true);
      } finally {
        setLoading(false);
      }
    }

    loadMDXComponent();
  }, [content.slug, content.isMDX]);

  // Loading state
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    );
  }

  // Handle different content types
  switch (content.type) {
    case 'whitepaper':
      if (!content.whitepaperData) {
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold font-britti-sans mb-6 text-[#202020]">Whitepaper Not Found</h1>
            <p className="text-[#202020] leading-relaxed">
              Sorry, the whitepaper data could not be loaded.
            </p>
          </div>
        );
      }

      return (
        <main className="w-full min-h-screen bg-[#FCFCFC]">
          <WhitepaperDownloadGateway whitepaper={content.whitepaperData} />
        </main>
      );

    case 'blog':
    case 'resource':
      // Handle unpublished content
      if (content.published === false) {
        return <ComingSoon />;
      }

      // Handle MDX content
      if (content.isMDX && mdxComponent && !mdxError) {
        const Component = mdxComponent;
        const templateMetadata = mdxMetadata || {
          title: content.title,
          date: content.date || '',
          description: content.description,
          author: content.author,
          tag: content.tag,
          readTime: content.readTime,
          ogImage: content.ogImage,
          template: content.template
        };

        return (
          <MDXProviderWrapper>
            <BlogPostTemplate
              post={{
                slug: content.slug,
                title: templateMetadata.title,
                date: templateMetadata.date,
                imageSrc: templateMetadata.ogImage || content.ogImage || '/icons/icon-placeholder.svg',
                description: templateMetadata.description,
                author: templateMetadata.author || content.author || 'Team Tracer',
                tag: templateMetadata.tag || content.tag || 'general',
                readTime: templateMetadata.readTime || content.readTime || '5 min read',
                content: '',
                type: 'mdx' as const
              }}
              template={templateMetadata.template || content.template || 'default'}
              mdxContent={<Component />}
            />
          </MDXProviderWrapper>
        );
      }

      // Handle static content
      if (!content.isMDX || mdxError) {
        return (
          <BlogPostTemplate
            post={{
              slug: content.slug,
              title: content.title,
              date: content.date || '',
              imageSrc: content.ogImage || '/icons/icon-placeholder.svg',
              description: content.description,
              author: content.author || 'Team Tracer',
              tag: content.tag || 'general',
              readTime: content.readTime || '5 min read',
              content: content.content || '',
              type: 'static' as const
            }}
            template={content.template || 'default'}
          />
        );
      }

      // Fallback for MDX loading error
      return (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold font-britti-sans mb-6 text-[#202020]">Content Loading Error</h1>
          <p className="text-[#202020] leading-relaxed">
            Sorry, there was an error loading this content. Please try again later.
          </p>
        </div>
      );

    default:
      return (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold font-britti-sans mb-6 text-[#202020]">Unsupported Content Type</h1>
          <p className="text-[#202020] leading-relaxed">
            This content type is not supported.
          </p>
        </div>
      );
  }
}
