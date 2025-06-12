'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';

export default function TotalVisibilitySection() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'tracer'>('traditional');

  return (
    <section className="relative bg-[#FCFCFC] pt-0 pb-24">
      {/* Dark grey rectangle at top left matching background above */}
      <div className="w-96 h-16 bg-[#202020] relative z-50 hidden sm:block"></div>

      <div className="pt-16 relative">
        <div className="absolute inset-0 -top-15 h-[114%]">
          <GridLinesLight />
        </div>

        {/* Main Content Container - aligned with FixAnythingSection */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-16">

        {/* Introductory Content */}
        <div className="mb-16">
          <div className="max-w-4xl ml-0 lg:ml-0 xl:ml-0 2xl:-ml-10">
            {/* Main Heading */}
            <h1 className="font-britti-sans font-normal text-[#202020] mb-6 break-words tracking-tight text-left text-[48px] leading-[50px] 600:text-[56px] 600:leading-[64px] 1300:text-[80px] 1300:leading-[72px] max-w-fit">
              Total Visibility.<br />
              Powered by eBPF.
            </h1>

            {/* Subheading Paragraph */}
            <p className="font-britti-sans text-[#888888] text-left text-[16px] leading-[22px] 600:text-[20px] 600:leading-[22px] max-w-fit">
              Tracer delivers unmatched visibility, speed, and accuracy for high-performance scientific computing — built from the ground up for the unique demands of research pipelines, not generic infrastructure.
            </p>
          </div>
        </div>

      </div>

      {/* Tabbed Interface - visible on mobile and tablet (below md) */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-16 md:hidden">
        {/* Tab Headers */}
        <div className="flex mb-6">
          <button
            onClick={() => setActiveTab('traditional')}
            className={`flex-1 py-3 px-4 font-britti-sans font-normal text-[20px] leading-[24px] border-b-2 transition-colors ${
              activeTab === 'traditional'
                ? 'text-[#202020] border-[#202020]'
                : 'text-[#888888] border-transparent'
            }`}
          >
            Traditional Monitoring Tools
          </button>
          <button
            onClick={() => setActiveTab('tracer')}
            className={`flex-1 py-3 px-4 font-britti-sans font-normal text-[20px] leading-[24px] border-b-2 transition-colors ${
              activeTab === 'tracer'
                ? 'text-[#202020] border-[#202020]'
                : 'text-[#888888] border-transparent'
            }`}
          >
            Tracer
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {/* Traditional Monitoring Tools Content */}
          {activeTab === 'traditional' && (
            <div className="w-full">
              <div className="relative w-screen h-[500px] bg-[#141414] -mx-2 sm:-mx-4">
                {/* Traditional Diagram Image */}
                <Image
                  src="/home/Traditional-Tool-Diagram.webp"
                  alt="Traditional system diagram showing incomplete error visibility"
                  fill
                  className="object-contain"
                />
                {/* Overlaid Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1b1b1b] to-transparent">
                  <div className="max-w-[700px]">
                    <p className="font-britti-sans text-[#CCCCCC] text-[16px] leading-[20px]">
                      Limited or missing logs from pipelines. No visibility into OS-level failures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tracer Content */}
          {activeTab === 'tracer' && (
            <div className="w-full">
              <div className="relative w-screen h-[500px] bg-[#141414] -mx-2 sm:-mx-4">
                {/* Tracer Diagram Image */}
                <Image
                  src="/home/Tracer-Diagram.webp"
                  alt="Tracer system diagram showing full error visibility"
                  fill
                  className="object-contain"
                />

                {/* Overlaid Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1b1b1b] to-transparent">
                  <div className="max-w-[700px]">
                    <p className="font-britti-sans text-[#CCCCCC] text-[16px] leading-[20px]">
                      Full error visibility at the system level—automatically collected, instantly actionable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Side-by-Side Layout - visible from md breakpoint up */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-16 hidden md:block">
        <div className="flex flex-row gap-20">

          {/* Left Column - Traditional Monitoring Tools */}
          <div className="flex-1">
            {/* Placeholder Image Box with overlaid text */}
            <div className="relative w-full h-[650px] xl:h-[750px] bg-[#141414] mb-6">
               <Image
                  src="/home/Traditional-Tool-Diagram.webp"
                  alt="Traditional system diagram showing incomplete error visibility"
                  fill
                  className="object-contain"
                />

              {/* Overlaid Content - starts at left edge of image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1b1b1b] to-transparent">
                <div className="max-w-[700px]">
                  {/* Section Title */}
                  <h2 className="font-britti-sans font-normal text-[#FCFCFC] mb-3 text-[28px] leading-[32px] 600:text-[32px] 600:leading-[36px]">
                    Traditional Monitoring Tools
                  </h2>

                  {/* Description */}
                  <p className="font-britti-sans text-[#CCCCCC] text-[16px] leading-[20px] 600:text-[18px] 600:leading-[22px]">
                    Limited or missing logs from pipelines. No visibility into OS-level failures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tracer */}
          <div className="flex-1">
            {/* Tracer Image Box with overlaid text */}
            <div className="relative w-full h-[650px] xl:h-[750px] bg-[#141414] mb-6">
              {/* Tracer Diagram Image */}
              <Image
                src="/home/Tracer-Diagram.webp"
                alt="Tracer system diagram showing full error visibility"
                fill
                className="object-contain"
              />

              {/* Overlaid Content - starts at left edge of image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1b1b1b] to-transparent">
                <div className="max-w-[700px]">
                  {/* Section Title */}
                  <h2 className="font-britti-sans font-normal text-[#FCFCFC] mb-3 text-[28px] leading-[32px] 600:text-[32px] 600:leading-[36px]">
                    Tracer
                  </h2>

                  {/* Description */}
                  <p className="font-britti-sans text-[#CCCCCC] text-[16px] leading-[20px] 600:text-[18px] 600:leading-[22px]">
                    Full error visibility at the system level—automatically collected, instantly actionable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
