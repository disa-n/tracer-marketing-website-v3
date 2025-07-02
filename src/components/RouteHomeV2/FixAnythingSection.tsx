'use client';

import React from 'react';
import Link from 'next/link';
import PerformanceCard from '../ui/PerformanceCard';
import GridLines from '@/components/shared/GridLines';

export default function FixAnythingSection() {
  return (
    <section id="fix-anything-section" className="relative bg-[#202020] pt-24 pb-0 md:pt-36 md:pb-36">
      <GridLines />

      {/* Section Heading */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 900:px-8 mb-12 md:mb-20 lg:mb-24">
        <h2 className="text-[#FCFCFC] text-[36px] sm:text-[48px] 2xl:text-[56px] font-normal leading-[38px] sm:leading-[50px] 2xl:leading-[58px] mb-6 text-left font-britti max-w-fit tracking-tight sm:tracking-normal">
          See and Fix Anything. Instantly.
        </h2>
        <p className="text-[#888888] text-[14px] sm:text-[20px] 2xl:text-[24px] leading-[16px] sm:leading-[22px] 2xl:leading-[26px] font-normal text-left font-britti max-w-fit tracking-tight sm:tracking-normal">
          Tracer helps you effortlessly monitor tools, runs, and infrastructure with visual clarity and actionable diagnostics.
        </p>
      </div>

      {/* Feature Card Grid */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 900:px-8">
        <div className="space-y-8">
          <div className="w-full">
            <PerformanceCard
              indexLabel="01–03"
              sectionLabel="TRACER PERFORMANCE"
              title="Predict and optimise compute requirements"
              description="Forecast the exact running time and compute needs of your pipelines. Further optimise your underutilised instances and increase the usage of AI models in a cost-efficient manner."
              previewImage="/home/Tracer-Performance.webp"
              mobilePreviewImage="/home/Tracer-Performance-Mobile.webp"
              pushTextDown={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PerformanceCard
              indexLabel="02–03"
              sectionLabel="TRACER INTELLIGENCE"
              title="Total visibility into computational infrastructure"
              description="Gain real-time, highly granular insights into every workload and process, independent of coding language or framework, including highly parallelised processes across instances."
              previewImage="/home/Tracer-Intel.webp"
            />
            <PerformanceCard
              indexLabel="03–03"
              sectionLabel="TRACER DEBUG"
              title="Fix issues instantly"
              description="Gain deep insights into the root causes of bugs across all analyses, recognise the error type, and solve instantly."
              previewImage="/home/Tracer-Debug.webp"
              pushTextDown={true}
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 900:px-8">
        <div className="mt-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link href="/product" className="block w-full">
              <button className="w-full min-w-fit bg-[#E8E8E8] text-[#202020] font-britti-sans text-sm font-normal px-8 h-[44px] hover:bg-[#E8E8E8]/80 cursor-pointer whitespace-nowrap transition-colors duration-200 md:h-[51px] md:text-base">
                View Product →
              </button>
            </Link>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

