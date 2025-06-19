'use client';

import React from 'react';
import { MDXProviderWrapper } from '@/components/MdxProvider';
import BlogPostTemplate from '@/components/blog/BlogPostTemplate';

interface MDXContentProps {
  slug: string;
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

export default function MDXContent({ slug }: MDXContentProps) {
  const [mounted, setMounted] = React.useState(false);
  const [Component, setComponent] = React.useState<React.ComponentType | null>(null);
  const [metadata, setMetadata] = React.useState<MDXModule['metadata'] | null>(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    // Dynamic import in useEffect to ensure client-side execution
    import(`@/components/content/blog/${slug}.mdx`)
      .then((module: MDXModule) => {
        setComponent(() => module.default);
        setMetadata(module.metadata || null);
      })
      .catch((err) => {
        console.error(`Error loading MDX file: ${slug}.mdx`, err);
        setError(true);
      });
  }, [slug]);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <p>Sorry, the blog post you are looking for does not exist or could not be loaded.</p>
      </div>
    );
  }

  if (!mounted || !Component || !metadata) {
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

  // Create a blog post object from MDX metadata
  const blogPost = {
    slug,
    title: metadata.title,
    date: metadata.date,
    imageSrc: metadata.ogImage || '',
    description: metadata.description,
    author: metadata.author,
    tag: metadata.tag,
    readTime: metadata.readTime,
    content: '' // Content will be rendered by the MDX component
  };

  // Get the template from metadata, default to 'default'
  const template = metadata.template || 'default';

  return (
    <BlogPostTemplate
      post={blogPost}
      template={template}
      mdxContent={
        <MDXProviderWrapper>
          <Component />
        </MDXProviderWrapper>
      }
    />
  );
}
