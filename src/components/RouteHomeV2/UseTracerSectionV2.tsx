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
          <div className="hidden lg:flex justify-end pr-0 mt-0 lg:mt-10 xl:mt-6 2xl:mt-8 mb-0 min-[1024px]:max-[1125px]:hidden">
            <div className="w-full lg:w-3/4 relative aspect-[3/2] lg:aspect-[5/4] lg:translate-y-3 xl:aspect-[5/4] xl:-translate-y-6 2xl:aspect-[4/3] 2xl:-translate-y-14 bg-[#202020]">
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
          <div className="flex flex-col justify-center pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-16 lg:pb-22 xl:pt-20 xl:pb-30">
            <div className="px-4 md:px-8 lg:px-12">
              <div className="max-w-[1400px] w-full">
                {/* Main text paragraph */}
                <p className="text-2xl lg:text-4xl 2xl:text-5xl font-normal leading-[1.3] lg:leading-[48px] tracking-tight lg:tracking-tighter font-britti text-[#202020] mb-4">
                  Sure, you can keep guessing what&apos;s going<br />
                  wrong with your analytical pipelines.<br />
                  Tools that don&apos;t scale. Dashboards that don&apos;t<br />
                  explain. Alerts that never quite mean anything.
                </p>
                {/* Large downward arrow icon (left-aligned) */}
                <div className="flex justify-start mt-2 mb-4">
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
                <p className="text-2xl lg:text-4xl 2xl:text-5xl font-normal leading-[1.3] lg:leading-[48px] tracking-tight lg:tracking-tighter font-britti text-[#202020]">
                  Or you could use Tracer — the observability<br />
                  platform built for AI-driven science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Section Break - Thin strip with footer-b.png */}
      <div className="lg:hidden w-full h-6 relative overflow-hidden">
        <Image
          src="/platform/footer-b.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
