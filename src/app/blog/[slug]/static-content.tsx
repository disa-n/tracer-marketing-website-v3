'use client';

import BlogPostTemplate from '@/components/blog/BlogPostTemplate';
import ComingSoon from '@/components/shared/ComingSoon';
import { BlogPost, getBlogPost } from '@/lib/blog-registry';
import { useEffect, useState } from 'react';

// Simple static content for test posts
export default function StaticContent({ slug }: { slug: string }) {
  const [isComingSoon, setIsComingSoon] = useState(true); // Default to true for SSR
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        if (typeof window !== 'undefined') {
          const hostname = window.location.hostname;
          const isLocalhost = hostname.includes("localhost");

          if (isLocalhost) {
            setIsComingSoon(false);
          } else {
            setIsComingSoon(true);
          }
        } else {
          // Default to coming soon during SSR
          setIsComingSoon(true);
        }

        // If not coming soon, load the blog post data
        if (!isComingSoon) {
          const blogPost = await getBlogPost(slug);
          setPost(blogPost);
        }
      } catch {
        // Error loading blog post
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug, isComingSoon]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-[#202020]">Loading...</div>
      </div>
    );
  }

  if (isComingSoon) {
    return <ComingSoon />
  }

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
    imageSrc: post.ogImage || post.imageSrc || '/icons/icon-placeholder.svg',
    description: post.description,
    author: post.author || 'Team Tracer',
    tag: post.tag || 'general',
    readTime: post.readTime || '5 min read',
    content: post.content || ''
  };

  // You can change the template here: 'default', 'minimal', 'magazine', 'technical'
  return <BlogPostTemplate post={templatePost} template="default" />;
}
