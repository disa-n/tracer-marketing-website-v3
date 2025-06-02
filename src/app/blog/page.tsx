'use client';

import { useState, useEffect } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import ComingSoon from '@/components/shared/ComingSoon';

type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    date: string;
    description: string;
    tag?: string;
    ogImage?: string;
    author?: string | string[];
  };
};

export default function BlogPage() {
  const [isComingSoon, setIsComingSoon] = useState(true);

  useEffect(() => {
    setIsComingSoon(process.env.NODE_ENV === 'development' ? false : true);
  }, []);

  if (isComingSoon) return <ComingSoon />;

  const posts: BlogPost[] = [
    {
      slug: 'test-post-1',
      metadata: {
        title: 'Test Post 1',
        date: '2024-05-01',
        description: 'This is a test post.',
        tag: 'Testing',
        ogImage: '/placeholder-icon.svg',
        author: 'John Doe',
      },
    },
    {
      slug: 'test-post-2',
      metadata: {
        title: 'Test Post 2',
        date: '2024-04-15',
        description: 'This is another test post.',
        tag: 'Example',
        ogImage: '/placeholder-icon.svg',
        author: 'Jane Smith',
      },
    },
  ];

  posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return (
    <main className="w-full min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#FCFCFC]">
      <BlogHero />
      <div className="mt-16">
        <BlogGrid posts={posts} />
      </div>
    </main>
  );
}



