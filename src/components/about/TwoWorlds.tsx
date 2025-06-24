'use client';

import Image from 'next/image';
import StyledLayoutWrapper from '@/components/shared/StyledLayoutWrapper';

interface FoundersSectionProps {
  imageSrc?: string;
  altText?: string;
}

export default function FoundersSection({}: FoundersSectionProps) {
  return (
    <section className="relative bg-[#FCFCFC] overflow-visible pt-8 pb-0 -mb-32 lg:py-16 lg:mb-0 lg:min-h-[700px] xl:min-h-[600px]">
      {/* Vertical line in the middle of the section */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 transform -translate-x-px hidden lg:block"></div>

      {/* Horizontal line from middle to right edge - under mini heading */}
      <div className="absolute left-1/2 top-14 right-0 h-px bg-gray-100 hidden lg:block"></div>

      {/* Dark rectangle at bottom - 1/3 width - mobile-first: hidden by default, show on larger screens */}
      <div className="absolute bottom-0 left-0 w-1/3 h-8 bg-[#202020] z-0 hidden lg:block"></div>

      {/* Second dark rectangle on top - shorter width - mobile-first: hidden by default, show on larger screens */}
      <div className="absolute bottom-8 left-0 w-1/4 h-8 bg-[#202020] z-0 hidden lg:block"></div>

      <StyledLayoutWrapper className="relative z-10 mb-[-1rem]">

        {/* Main content */}
        <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[400px]">
          {/* Left text column - mobile-first approach */}
          <div className="w-full max-w-[800px] lg:w-1/2 xl:w-2/3 lg:flex lg:flex-col lg:justify-start mt-2 lg:mt-0">
            {/* Main heading */}
            <h1 className="font-britti-sans font-medium text-[#202020] text-3xl lg:text-5xl xl:text-5xl mb-2 lg:mb-6 leading-tight">
              The Best of Two Worlds
            </h1>

            {/* Paragraphs */}
            <div className="font-britti-sans font-normal text-[#202020] leading-relaxed space-y-4 lg:space-y-6 mt-2 lg:mt-0">
              <p>
                Tracer was founded in 2023 by Vincent Hus and Laura Bogaert, who set out to change the way scientists understand and manage their computational workloads.
              </p>
              <p>
                Vincent, an engineer working at the intersection of software and biomechanics, kept running into infrastructure issues that slowed his work. Laura, advising leading life sciences organizations at McKinsey, saw those same slowdowns across the industry.
              </p>
              <p>
                Driven by their shared frustration, they joined forces to build the world&apos;s first verticalized observability platform, purpose-built for scientific computing.
              </p>
            </div>
          </div>

          {/* Right column with mini heading and tracer ball - mobile-first */}
          <div className="mt-0 lg:mt-0 lg:w-3/4 xl:w-full 2xl:w-5/6 lg:pl-48 xl:pl-50 2xl:pl-80">
            {/* Miniheading bar at top of right column */}
            <div className="hidden lg:flex w-full text-[#505050] font-chakra-petch uppercase text-base font-medium tracking-normal mb-4 lg:-mt-9 xl:-mt-10 relative">

              {/* 001 - positioned to stay right of vertical line but not too far */}
              <div className="min-w-[40px] lg:ml-1 xl:ml-4 2xl:-ml-20">
                001
              </div>

              {/* Spacer */}
              <div className="flex-grow" />

              {/* TRACER and FOUNDERS - mobile-first gaps */}
              <div className="flex gap-4 lg:gap-56 xl:gap-64 2xl:gap-72 items-center">
                {/* TRACER - mobile-first positioning */}
                <span className="relative lg:left-[50px] xl:left-[50px] 2xl:left-[50px]">TRACER</span>

                {/* FOUNDERS normal */}
                <span>FOUNDERS</span>
              </div>
            </div>

            {/* Tracer ball image - mobile-first */}
            <div className="flex items-center justify-center relative">
              <Image
                src="/About us/tracer-ball.svg"
                alt="Colorful 3D abstract object - Tracer ball"
                width={1400}
                height={1400}
                quality={85}
                className="w-full max-w-[400px] h-auto object-contain relative top-8 z-40 lg:max-w-[1200px] lg:absolute lg:top-46 lg:left-[10px] lg:z-1 lg:scale-135 xl:max-w-[1400px] xl:top-36 xl:scale-115 2xl:max-w-[1400px] 2xl:top-40 2xl:left-[-50px] 2xl:scale-140"
                priority
              />
            </div>
          </div>
        </div>
      </StyledLayoutWrapper>
    </section>
  );
}
