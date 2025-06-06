'use client';

import React, { useState, useEffect } from 'react';
import ComingSoon from '@/components/shared/ComingSoon';
import { getBlogPost } from '@/lib/blog-registry';
import BlogPostTemplate from '@/components/blog/BlogPostTemplate';

// Simple static content for test posts
export default function StaticContent({ slug }: { slug: string }) {
  const [isComingSoon, setIsComingSoon] = useState(true); // Default to true for SSR
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        if (typeof window !== 'undefined') {
          const hostname = window.location.hostname;
          const isLocalhost = hostname.includes("localhost");

          console.log("Current hostname:", hostname);
          console.log("Is localhost:", isLocalhost);

          if (isLocalhost) {
            setIsComingSoon(false);
            console.log("Setting isComingSoon to false (localhost)");
          } else {
            setIsComingSoon(true);
            console.log("Setting isComingSoon to true (production)");
          }
        } else {
          // Default to coming soon during SSR
          setIsComingSoon(true);
          console.log("Setting isComingSoon to true (SSR)");
        }

        // If not coming soon, load the blog post data
        if (!isComingSoon) {
          const blogPost = await getBlogPost(slug);
          setPost(blogPost);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug, isComingSoon]);

  console.log("Current isComingSoon state:", isComingSoon);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-[#202020]">Loading...</div>
      </div>
    );
  }

  if(isComingSoon) {
    console.log("Rendering ComingSoon component");
    return <ComingSoon />
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

  // You can change the template here: 'default', 'minimal', 'magazine', 'technical'
  return <BlogPostTemplate post={templatePost} template="default" />;
}
