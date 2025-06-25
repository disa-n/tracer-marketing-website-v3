import React from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';

export default function WhyMonitoringTitle() {
  return (
    <section className="relative bg-[#FCFCFC] pt-20 pb-10 lg:pt-8 xl:pt-8 2xl:pt-6">
      <div className="absolute inset-0 z-0" style={{ top: "0.5px" }}>
        <GridLinesLight />
      </div>
      {/* Dark rectangle at top - 1/3 width, hidden in stack mode */}
      <div className="absolute top-0 left-0 w-1/3 h-16 bg-[#202020] hidden lg:block z-10"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-12">

        {/* Left Column - Text Content (aligned with CoreChallengesSection) */}
        <div className="px-4 md:px-8 lg:px-12 mt-20 lg:mt-40 xl:mt-42 2xl:mt-44 order-2 lg:order-1">
          <div className="max-w-[1400px] w-full">
            {/* Heading */}
            <h2 className="font-britti-sans text-[#202020] font-normal capitalize leading-[1.1] mb-2 tracking-tight
                           text-[38px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[68px] 2xl:text-[82px] max-w-[600px]">
              Why Monitoring<br className="hidden lg:block" /> Is The Solution
            </h2>

            {/* Subtext */}
            <p className="font-britti-sans text-[#888888] font-normal mb-6
                          text-sm sm:text-base md:text-lg max-w-[600px] xl:max-w-[700px] 2xl:max-w-[825px]">
              Because you can&apos;t fix what you can&apos;t see.<br />
              Tracer brings observability closer to where pipelines actually run: inside the system.
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end px-4 lg:px-0 xl:px-0 -mt-[31px] lg:-mt-[120px] xl:-mt-[170px] 2xl:-mt-[148px] -mb-8 lg:-mb-[60px] xl:-mb-[60px] 2xl:-mb-[80px] lg:mr-[-150px] xl:mr-[-200px] 2xl:mr-[-150px] order-1 lg:order-2 relative z-0">
          <Image
            src="/whymonitoring/T-Layered-Wheel.webp"
            alt="Why monitoring is the solution illustration"
            width={800}
            height={700}
            className="w-full max-w-[400px] lg:max-w-[700px] xl:max-w-[850px] 2xl:max-w-[860px] object-contain mt-0"
          />
        </div>

      </div>
    </section>
  );
}
