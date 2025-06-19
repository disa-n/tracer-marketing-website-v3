import React from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';
import StyledLayoutWrapper from '@/components/shared/StyledLayoutWrapper';

export default function Hero() {
  const title = "About Us";
  const subtitle = "Tracer is an advanced observability platform for high-performance computing (HPC) systems in regulated industries. We help scientists and engineers to run, maintain, and optimise supercomputing software solutions.";

  return (
    <section className="relative bg-[#FCFCFC] lg:min-h-[75vh] 2xl:min-h-[78vh] overflow-hidden">
      <GridLinesLight />
      <div className="flex flex-col lg:flex-row lg:min-h-[75vh] 2xl:min-h-[78vh]">

        {/* Image Column - Appears first on mobile, right on desktop */}
        <div className="flex items-center justify-center mt-8 lg:mt-0 lg:flex-1 lg:justify-end lg:order-2">
          <div className="w-full max-w-xs lg:max-w-[600px] lg:min-w-[500px] xl:max-w-[800px] 2xl:max-w-[900px]">
            <div className="relative w-full aspect-square lg:aspect-[4/3] xl:aspect-[3/2] 2xl:aspect-[5/3]">
              <Image
                src="/About us/Tracer-brain.webp"
                alt="Tracer Brain - Advanced observability platform visualization"
                fill
                className="object-contain lg:scale-[1.5] lg:translate-x-8 lg:translate-y-4 xl:scale-[2.25] xl:translate-x-6 xl:translate-y-8 2xl:scale-[3] 2xl:-translate-x-14 2xl:translate-y-12"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content Column - Appears second on mobile, left on desktop */}
        <div className="relative z-10 flex flex-col justify-center pt-4 pb-6 lg:pt-16 lg:pb-12 lg:max-w-[1200px] lg:w-[85%] xl:max-w-[1150px] xl:w-[70%] 2xl:max-w-[1400px] 2xl:w-full lg:order-1">
          <StyledLayoutWrapper>

          {/* Main Heading */}
          <h1 className="font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-[#202020] sm:text-[70px] 1100:text-[80px] 1300:text-[104px] mb-6 lg:mb-10">
            {title}
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-britti-sans text-[#202020] leading-[1.4] max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]
                        text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[24px] 2xl:text-[28px] mb-8">
            {subtitle}
          </p>

          </StyledLayoutWrapper>
        </div>

      </div>

      {/* Bottom horizontal line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E8E8E8]"></div>
    </section>
  );
}