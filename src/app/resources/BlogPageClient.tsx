'use client';

import React, { useState, useMemo, useEffect } from 'react';
import FilterBar from '@/components/blog/FilterBar';

import BlogCard from '@/components/blog/BlogCard';
import BlogPagination from '@/components/blog/BlogPagination';
import ReusableHero from '@/components/shared/ReusableHero';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import ToolCard from '@/components/shared/ToolCard';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { TOOLS } from '@/lib/constants';

// Dynamic posts per page based on grid columns to ensure single row
const getPostsPerPage = () => {
  if (typeof window === 'undefined') return 4; // Default for SSR

  const width = window.innerWidth;
  if (width >= 1536) return 4; // 2xl: 4 columns
  if (width >= 1024) return 3; // lg: 3 columns
  if (width >= 640) return 2;  // sm: 2 columns
  return 1; // mobile: 1 column
};

export default function BlogPageClient() {
  const { data, loading, error } = useBlogPosts();
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesCurrentPage, setArticlesCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  // Update posts per page based on window size
  useEffect(() => {
    const updatePostsPerPage = () => {
      const newPostsPerPage = getPostsPerPage();
      if (newPostsPerPage !== postsPerPage) {
        setPostsPerPage(newPostsPerPage);
        // Reset to first page when posts per page changes
        setCurrentPage(1);
        setArticlesCurrentPage(1);
      }
    };

    // Set initial value
    updatePostsPerPage();

    // Add resize listener
    window.addEventListener('resize', updatePostsPerPage);
    return () => window.removeEventListener('resize', updatePostsPerPage);
  }, [postsPerPage]);

  // Filter posts to exclude articles for recent posts section
  const recentPosts = useMemo(() => {
    return data.posts.filter(post => post.metadata.tag !== 'article');
  }, [data.posts]);

  // Filter articles
  const articles = useMemo(() => {
    return data.posts.filter(post => post.metadata.tag === 'article');
  }, [data.posts]);

  // Calculate pagination for recent posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return recentPosts.slice(startIndex, endIndex);
  }, [recentPosts, currentPage, postsPerPage]);

  // Calculate pagination for articles
  const paginatedArticles = useMemo(() => {
    const startIndex = (articlesCurrentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return articles.slice(startIndex, endIndex);
  }, [articles, articlesCurrentPage, postsPerPage]);

  const totalPages = Math.ceil(recentPosts.length / postsPerPage);
  const totalArticlePages = Math.ceil(articles.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to recent posts section
    if (typeof window !== 'undefined') {
      const recentPostsSection = document.getElementById('recent-posts');
      if (recentPostsSection) {
        recentPostsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleArticlesPageChange = (page: number) => {
    setArticlesCurrentPage(page);
    // Scroll to articles section
    if (typeof window !== 'undefined') {
      const articlesSection = document.getElementById('all-articles');
      if (articlesSection) {
        articlesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

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
              subtitle="Insights, announcements, and updates from the Tracer team."
              size="large"
              className="mb-12"
            />

            <div className="mt-12">
              <FilterBar showFilters={false} />
            </div>

            {/* Directories Row */}
            {data.directories.length > 0 && (
              <div className="mt-12 sm:mt-16">
                <h3 className="text-base sm:text-lg font-britti-sans font-medium mb-4 sm:mb-6 text-[#202020] px-4 md:px-0">
                  SERIES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 md:px-0">
                  {data.directories.map((directory) => (
                    <BlogCard
                      key={directory.slug}
                      slug={directory.slug}
                      title={directory.metadata.title}
                      date={directory.metadata.date}
                      description={directory.metadata.description}
                      ogImage={directory.metadata.ogImage}
                      tag={directory.metadata.tag}
                      author={directory.metadata.author}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Recent Posts Row */}
            {data.posts.length > 0 && (
              <div id="recent-posts" className="mt-12 sm:mt-16">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-6 px-4 md:px-0">
                  <h3 className="text-base sm:text-lg font-britti-sans font-medium text-[#202020]">
                    RECENT POSTS
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 md:px-0">
                  {paginatedPosts.map((post) => (
                    <BlogCard
                      key={post.slug}
                      slug={post.slug}
                      title={post.metadata.title}
                      date={post.metadata.date}
                      description={post.metadata.description}
                      ogImage={post.metadata.ogImage}
                      tag={post.metadata.tag}
                      author={post.metadata.author}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalPosts={recentPosts.length}
                    currentPostsCount={paginatedPosts.length}
                    className="px-4 md:px-0"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Articles Section */}
      <Section showGridLines={true} padding="none" maxWidth="full" className="pt-24 pb-20">
        <div className="flex flex-col lg:flex-row">
          <div className="relative z-10 px-4 md:px-8 lg:px-12 xl:px-12 2xl:px-12 lg:w-full">
            <SectionTitle
              title="Articles"
              subtitle="In-depth technical articles and insights on bioinformatics from the Tracer team."
              size="large"
              className="mb-12"
            />

            {/* All Articles Row */}
            {articles.length > 0 && (
              <div id="all-articles" className="mt-12 sm:mt-16">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-6 px-4 md:px-0">
                  <h3 className="text-base sm:text-lg font-britti-sans font-medium text-[#202020]">
                    ALL ARTICLES
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 md:px-0">
                  {paginatedArticles.map((post) => (
                    <BlogCard
                      key={post.slug}
                      slug={post.slug}
                      title={post.metadata.title}
                      date={post.metadata.date}
                      description={post.metadata.description}
                      ogImage={post.metadata.ogImage}
                      tag={post.metadata.tag}
                      author={post.metadata.author}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalArticlePages >= 1 && (
                  <BlogPagination
                    currentPage={articlesCurrentPage}
                    totalPages={totalArticlePages}
                    onPageChange={handleArticlesPageChange}
                    totalPosts={articles.length}
                    currentPostsCount={paginatedArticles.length}
                    className="px-4 md:px-0"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
