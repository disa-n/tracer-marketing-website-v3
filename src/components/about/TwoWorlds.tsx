'use client';

import Image from 'next/image';

interface FoundersSectionProps {
  imageSrc?: string;
  altText?: string;
}

export default function FoundersSection({ }: FoundersSectionProps) {
  return (
    <section className="relative bg-[#FCFCFC] overflow-hidden pt-8 pb-0 -mb-32 lg:pt-16 lg:pb-0 lg:mb-0 lg:h-[550px] xl:h-[520px]">
      {/* Vertical line in the middle of the section */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 transform -translate-x-px hidden lg:block"></div>

      {/* Horizontal line from middle to right edge - under mini heading */}
      <div className="absolute left-1/2 top-14 right-0 h-px bg-gray-100 hidden lg:block"></div>

      {/* Dark rectangle at bottom - 1/3 width - mobile-first: hidden by default, show on larger screens */}
      <div className="absolute bottom-0 left-0 w-1/3 h-8 bg-[#202020] z-0 hidden min-[1065px]:block"></div>

      {/* Second dark rectangle on top - shorter width - mobile-first: hidden by default, show on larger screens */}
      <div className="absolute bottom-8 left-0 w-1/4 h-8 bg-[#202020] z-0 hidden min-[1065px]:block"></div>

      <div className="relative z-10 flex flex-col justify-center px-4 md:px-8 lg:px-12 lg:max-w-[1400px] 2xl:max-w-[1600px] lg:w-full mb-[-1rem]">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row min-h-0">
          {/* Left text column - mobile-first approach */}
          <div className="w-full max-w-[700px] xl:max-w-[600px] 2xl:max-w-[650px] lg:w-1/2 xl:w-1/2 2xl:w-1/2 lg:flex lg:flex-col lg:justify-start mt-2 lg:mt-0">
            {/* Main heading */}
            <h1 className="mt-4 font-britti-sans font-medium text-[#202020] text-3xl lg:text-5xl max-[1064px]:lg:text-4xl xl:text-5xl mb-2 lg:mb-6 leading-tight tracking-tight">
              The Best of Two Worlds
            </h1>

            {/* Paragraphs */}
            <div className="font-britti-sans font-normal text-[#202020] leading-relaxed space-y-4 lg:space-y-6 mt-2 lg:mt-0 lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[650px]">
              <p>
                Tracer was founded in 2023 by Vincent Hus and Laura Bogaert, who set out to change the way scientists understand and manage their computational workloads.
              </p>
              <p>
                Vincent, an engineer working at the intersection of software and biomechanics, kept running into infrastructure issues that slowed his work. Laura, advising leading life sciences organisations at McKinsey, saw those same slowdowns across the industry.
              </p>
              <p>
                Driven by their shared frustration, they joined forces to build the world&apos;s first verticalised observability platform, purpose-built for scientific computing.
              </p>
            </div>
          </div>

          {/* Right column with mini heading and tracer ball - mobile-first */}
          <div
            className="
              mt-0 lg:mt-0 lg:flex-1 lg:flex lg:flex-col lg:justify-start
            "
            style={{
              transform: `translateX(clamp(0px, calc((100vw - 1024px) * 0.20), 380px))`
            }}
          >
            {/* Miniheading bar at top of right column */}
            <div
              className="
                hidden lg:flex w-full text-[#505050] font-chakra-petch uppercase text-base font-medium tracking-normal mb-4 lg:-mt-9 xl:-mt-10 relative
                xl:-ml-8
              "
              style={{
                paddingLeft: 'clamp(1rem, 4vw, 8rem)',
                transform: `translateX(clamp(0px, calc((100vw - 1400px) * 0.15), 200px))`
              }}
            >
              <div className="flex w-full justify-between items-center">
                {/* 001 */}
                <div
                  className="min-w-[40px]"
                  style={{
                    transform: `translateX(clamp(-50px, calc((100vw - 1600px) * -0.05), 40px))`
                  }}
                >
                  001
                </div>

                {/* TRACER and FOUNDERS with responsive gap */}
                <div className="flex items-center" style={{ gap: 'clamp(1.5rem, 4vw, 8rem)' }}>
                  <span>TRACER</span>
                  <span>FOUNDERS</span>
                </div>
              </div>
            </div>

            {/* Tracer ball image - mobile-first */}
            <div className="flex items-center justify-center relative">
              <Image
                src="/images/about-us/tracer-ball.svg"
                alt="Colorful 3D abstract object - Tracer ball"
                width={1400}
                height={1400}
                quality={85}
                className="h-auto object-contain relative z-40"
                style={{
                  width: `clamp(500px, calc(500px + (100vw - 1024px) * 0.9), 1400px)`,
                  transform: `translate(clamp(20px, calc(20px + (100vw - 1280px) * 0.15), 240px), clamp(6rem, calc(6rem + (100vw - 1280px) * 0.02), 5rem))`
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

