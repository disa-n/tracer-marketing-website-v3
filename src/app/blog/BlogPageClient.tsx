'use client';

import BlogHero from '@/components/blog/BlogHero';
import BlogIntro from '@/components/blog/BlogIntro';
import FilterBar from '@/components/blog/FilterBar';
import BlogGrid from '@/components/blog/BlogGrid';

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
  const posts: BlogPost[] = [
    {
      slug: 'kenya-hackathon',
      metadata: {
        title: 'Kenya Hackathon 2025',
        date: '02 Jun 2025',
        description: "We flew to Kenya for a week-long hackathon to accelerate Tracer's growth. The goal? Drive verified user activations through a Reddit launch. From back-end tooling to interface polish, we're all-in - coding, designing, and shipping, with a 'swing for the fences' mindset.",
        tag: 'Blog',
        ogImage: '/Blog/kenya.webp',
        author: 'Team Tracer',
      },
    },
    {
      slug: 'kenya-day-one',
      metadata: {
        title: 'Hackathon Day One: Monday, June 2nd',
        date: '02 Jun 2025',
        description: 'A hackathon kick-off note from Laura, our COO, and records from our first day in Nairobi, Kenya.',
        tag: 'Blog',
        ogImage: '/Blog/day1-city-view.webp',
        author: 'Laura',
      },
    },
    {
      slug: 'kenya-day-two',
      metadata: {
        title: 'Hackathon Day Two: Tuesday, June 3rd',
        date: '03 Jun 2025',
        description: 'Kenya Day Two: Tracer runs natively on Mac ARM, the blog goes live, and we\'re learning why having the right foundation matters.',
        tag: 'Blog',
        ogImage: '/Blog/day2-tracer-working.webp',
        author: 'Team Tracer',
      },
    },
    {
      slug: 'kenya-day-three',
      metadata: {
        title: 'Hackathon Day Three: Wednesday, June 4th',
        date: '04 Jun 2025',
        description: 'Kenya Day Three: A well-earned break, a tour through Nairobi\'s rich history, and rooftop views before diving back into build mode.',
        tag: 'Blog',
        ogImage: '/Blog/day3-tracer-rooftop.webp',
        author: 'Team Tracer',
      },
    },
  ];

  posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

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
