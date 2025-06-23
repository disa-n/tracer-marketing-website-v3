// components/Founders/FoundersSection.tsx
'use client';

import Image from 'next/image';
import StyledLayoutWrapper from '@/components/shared/StyledLayoutWrapper';

interface FoundersSectionProps {
  imageSrc: string;
  altText: string;
}

export default function FoundersSection({ imageSrc, altText }: FoundersSectionProps) {
  return (
    <section className="relative bg-[#FCFCFC] overflow-hidden py-12 min-h-[500px]">
      {/* Vertical line in the middle of the section */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 transform -translate-x-px hidden lg:block"></div>

      {/* Horizontal line from middle to right edge - under mini heading */}
      <div className="absolute left-1/2 top-14 right-0 h-px bg-gray-100 hidden lg:block"></div>

      <StyledLayoutWrapper>
        {/* Main content */}
        <div className="flex flex-col lg:flex-row lg:min-h-[400px]">
          {/* Left text column - centered vertically */}
          <div className="max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1000px] lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:pr-8">
            {/* Main heading */}
            <h1 className="font-britti-sans font-medium text-[#202020] text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              The Best of Two Worlds
            </h1>

            {/* Paragraphs */}
            <div className="font-britti-sans font-normal text-[#202020] leading-relaxed space-y-6">
              <p>
                Tracer was founded in 2023 by Vincent Hus and Laura Bogaert, who set out to change the way scientists understand and manage their computational workloads.
              </p>
              <p>
                Vincent, an engineer working at the intersection of software and biomechanics, kept running into infrastructure issues that slowed his work. Laura, advising leading life sciences organizations at McKinsey, saw those same slowdowns across the industry.
              </p>
              <p>
                Driven by their shared frustration, they joined forces to build the world's first verticalized observability platform, purpose-built for scientific computing.
              </p>
            </div>
          </div>

          {/* Right column with mini heading and tracer ball */}
          <div className="mt-10 md:w-3/4 lg:mt-0 lg:w-3/4 xl:w-4/5 2xl:w-2/3 md:pl-32 lg:pl-48 xl:pl-64 2xl:pl-80">
            {/* Miniheading bar at top of right column */}
            <div className="flex justify-between gap-8 lg:gap-48 xl:gap-48 2xl:gap-48 text-[#505050] font-chakra-petch uppercase text-base font-medium tracking-normal mb-4 -mt-7">
              <div className="lg:-ml-8 xl:-ml-12 2xl:-ml-16">001</div>
              <div className="flex gap-16 lg:gap-32 xl:gap-40 2xl:gap-48">
                <span>TRACER</span>
                <span>FOUNDERS</span>
              </div>
            </div>

            {/* Tracer ball image */}
            <div className="flex items-center justify-center lg:h-full">
              <Image
                src="/About us/tracer-ball.svg"
                alt="Colorful 3D abstract object - Tracer ball"
                width={400}
                height={400}
                quality={85}
                className="w-full max-w-[400px] h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </StyledLayoutWrapper>
    </section>
  );
}
