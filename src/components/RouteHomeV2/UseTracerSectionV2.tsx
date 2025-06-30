'use client';
import React from 'react';
import Image from 'next/image';
import { SearchX, Wrench, ShieldOff, Siren } from 'lucide-react';

// Card component for problem statements
interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <div className="bg-[#FCFCFC] border border-[#E8E8E8] p-6 md:p-8 flex items-center gap-6 md:gap-8 min-h-[120px] md:min-h-[140px]">
      {/* Icon */}
      <div className="flex-shrink-0">
        {icon}
      </div>

      {/* Title and Description */}
      <div className="flex-1 space-y-2">
        {/* Title - increased by 8px */}
        <h3 className="font-britti-sans text-[26px] sm:text-[28px] font-normal text-[#202020] leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="font-britti-sans text-sm sm:text-base text-[#888888] leading-snug whitespace-pre-line">
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
      icon: <SearchX className="w-12 h-12 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"We don't know when something's failing\"",
      description: "Pipelines silently break. By the time you find out,\nyou've already wasted hours or worse, your results are wrong."
    },
    {
      icon: <Wrench className="w-12 h-12 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"Generic dashboards miss the context\"",
      description: "Off-the-shelf tools weren't built for scientific workflows.\nThey surface metrics, but not meaning."
    },
    {
      icon: <ShieldOff className="w-12 h-12 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"Security standards? Not even close\"",
      description: "Most tools ignore compliance, traceability, and access control\nessentials for sensitive, collaborative research."
    },
    {
      icon: <Siren className="w-12 h-12 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"Too much noise. Not enough insight\"",
      description: "Endless alerts make it hard to spot real problems.\nYou're reactive, not proactive."
    }
  ];

  return (
    <section className="bg-[#FCFCFC]">
      <div className="flex flex-col lg:flex-row">
        {/* Right Column: Image + Footer - flush to viewport edge with white background - Last on mobile */}
        <div className="flex-1 lg:min-w-0 bg-[#FCFCFC] pt-0 lg:pt-20 flex flex-col order-2 lg:order-2">
          {/* Image container - flush right with white background */}
          <div className="flex justify-end pr-0 mt-0 lg:mt-10 xl:mt-6 2xl:mt-8 mb-0 min-[1024px]:max-[1125px]:hidden">
            <div className="w-full lg:w-3/4 relative aspect-[4/3] lg:aspect-[4/5] lg:translate-y-3 xl:aspect-[3/4] xl:-translate-y-6 2xl:aspect-[5/6] 2xl:-translate-y-14 bg-[#202020]">
              <Image
                src="/home/Globe-Image.webp"
                alt="Globe visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Footer - separate dark rectangle flush right, matching image width - hidden on mobile */}
          <div className="hidden lg:flex justify-end pr-0 mt-auto">
            <div className="w-full lg:w-3/4">
              <div className="bg-[#202020] h-24 w-full flex items-center justify-start pl-3">
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
        {/* Left Column: Text Content - contained within max-w container - First on mobile */}
        <div className="w-full lg:w-auto order-1 lg:order-1">
          <div className="flex flex-col justify-center pt-6 pb-8 sm:pt-10 sm:pb-18 lg:pt-16 lg:pb-22 xl:pt-20 xl:pb-30">
            <div className="px-4 md:px-8 lg:px-12">
              <div className="max-w-[1400px] w-full">
                {/* Problem Cards */}
                <div className="space-y-4 md:space-y-6">
                  {problemCards.map((card, index) => (
                    <ProblemCard
                      key={index}
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
