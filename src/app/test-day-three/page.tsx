'use client';

import React from 'react';
import { MDXProviderWrapper } from '@/components/MdxProvider';

export default function TestDayThree() {
  const [Content, setContent] = React.useState<React.ComponentType | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    import('@/components/content/blog/kenya-day-three.mdx')
      .then((module) => {
        console.log('Successfully loaded MDX module:', module);
        setContent(() => module.default);
      })
      .catch((err) => {
        console.error('Error loading MDX:', err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Error Loading Content</h1>
        <p>There was an error: {error}</p>
      </div>
    );
  }

  if (!Content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Test Day Three Content</h1>
      <MDXProviderWrapper>
        <Content />
      </MDXProviderWrapper>
    </div>
  );
}