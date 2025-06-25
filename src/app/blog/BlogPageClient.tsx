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

        // Create the Kenya Hackathon post
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

        // Filter to only show specific posts (Kenya days 1-4)
        const allowedSlugs = ['kenya-day-one', 'kenya-day-two', 'kenya-day-three', 'kenya-day-four'];
        const filteredPosts = blogPosts.filter(post =>
          allowedSlugs.includes(post.slug) && post.slug !== 'kenya-hackathon'
        );

        // Format dates to ensure consistent style (date, month, year)
        const formattedPosts = filteredPosts.map(post => {
          // Parse the date and reformat it
          let formattedDate = post.metadata.date;
          try {
            // Try to extract the date components from various formats
            let dateObj;

            // Handle formats like "Mon, 2 June" or "Monday, 2 June"
            const dayDateMatch = post.metadata.date.match(/(?:\w+,\s*)?(\d+)\s+(\w+)(?:\s+(\d{4}))?/);
            if (dayDateMatch && dayDateMatch[1] && dayDateMatch[2]) {
              const day = parseInt(dayDateMatch[1]);
              const monthName = dayDateMatch[2];
              const year = dayDateMatch[3] || '2025'; // Default to 2025 if year is not specified

              // Convert month name to month number
              const months = ['january', 'february', 'march', 'april', 'may', 'june',
                'july', 'august', 'september', 'october', 'november', 'december'];
              const monthIndex = months.findIndex(m => m.toLowerCase() === monthName.toLowerCase());

              if (monthIndex !== -1) {
                dateObj = new Date(parseInt(year), monthIndex, day);
              }
            }

            // If the above parsing failed, try standard date parsing
            if (!dateObj || isNaN(dateObj.getTime())) {
              dateObj = new Date(post.metadata.date);
            }

            // Format the date if we successfully parsed it
            if (dateObj && !isNaN(dateObj.getTime())) {
              const date = dateObj.getDate().toString().padStart(2, '0'); // Add leading zero if needed
              const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
              const month = months[dateObj.getMonth()];
              const year = dateObj.getFullYear();
              formattedDate = `${date} ${month} ${year}`;
            }
          } catch (e) {
            // Error formatting date - use original
          }

          return {
            ...post,
            metadata: {
              ...post.metadata,
              date: formattedDate
            }
          };
        });

        // Sort filtered posts by date (oldest to newest)
        formattedPosts.sort((a, b) => new Date(a.metadata.date).getTime() - new Date(b.metadata.date).getTime());

        // Combine with Kenya Hackathon post first
        const allPosts = [kenyaHackathonPost, ...formattedPosts];

        setPosts(allPosts);
      } catch (error) {
        // Error loading blog posts
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
