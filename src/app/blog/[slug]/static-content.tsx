'use client';

import React, { useState, useEffect } from 'react';
import ComingSoon from '@/components/shared/ComingSoon';
import { getBlogPost } from '@/data/blogPosts';
import BlogPostTemplate from '@/components/blog/BlogPostTemplate';

// Simple static content for test posts
export default function StaticContent({ slug }: { slug: string }) {
  const [isComingSoon, setIsComingSoon] = useState(true); // Default to true for SSR

  useEffect(() => {
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

    // alternative way to do it:
    // process.env.NODE_ENV === "development" ? setIsComingSoon(false) : setIsComingSoon(true);

  }, []);

  console.log("Current isComingSoon state:", isComingSoon);

  if(isComingSoon) {
    console.log("Rendering ComingSoon component");
    return <ComingSoon />
  }

  console.log("Rendering blog content for slug:", slug);

  // Get the blog post data
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-britti-sans mb-6 text-[#202020]">Post Not Found</h1>
        <p className="text-[#202020] leading-relaxed">Sorry, the blog post you are looking for does not exist or could not be loaded.</p>
      </div>
    );
  }

  // You can change the template here: 'default', 'minimal', 'magazine', 'technical'
  return <BlogPostTemplate post={post} template="default" />;
}
