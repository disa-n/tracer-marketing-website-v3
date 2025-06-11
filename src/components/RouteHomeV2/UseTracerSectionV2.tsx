'use client';

import React from 'react';

export default function UseTracerSectionV2() {
  return (
    <section className="bg-[#FCFCFC]">
      <div className="flex flex-col lg:flex-row">

        {/* Left Column: Text Content - contained within max-w container */}
        <div className="w-full lg:w-auto">
          <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-16">
            <div className="flex flex-col justify-center pt-20 pb-14 sm:pt-20 sm:pb-18 lg:pt-24 lg:pb-22 xl:pt-28 xl:pb-30">
              <div className="max-w-4xl ml-0 lg:ml-0 xl:ml-0 2xl:ml-28">
              {/* Top Quote */}
              <p className="text-xl text-neutral-400 font-normal tracking-tight font-britti mb-4">
                &ldquo;We can&apos;t tell what&apos;s working or where things are falling apart.&rdquo;
              </p>

              {/* First paragraph */}
              <p className="text-2xl lg:text-4xl font-medium leading-snug tracking-tighter font-britti text-[#202020] mb-4">
                It&apos;s a common story:
              </p>

              {/* Second paragraph */}
              <p className="text-2xl lg:text-4xl font-normal leading-snug tracking-tight font-britti text-[#202020] mb-4">
                Analytical pipelines break. Logs rarely explain why.
              </p>

              {/* Third paragraph */}
              <p className="text-2xl lg:text-4xl font-normal leading-snug tracking-tight font-britti text-[#202020] mb-4">
                Sure, you can keep guessing what went wrong…
              </p>

              {/* Large downward arrow icon (aligned with left side of paragraphs) */}
              <div className="flex justify-start mt-2 mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#888888] text-2xl"
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
              <p className="text-2xl lg:text-4xl font-normal leading-snug tracking-tight font-britti text-[#202020]">
                <span className="font-medium tracking-tight">Or you can use Tracer</span> — the observability<br className="hidden sm:block" /> platform built for AI-driven science.
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image + Footer - flush to viewport edge with white background */}
        <div className="flex-1 lg:min-w-0 bg-[#FCFCFC] pt-16 lg:pt-20 flex flex-col">
          {/* Image container - flush right with white background */}
          <div className="flex justify-end pr-0 -mt-10 mb-8">
            <div className="w-full lg:w-3/4 aspect-[3/2] bg-gray-400 flex items-center justify-center text-white font-medium">
              GLOBE PLACEHOLDER
            </div>
          </div>

          {/* Footer - separate dark rectangle flush right, matching image width */}
          <div className="flex justify-end pr-0 mt-auto">
            <div className="w-full lg:w-3/4">
              <div className="bg-[#202020] h-16 w-full flex items-center justify-start pl-3">
                <div className="w-8 h-12 bg-white flex items-center justify-center">
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
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
