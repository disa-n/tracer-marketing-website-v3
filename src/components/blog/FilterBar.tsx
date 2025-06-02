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
    <div className="w-full h-full justify-start items-center gap-[14px] inline-flex">
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
  );
}
