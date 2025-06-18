'use client';

import React from 'react';
import FilterBar from '@/components/blog/FilterBar';
import BlogGrid from '@/components/blog/BlogGrid';
import ReusableHero from '@/components/shared/ReusableHero';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import ToolCard from '@/components/shared/ToolCard';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { TOOLS } from '@/lib/constants';

export default function BlogPageClient() {
  const { posts, loading, error } = useBlogPosts();

  if (loading) {
    return <LoadingSpinner message="Loading blog posts..." />;
  }

  if (error) {
    return <LoadingSpinner message={error} />;
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <ReusableHero
        title="Resources"
        subtitle="The latest updates from Tracer. See our changelog for more product updates."
        showEmailSignup={true}
        imageSrc="/Blog/T-chip.webp"
        imageAlt="Blog hero placeholder"
        imageStyle="blog"
        className="lg:-mt-16 xl:-mt-20 2xl:-mt-24"
      />

      {/* Tools Section */}
      <Section showGridLines={true} padding="none" maxWidth="full" className="pt-24 pb-8">
        <div className="flex flex-col lg:flex-row">
          <div className="relative z-10 px-4 md:px-8 lg:px-12 xl:px-12 2xl:px-12 lg:w-full">
            <SectionTitle
              title="Tools"
              size="large"
              className="mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
              {TOOLS.map((tool) => (
                <ToolCard
                  key={tool.href}
                  href={tool.href}
                  title={tool.title}
                  description={tool.description}
                  imageSrc={tool.imageSrc}
                  imageAlt={tool.imageAlt}
                  category={tool.category}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Section */}
      <Section showGridLines={true} padding="none" maxWidth="full" className="pt-24 pb-20">
        <div className="flex flex-col lg:flex-row">
          <div className="relative z-10 px-4 md:px-8 lg:px-12 xl:px-12 2xl:px-12 lg:w-full">
            <SectionTitle
              title="Tracer Blog"
              subtitle="Insights, announcements, and technical deep-dives from the Tracer team. Stay up to date on platform updates, real-world use cases, and best practices in high-performance compute and observability."
              size="large"
              className="mb-12"
            />

            <div className="mt-12">
              <FilterBar showFilters={false} />
            </div>
            <div className="mt-16">
              <BlogGrid posts={posts} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
