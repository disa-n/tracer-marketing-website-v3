'use client';

import React from 'react';

export default function FixAnythingSection() {
  return (
    <section className="bg-[#202020] pt-16 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-20 xl:px-32">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-[#FCFCFC] text-[48px] font-medium leading-[50px] mb-2 text-left font-britti">
            See and Fix Anything. Instantly.
          </h2>
          <p className="text-[#888888] text-[20px] leading-[22px] font-normal text-left font-britti">
            Tracer helps you effortlessly monitor tools, runs, and infrastructure with visual clarity and actionable diagnostics.
          </p>
        </div>

        {/* Feature Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#202020] border border-[#474747] flex flex-col">
            {/* Top Half: Visual Preview */}
            <div className="relative bg-[#3a3a3a] h-[240px] flex-shrink-0">
              {/* Top right corner label */}
              <div className="absolute top-4 right-4">
                <span className="text-[#888888] text-[14px] font-chakra uppercase">
                  TRACER PERFORMANCE
                </span>
              </div>

              {/* Bottom left corner index */}
              <div className="absolute bottom-4 left-4">
                <span className="text-[#888888] text-[14px] font-chakra uppercase">
                  01–03
                </span>
              </div>
            </div>

            {/* Bottom Half: Text Block */}
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-white text-[32px] leading-[30px] font-normal font-britti">
                Predict and optimise compute requirements
              </h3>
              <p className="text-[#888888] text-[16px] leading-[17px] font-normal font-britti">
                Forecast the exact running time and compute needs of your pipelines. Further optimise your underutilised instances and increase the usage of AI models in a cost-efficient manner.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#202020] border border-[#474747] flex flex-col">
            {/* Top Half: Visual Preview */}
            <div className="relative bg-[#3a3a3a] h-[240px] flex-shrink-0">
              {/* Top right corner label */}
              <div className="absolute top-4 right-4">
                <span className="text-[#888888] text-[14px] font-chakra uppercase">
                  TRACER PERFORMANCE
                </span>
              </div>

              {/* Bottom left corner index */}
              <div className="absolute bottom-4 left-4">
                <span className="text-[#888888] text-[14px] font-chakra uppercase">
                  02–03
                </span>
              </div>
            </div>

            {/* Bottom Half: Text Block */}
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-white text-[32px] leading-[30px] font-normal font-britti">
                Total visibility into computational Infrastructure
              </h3>
              <p className="text-[#888888] text-[16px] leading-[17px] font-normal font-britti">
                Gain real-time, highly granular insights into every workload and process, independent of coding language or framework, including highly parallelised processes across instances.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#202020] border border-[#474747] flex flex-col">
            {/* Top Half: Visual Preview */}
            <div className="relative bg-[#3a3a3a] h-[240px] flex-shrink-0">
              {/* Top right corner label */}
              <div className="absolute top-4 right-4">
                <span className="text-[#888888] text-[14px] font-chakra uppercase">
                  TRACER PERFORMANCE
                </span>
              </div>

              {/* Bottom left corner index */}
              <div className="absolute bottom-4 left-4">
                <span className="text-[#888888] text-[14px] font-chakra uppercase">
                  03–03
                </span>
              </div>
            </div>

            {/* Bottom Half: Text Block */}
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-white text-[32px] leading-[30px] font-normal font-britti">
                Fix issues instantly
              </h3>
              <p className="text-[#888888] text-[16px] leading-[17px] font-normal font-britti">
                Gain deep insights into the root causes of bugs across all analyses, recognise the error type, and solve instantly.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12 text-left md:text-center lg:text-right">
          <button className="bg-[#E8E8E8] text-[#202020] font-britti text-[16px] leading-[17px] px-8 py-4">
            See our Technology →
          </button>
        </div>

      </div>
    </section>
  );
}
