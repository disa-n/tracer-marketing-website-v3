'use client';

import FilterBar from '@/components/resources/blog/FilterBar';
import { FileText, Newspaper, Settings } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import BlogCard from '@/components/resources/blog/BlogCard';
import BlogPagination from '@/components/resources/blog/BlogPagination';
import ToolCard from '@/components/ui/cards/ToolCard';
import SectionTitle from '@/components/ui/content/SectionTitle';
import ReusableHero from '@/components/ui/heroes/ReusableHero';
import Section from '@/components/ui/layout/Section';
import LoadingSpinner from '@/components/ui/utils/LoadingSpinner';
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
      {/* Hero Section - Responsive layout: image on top for mobile, side-by-side for desktop */}
      <div className="relative overflow-visible min-h-[60vh] max-h-[75vh] pt-16 lg:pt-0 pb-0">
        <ReusableHero
          title="Resources"
          subtitle="The latest updates from Tracer. See our bi-weekly roundups for the latest company and product developments."
          showEmailSignup={true}
          imageSrc="/images/blog/posts/T-chip.webp"
          imageAlt="Blog hero placeholder"
          imageStyle="blog"
          productLabel="_TRACER RESOURCES"
          className="
            [&_img]:!scale-75 [&_img]:md:!scale-80 [&_img]:lg:!scale-85
            [&>div]:flex-col [&>div]:lg:flex-row
            [&>div>div:first-child]:order-1 [&>div>div:first-child]:lg:order-2
            [&>div>div:last-child]:order-2 [&>div>div:last-child]:lg:order-1
          "
        />
      </div>

      {/* Section Navigation - Consistent staircase design across all screen sizes */}
      <Section showGridLines={false} padding="none" maxWidth="full" className="relative mt-8 sm:mt-12 lg:mt-16">
        {/* Staircase background - 2 rectangles plus full-width main block */}
        <div className="absolute top-0 left-0 w-[20%] xs:w-[22%] sm:w-[24%] md:w-[26%] lg:hidden xl:hidden 2xl:hidden h-12 sm:h-14 bg-[#202020] hidden"></div>
        {/* Top black rectangle - hidden in stacked views (mobile/tablet), visible in unstacked views (desktop) */}
        <div className="absolute top-0 left-0 w-[33.33%] h-12 sm:h-16 bg-[#202020] hidden lg:block"></div>
        <div className="absolute top-12 sm:top-16 lg:top-12 xl:top-16 left-0 w-full h-24 sm:h-32 bg-[#202020]"></div>

        <div className="relative z-10">
          <div className="px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-12 2xl:px-12 pt-18 xs:pt-20 sm:pt-22 md:pt-24 lg:pt-26 xl:pt-24 pb-6 xs:pb-8 sm:pb-12 md:pb-16">
            {/* Mobile Layout - Spaced buttons with text along black strip */}
            <div className="flex flex-row justify-between items-center sm:hidden px-4">
              {/* Tools Card - Mobile */}
              <button
                onClick={() => {
                  const toolsSection = document.getElementById('tools-section');
                  if (toolsSection) {
                    const yOffset = -120;
                    const y = toolsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-none hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md p-2 min-w-0 flex-1 mx-1"
              >
                <Settings className="text-[#202020] mb-1" style={{ width: '16px', height: '16px' }} />
                <span className="text-[10px] font-medium text-[#202020] font-chakra-petch leading-tight text-center">Tools</span>
              </button>

              {/* Tracer Blog Card - Mobile */}
              <button
                onClick={() => {
                  const blogSection = document.getElementById('tracer-blog-section');
                  if (blogSection) {
                    const yOffset = -120;
                    const y = blogSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-none hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md p-2 min-w-0 flex-1 mx-1"
              >
                <Newspaper className="text-[#202020] mb-1" style={{ width: '16px', height: '16px' }} />
                <span className="text-[10px] font-medium text-[#202020] font-chakra-petch leading-tight text-center">Blog</span>
              </button>

              {/* Articles Card - Mobile */}
              <button
                onClick={() => {
                  const articlesSection = document.getElementById('articles-section');
                  if (articlesSection) {
                    const yOffset = -120;
                    const y = articlesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-none hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md p-2 min-w-0 flex-1 mx-1"
              >
                <FileText className="text-[#202020] mb-1" style={{ width: '16px', height: '16px' }} />
                <span className="text-[10px] font-medium text-[#202020] font-chakra-petch leading-tight text-center">Articles</span>
              </button>
            </div>

            {/* Desktop Layout - Original buttons with text */}
            <div className="hidden sm:flex sm:flex-row sm:gap-4 md:gap-6 justify-center sm:justify-center lg:justify-start items-center sm:items-center lg:items-start max-w-4xl mx-auto lg:mx-0">
              {/* Tools Card */}
              <button
                onClick={() => {
                  const toolsSection = document.getElementById('tools-section');
                  if (toolsSection) {
                    const yOffset = -120; // Offset to account for navbar height
                    const y = toolsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="group w-full xs:w-32 sm:w-36 md:w-40 lg:w-44 xl:w-40 bg-white border border-gray-200 rounded-none p-3 xs:p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-center space-x-2">
                  {/* Tools Icon */}
                  <Settings className="text-[#202020]" style={{ width: '20px', height: '20px' }} />
                  <h3 className="text-sm font-medium text-[#202020] font-chakra-petch">Tools</h3>
                </div>
              </button>

              {/* Tracer Blog Card */}
              <button
                onClick={() => {
                  const blogSection = document.getElementById('tracer-blog-section');
                  if (blogSection) {
                    const yOffset = -120; // Offset to account for navbar height
                    const y = blogSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="group w-full xs:w-32 sm:w-36 md:w-40 lg:w-44 xl:w-40 bg-white border border-gray-200 rounded-none p-3 xs:p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-center space-x-2">
                  {/* Blog Icon */}
                  <Newspaper className="w-5 h-5 text-[#202020]" />
                  <h3 className="text-sm font-medium text-[#202020] font-chakra-petch">Tracer Blog</h3>
                </div>
              </button>

              {/* Articles Card */}
              <button
                onClick={() => {
                  const articlesSection = document.getElementById('articles-section');
                  if (articlesSection) {
                    const yOffset = -120; // Offset to account for navbar height
                    const y = articlesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="group w-full xs:w-32 sm:w-36 md:w-40 lg:w-44 xl:w-40 bg-white border border-gray-200 rounded-none p-3 xs:p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-center space-x-2">
                  {/* Articles Icon */}
                  <FileText className="w-5 h-5 text-[#202020]" />
                  <h3 className="text-sm font-medium text-[#202020] font-chakra-petch">Articles</h3>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Section>


      {/* Tools Section */}
      <Section showGridLines={true} padding="none" maxWidth="full" className="pt-24 pb-20">
        <div className="flex flex-col lg:flex-row" id="tools-section">
          <div className="relative z-10 px-4 md:px-8 lg:px-12 xl:px-12 2xl:px-12 lg:w-full">
            <SectionTitle
              title="Tools"
              size="large"
              className="mb-12"
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
        <div className="flex flex-col lg:flex-row" id="tracer-blog-section">
          <div className="relative z-10 px-4 md:px-8 lg:px-12 xl:px-12 2xl:px-12 lg:w-full">
            <SectionTitle
              title="Tracer Blog"
              subtitle="Insights, announcements, and updates from the Tracer team."
              size="large"
              className="mb-12"
            />

            <div className="mt-6 relative z-20">
              <FilterBar showFilters={true} />
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
                      ogImage={directory.metadata.ogImage || '/placeholder-icon.svg'}
                      tag={directory.metadata.tag || 'general'}
                      {...(directory.metadata.author && { author: directory.metadata.author })}
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
                      ogImage={post.metadata.ogImage || '/icons/icon-placeholder.svg'}
                      tag={post.metadata.tag || 'general'}
                      {...(post.metadata.author && { author: post.metadata.author })}
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

      {/* Articles Section - TEMPORARILY HIDDEN */}
      {false && (
      <Section showGridLines={true} padding="none" maxWidth="full" className="pt-24 pb-20">
        <div className="flex flex-col lg:flex-row" id="articles-section">
          <div className="relative z-10 px-4 md:px-8 lg:px-12 xl:px-12 2xl:px-12 lg:w-full">
            <SectionTitle
              title="Articles"
              subtitle="In-depth technical white papers and insights on scientific computing from the Tracer team."
              size="large"
              className="mb-12"
            />

            {/* All Articles Row - TEMPORARILY HIDDEN */}
            {false && articles.length > 0 && (
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
                      ogImage={post.metadata.ogImage || '/icons/icon-placeholder.svg'}
                      tag={post.metadata.tag || 'general'}
                      {...(post.metadata.author && { author: post.metadata.author })}
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
      )}
    </main>
  );
}
