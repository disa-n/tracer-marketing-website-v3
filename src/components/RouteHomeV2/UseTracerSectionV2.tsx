'use client';
import { GridLinesLight } from '@/components/shared/GridLines';
import ColorBreakLine from '@/components/ui/ColorBreakLine';
import { CircleDollarSign, EyeOff, SearchX, Server } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

// Card component for problem statements
interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  roleTitle?: string;
}

function ProblemCard({ icon, title, description, roleTitle }: ProblemCardProps) {
  return (
    <div className="bg-[#FCFCFC] border border-[#E8E8E8] p-4 md:p-8 flex items-center gap-4 md:gap-8 min-h-[100px] md:min-h-[140px]">
      {/* Icon */}
      <div className="flex-shrink-0">
        {icon}
      </div>

      {/* Title and Description */}
      <div className="flex-1 space-y-1 md:space-y-2">
        {/* Title - smaller on mobile, max 2 lines */}
        <h3 className="font-britti-sans text-[16px] sm:text-[18px] md:text-[26px] font-normal text-[#202020] leading-tight">
          {title}
        </h3>

        {/* Role Title */}
        {roleTitle && (
          <p className="font-britti-sans text-[11px] sm:text-xs md:text-sm text-[#474747] leading-tight italic -mt-0.5">
            - {roleTitle}
          </p>
        )}

        {/* Description */}
        <p className="font-britti-sans text-xs sm:text-sm md:text-base text-[#888888] leading-snug md:whitespace-pre-line mt-1.5">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function UseTracerSectionV2() {
  const scrollToFixAnything = () => {
    const fixAnythingSection = document.getElementById('fix-anything-section');
    if (fixAnythingSection) {
      fixAnythingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Card data with the problems
  const problemCards = [
    {
      icon: <Server className="w-8 h-8 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"Am I using the right-sized instances?\"",
      roleTitle: "Software Engineering Lead, Clinical Genomics Applications",
      description: "You might be overpaying for unused resources or suffering performance issues \nwithout clear data to guide your sizing decisions."
    },
    {
      icon: <SearchX className="w-8 h-8 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"We don't know which tool breaks, when, or why\"",
      roleTitle: "Principal Scientist, Leading Global Pharmaceutical Company",
      description: "Software breaks silently. By the time you find out, \n you've already wasted hours, and worse, your results are wrong."
    },
    {
      icon: <EyeOff className="w-8 h-8 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"Generic dashboards miss pipeline context\"",
      roleTitle: "Research Specialist, Next-Gen Biotech",
      description: "Processes are loosely connected in outdated interfaces. \nIt is a constant challenge to connect processes to pipeline runs."
    },
    {
      icon: <CircleDollarSign className="w-8 h-8 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"How can I make my pipelines more cost-efficient?\"",
      roleTitle: "Director of AI and ML, Leading Global Pharmaceutical Company",
      description: "You can’t optimise costs without visibility into what’s actually driving spend \nacross pipeline components, tools, and teams."
    }
  ];

  return (
    <section className="relative bg-[#FCFCFC] -mt-8 sm:-mt-6 lg:mt-0">
      {/* Grid Lines */}
      <GridLinesLight />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row">
        {/* Left Column: Text Content - standardized container - First on mobile */}
        <div className="w-full lg:w-auto order-1 lg:order-1">
          <div className="px-4 sm:px-6 md:px-8 900:px-8 pt-2 pb-8 sm:pt-4 sm:pb-18 lg:pt-2 lg:pb-22 xl:pt-4 xl:pb-30">
            {/* Problem Cards */}
            <div className="space-y-4 md:space-y-6">
              {problemCards.map((card, index) => (
                <ProblemCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  roleTitle={card.roleTitle}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Image + Footer - spans remaining width, aligned with cards height - Last on mobile */}
        <div className="flex-1 lg:min-w-0 order-2 lg:order-2">
          {/* Container that matches cards padding exactly */}
          <div className="pt-2 sm:pt-4 lg:pt-6 xl:pt-8 flex flex-col h-full">
            {/* Image container - starts where cards start, expands slightly - Hidden on mobile */}
            <div className="hidden lg:block mt-0 lg:mt-10 xl:mt-6 2xl:mt-8 mb-0 min-[1024px]:max-[1125px]:hidden">
              {/* Image spans from cards alignment with slight expansion */}
              <div className="pl-4 sm:pl-6 md:pl-8 900:pl-8">
                <div className="w-full relative aspect-[4/3] lg:aspect-[4/4] lg:translate-y-3 xl:aspect-[3/2.5] xl:-translate-y-6 2xl:aspect-[2/1.5] 2xl:-translate-y-14 bg-[#202020] lg:w-[115%] xl:w-[112%] 2xl:w-[108%]">
                  <Image
                    src="/images/home/Globe-Image.webp"
                    alt="Globe visualization"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Spacer to push footer to bottom */}
            <div className="flex-1"></div>
            {/* Footer - sits under image, extends to screen edge - hidden on mobile */}
            <div className="hidden lg:block mt-auto">
              <div className="pl-4 sm:pl-6 md:pl-8 900:pl-8">
                <div className="bg-[#202020] h-24 flex items-center justify-start pl-3 w-[100vw] -mr-[100vw]">
                  <button
                    onClick={scrollToFixAnything}
                    className="w-8 h-12 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                    aria-label="Scroll to See and Fix Anything section"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black"
                    >
                      <path
                        d="M8 3L8 13M8 13L13 8M8 13L3 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Break Line - Mobile Only */}
      <ColorBreakLine />
    </section>
  );
}
