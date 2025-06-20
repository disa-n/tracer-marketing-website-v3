'use client';

import React from 'react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

interface BlogPaginationExtendedProps extends BlogPaginationProps {
  totalPosts?: number;
  currentPostsCount?: number;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  totalPosts,
  currentPostsCount
}: BlogPaginationExtendedProps) {
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePrevious = () => {
    if (canGoPrevious) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`flex flex-col items-center gap-6 mt-8 ${className}`}>
      {/* Navigation Arrows - only show if more than 1 page */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`
              w-12 h-12 rounded-full border-2 flex items-center justify-center
              transition-all duration-200
              ${canGoPrevious
                ? 'border-[#202020] text-[#202020] hover:bg-white hover:border-white hover:text-[#202020] cursor-pointer'
                : 'border-[#CCCCCC] text-[#CCCCCC] cursor-not-allowed'
              }
            `}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="transform rotate-180"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`
              w-12 h-12 rounded-full border-2 flex items-center justify-center
              transition-all duration-200
              ${canGoNext
                ? 'border-[#202020] text-[#202020] hover:bg-white hover:border-white hover:text-[#202020] cursor-pointer'
                : 'border-[#CCCCCC] text-[#CCCCCC] cursor-not-allowed'
              }
            `}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>
        </div>
      )}

      {/* Post Count at Bottom - always show when we have post data */}
      {totalPosts && currentPostsCount && (
        <div className="text-center">
          <span className="text-xs sm:text-sm text-[#888888] font-chakra-petch">
            Showing {currentPostsCount} of {totalPosts} {totalPosts === 1 ? 'post' : 'posts'}
          </span>
        </div>
      )}
    </div>
  );
}
