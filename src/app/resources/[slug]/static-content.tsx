'use client';

import React, { useState, useEffect } from 'react';
import ComingSoon from '@/components/shared/ComingSoon';
import { getBlogPost, BlogPost } from '@/lib/blog-registry';
import BlogPostTemplate from '@/components/blog/BlogPostTemplate';

// Simple static content for test posts
export default function StaticContent({ slug }: { slug: string }) {
  const [isComingSoon, setIsComingSoon] = useState(true); // Default to true for SSR
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const blogPost = await getBlogPost(slug);
        if (blogPost) {
          setPost(blogPost);
          setIsComingSoon(false);
        } else {
          setIsComingSoon(true);
        }
      } catch (error) {
        console.error("Error loading blog post:", error);
        setIsComingSoon(true);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  // Show loading state during SSR and initial client load
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

  // Show coming soon if no post found
  if (isComingSoon) {
    return <ComingSoon />;
  }

  console.log("Rendering blog content for slug:", slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-britti-sans mb-6 text-[#202020]">Post Not Found</h1>
        <p className="text-[#202020] leading-relaxed">Sorry, the blog post you are looking for does not exist or could not be loaded.</p>
      </div>
    );
  }

  // Convert the blog post to the format expected by BlogPostTemplate
  const templatePost = {
    slug: post.slug,
    title: post.title,
    date: post.date,
    imageSrc: post.ogImage || post.imageSrc || '',
    description: post.description,
    author: post.author,
    tag: post.tag,
    readTime: post.readTime,
    content: post.content || ''
  };

  return (
    <BlogPostTemplate
      post={templatePost}
      template="default"
    />
  );
}
