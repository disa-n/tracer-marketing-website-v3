'use client';

import { useState } from 'react';

interface FilterBarProps {
  onFilterChange?: (filter: string) => void;
  activeFilter?: string;
}

export default function FilterBar({ onFilterChange, activeFilter = 'Blogs' }: FilterBarProps) {
  const [selectedFilter, setSelectedFilter] = useState(activeFilter);

  const filters = [
    'All Resources',
    'Whitepapers',
    'Case Studies',
    'Webinars',
    'Guides',
    'Blogs'
  ];

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange?.(filter);
  };

  return (
    <>
      {/* Mobile Layout - Grid */}
      <div className="w-full grid grid-cols-2 gap-3 sm:gap-[14px] md:hidden px-4 sm:px-0">
        {filters.map((filter) => {
          const isActive = selectedFilter === filter;
          const isAllResources = filter === 'All Resources';

          return (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`
                px-2 py-2 sm:px-[11.59px] sm:py-[7.24px] overflow-hidden
                flex-col justify-center items-center gap-[7.24px] flex
                transition-colors duration-200 hover:opacity-80
                min-h-[44px] w-full
                ${isActive
                  ? 'bg-[#202020] outline outline-[0.72px] outline-[#E8E8E8] outline-offset-[-0.72px]'
                  : 'bg-[#FCFCFC] outline outline-[0.72px] outline-[#E8E8E8] outline-offset-[-0.72px]'
                }
                ${isAllResources && !isActive
                  ? 'outline-[1px] outline-offset-[-1px]'
                  : ''
                }
              `}
            >
              <div className="flex-col justify-center items-center gap-[5.79px] flex">
                <div
                  className={`
                    text-[clamp(14px,3.5vw,17.5px)] font-normal leading-[1.4] break-words text-center
                    ${isActive ? 'text-white' : 'text-[#202020]'}
                  `}
                  style={{ fontFamily: 'Britti Sans' }}
                >
                  {filter}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Desktop Layout - Original Inline Flex */}
      <div className="w-full h-full justify-start items-center gap-[14px] hidden md:inline-flex">
        {filters.map((filter) => {
          const isActive = selectedFilter === filter;
          const isAllResources = filter === 'All Resources';

          return (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`
                px-[11.59px] py-[7.24px] overflow-hidden
                flex-col justify-start items-start gap-[7.24px] inline-flex
                transition-colors duration-200 hover:opacity-80
                ${isActive
                  ? 'bg-[#202020] outline outline-[0.72px] outline-[#E8E8E8] outline-offset-[-0.72px]'
                  : 'bg-[#FCFCFC] outline outline-[0.72px] outline-[#E8E8E8] outline-offset-[-0.72px]'
                }
                ${isAllResources && !isActive
                  ? 'outline-[1px] outline-offset-[-1px]'
                  : ''
                }
              `}
            >
              <div className="flex-col justify-start items-start gap-[5.79px] flex">
                <div
                  className={`
                    text-[17.50px] font-normal leading-[27.52px] break-words
                    ${isActive ? 'text-white' : 'text-[#202020]'}
                  `}
                  style={{ fontFamily: 'Britti Sans' }}
                >
                  {filter}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
