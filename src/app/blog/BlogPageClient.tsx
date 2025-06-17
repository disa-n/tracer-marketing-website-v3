'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogHero from '@/components/blog/BlogHero';
import FilterBar from '@/components/blog/FilterBar';
import BlogGrid from '@/components/blog/BlogGrid';
import { GridLinesLight } from '@/components/shared/GridLines';
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
            if (dayDateMatch) {
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
            console.error('Error formatting date:', e);
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
      <div className="px-4 md:px-8 max-w-7xl xxl:max-w-none xxl:px-16 mx-auto relative z-10">
        {/* Hero Section with GridLines */}
        <div className="relative" style={{ transform: 'translateY(-20px)' }}>
          {/* GridLines positioned behind hero section only */}
          <div className="absolute inset-0 -top-20 h-[calc(100%+80px)]">
            <GridLinesLight />
          </div>

          <div className="relative z-10">
            <BlogHero />
          </div>

          {/* Horizontal line at bottom of hero section - extends across full page */}
          <div className="absolute bottom-0 left-1/2 w-screen h-px bg-[#E8E8E8] transform -translate-x-1/2"></div>
        </div>

        {/* Tools Section - Now comes first */}
        <div className="mt-4 relative">
          {/* GridLines for Tools section - start at the horizontal line */}
          <div className="absolute inset-0 top-0 h-full">
            <GridLinesLight />
          </div>

          <div className="relative z-10">
            <div className="self-stretch text-[#202020] font-normal leading-[46px] break-words ml-4 mb-8" style={{
              fontFamily: 'Britti Sans',
              fontSize: 'clamp(32px,8vw,64px)'
            }}>
              Tools
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Link href="/tools/reverse-complement" className="block h-full">
                <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col min-h-[clamp(410px,55vw,480px)] z-[2] bg-[#FCFCFC] cursor-pointer">
                  <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-[#F8F8F8] to-[#E8E8E8]">
                    {/* DNA Asset Image */}
                    <Image
                      src="/Blog/T-DNA-Pink.webp"
                      alt="DNA asset preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-4 px-4 pb-4 sm:pt-6 sm:px-6 sm:pb-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <span className="font-chakra-petch text-xs sm:text-sm font-normal uppercase leading-[19px] text-[#202020]">
                        Tool
                      </span>
                    </div>
                    <h2 className="font-britti-sans text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-[#202020] hover:text-gray-700 transition-colors leading-tight">
                      Reverse Complement Generator
                    </h2>
                    <p className="font-britti-sans text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-1 leading-snug">
                      Paste a sequence and get its reverse, complement, or both.
                    </p>
                    <div className="mt-auto">
                      <div className="font-chakra-petch text-xs sm:text-sm font-normal uppercase leading-[19px] text-[#202020] hover:text-[#404040] transition-colors">
                        USE TOOL →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Section - Now comes second with title and description */}
        <div className="mt-20 relative">
          {/* GridLines for Blog section - continue from Tools section */}
          <div className="absolute inset-0 top-0 h-full">
            <GridLinesLight />
          </div>

          <div className="relative z-10">
            {/* Blog Title and Description - Using exact styling from BlogIntro */}
            <div className="w-full h-full flex flex-col justify-start items-start gap-10 pt-16 pl-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch text-[#202020] text-[48px] font-normal leading-[46px] break-words" style={{ fontFamily: 'Britti Sans' }}>
                  Tracer Blog
                </div>
                <div className="self-stretch text-[#202020] text-[18px] font-normal leading-[20px] break-words" style={{ fontFamily: 'Britti Sans' }}>
                  Insights, announcements, and technical deep-dives from the Tracer team. Stay up to date on platform updates, real-world use cases, and best practices in high-performance compute and observability.
                </div>
              </div>
            </div>

            <div className="mt-12">
              <FilterBar showFilters={false} />
            </div>
            <div className="mt-16">
              <BlogGrid posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
