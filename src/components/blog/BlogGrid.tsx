import React from 'react';
import BlogCard from './BlogCard';

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

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          {...post.metadata}
        />
      ))}
    </div>
  );
}
