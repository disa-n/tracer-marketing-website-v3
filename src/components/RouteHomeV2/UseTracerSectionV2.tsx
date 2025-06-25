'use client';

import React from 'react';
import Image from 'next/image';

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

  return (
    <section className="bg-[#FCFCFC]">
      <div className="flex flex-col lg:flex-row">

        {/* Right Column: Image + Footer - flush to viewport edge with white background - Last on mobile */}
        <div className="flex-1 lg:min-w-0 bg-[#FCFCFC] pt-0 lg:pt-20 flex flex-col order-2 lg:order-2">
          {/* Image container - flush right with white background */}
          <div className="flex justify-end pr-0 mt-0 lg:mt-10 xl:mt-6 2xl:mt-8 mb-0 min-[1024px]:max-[1125px]:hidden">
            <div className="w-full lg:w-3/4 relative aspect-[3/2] lg:aspect-[5/4] lg:translate-y-3 xl:aspect-[5/4] xl:-translate-y-6 2xl:aspect-[4/3] 2xl:-translate-y-14">
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
              <div className="bg-[#202020] h-16 w-full flex items-center justify-start pl-3">
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
          <div className="flex flex-col justify-center pt-10 pb-8 sm:pt-14 sm:pb-18 lg:pt-24 lg:pb-22 xl:pt-28 xl:pb-30">
            <div className="px-4 md:px-8 lg:px-12">
              <div className="max-w-[1400px] w-full">
              {/* Top Quote */}
              <p className="text-[20px] 2xl:text-[24px] leading-[22px] 2xl:leading-[26px] text-neutral-400 font-normal tracking-tight font-britti mb-4 lg:-mt-4 lg:mb-8 xl:-mt-6 xl:mb-10 2xl:-mt-8 2xl:mb-12">
                &ldquo;We can&apos;t tell what&apos;s working or where things are falling apart.&rdquo;
              </p>

              {/* Main text paragraph */}
              <p className="text-2xl lg:text-4xl 2xl:text-5xl font-normal leading-[48px] tracking-tight lg:tracking-tighter font-britti text-[#202020] mb-4">
                Analytical pipelines break. Logs rarely explain why.<br />
                Compute planning happens blind.
              </p>

              <p className="text-2xl lg:text-4xl 2xl:text-5xl font-normal leading-[48px] tracking-tight lg:tracking-tighter font-britti text-[#202020] mb-4">
                Sure, you can keep guessing what went wrong.<br />
                Stay in the dark as cloud costs spiral.
              </p>

              {/* Large downward arrow icon (centered until 650px, then left-aligned) */}
              <div className="flex justify-center min-[650px]:justify-start mt-2 mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#888888] text-2xl lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16"
                >
                  <path
                    d="M16 6L16 26M16 26L26 16M16 26L6 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Final line */}
              <p className="text-2xl lg:text-4xl 2xl:text-5xl font-normal leading-[48px] tracking-tight lg:tracking-tighter font-britti text-[#202020]">
                Or you can use Tracer.<br />
                The observability platform built for AI-driven science.
              </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
