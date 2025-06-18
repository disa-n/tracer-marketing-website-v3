import React from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';
import StyledLayoutWrapper from '@/components/shared/StyledLayoutWrapper';

export default function Hero() {
  return (
    <section className="relative bg-[#FCFCFC] overflow-hidden">
      <GridLinesLight />

      {/* Container adjusted for responsive overflow */}
      <div className="w-full relative z-10">

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-screen py-16 pt-24 lg:py-28">
          <StyledLayoutWrapper>
            {/* Left Column - Text Content (removed negative margins causing overflow) */}
            <div className="w-full lg:w-1/2 lg:pr-10 xl:pr-16 2xl:pr-24 2xl:-ml-15">
  {/* Main Heading */}
  <h1 className="font-chakra-petch text-[#202020] font-normal mb-6 lg:mb-16 xl:mb-20
                 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-[100px]
                 leading-tight tracking-tight">
    About Us
  </h1>

  {/* Description Paragraph */}
  <p className="font-britti-sans text-[#202020] font-normal max-w-2xl
                text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl
                leading-snug tracking-tight">
    Tracer is an advanced observability platform for high-performance computing (HPC) systems in scientific industries. We help scientists and engineers to run, maintain, and optimise supercomputing software solutions.
  </p>
</div>

          {/* Right Column - Image (kept your original scale and positioning, slightly adjusted responsiveness) */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex items-center justify-center lg:justify-end overflow-visible">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px]
                            transform origin-center
                            lg:scale-[2] lg:translate-x-10 lg:translate-y-24
                            xl:scale-[2] xl:translate-x-20 xl:translate-y-12
                            2xl:scale-[2] 2xl:translate-x-32 2xl:translate-y-16">
              <Image
                src="/About us/Tracer-brain.webp"
                alt="Tracer Brain - Advanced observability platform visualization"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          </StyledLayoutWrapper>
        </div>
      </div>

      {/* Bottom horizontal line */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-px bg-[#E8E8E8]"></div>
    </section>
  );
}

