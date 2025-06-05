'use client';

import React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogIntro from '@/components/blog/BlogIntro';
import FilterBar from '@/components/blog/FilterBar';
import BlogGrid from '@/components/blog/BlogGrid';
import { getBlogPostsForClient } from '@/lib/blog-registry';

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

export default function BlogPageClient() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadPosts() {
      try {
        const blogPosts = await getBlogPostsForClient();

        // Filter to only show Kenya-related posts
        const kenyaPosts = blogPosts.filter(post =>
          post.slug.startsWith('kenya-day-')
        );

        // Add the kenya-hackathon post manually since it's not in MDX
        const kenyaHackathonPost = {
          slug: 'kenya-hackathon',
          metadata: {
            title: 'Kenya Hackathon 2025',
            date: '02 Jun 2025',
            description: "We flew to Kenya for a week-long hackathon to accelerate Tracer's growth. The goal? Drive verified user activations through a Reddit launch. From back-end tooling to interface polish, we're all-in - coding, designing, and shipping, with a 'swing for the fences' mindset.",
            tag: 'blog',
            ogImage: '/Blog/kenya.webp',
            author: 'Team Tracer',
          },
        };

        const allPosts = [kenyaHackathonPost, ...kenyaPosts];
        allPosts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

        setPosts(allPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
      <main className="w-full min-h-screen pt-20 bg-[#FCFCFC] relative">
        <div className="px-4 md:px-8 max-w-7xl xxl:max-w-none xxl:px-16 mx-auto relative z-10">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-[#202020]">Loading blog posts...</div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen pt-20 bg-[#FCFCFC] relative">
      {/* Horizontal Gridline - Where hero section ends */}
      <div
        className="absolute left-0 w-full bg-[#E8E8E8] pointer-events-none"
        style={{
          height: 1,
          top: 'calc(80px + 128px + 40px + 390px)', // pt-20 + pt-32 + title margin + hero container (350px + 40px top offset)
          zIndex: 1,
        }}
      />

      {/* Horizontal Gridline - Where vertical gridlines start */}
      <div
        className="absolute left-0 w-full bg-[#E8E8E8] pointer-events-none"
        style={{
          height: 1,
          top: 'calc(95px + 60px + 135px)', // Same position as vertical gridlines start
          zIndex: 1,
        }}
      />

      {/* Vertical Gridlines - Visible in background of subscribe section */}
      <div className="absolute left-0 w-full pointer-events-none" style={{ top: 'calc(95px + 60px + 135px)', height: 'calc(100% - 224px)' }}>
        {/* Gridline 1 */}
        <div
          className="absolute bg-[#E8E8E8]"
          style={{
            width: 1,
            left: 250,
            top: 0,
            height: '96%',
            zIndex: 1,
          }}
        />
        {/* Gridline 2 */}
        <div
          className="absolute bg-[#E8E8E8]"
          style={{
            width: 1,
            left: 570,
            top: 0,
            height: '96%',
            zIndex: 1,
          }}
        />
        {/* Gridline 3 */}
        <div
          className="absolute bg-[#E8E8E8]"
          style={{
            width: 1,
            left: 890,
            top: 0,
            height: '96%',
            zIndex: 1,
          }}
        />
        {/* Gridline 4 */}
        <div
          className="absolute bg-[#E8E8E8]"
          style={{
            width: 1,
            left: 1210,
            top: 0,
            height: '96%',
            zIndex: 1,
          }}
        />
      </div>

      <div className="px-4 md:px-8 max-w-7xl xxl:max-w-none xxl:px-16 mx-auto relative z-10">
      <BlogHero />
      <div className="mt-12">
        <BlogIntro />
      </div>
      <div className="mt-12">
        <FilterBar showFilters={false} />
      </div>
      <div className="mt-16">
        <BlogGrid posts={posts} />
      </div>
      </div>
    </main>
  );
}
