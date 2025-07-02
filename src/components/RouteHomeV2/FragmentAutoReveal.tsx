'use client';

import React from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';

export default function FragmentAutoReveal() {
  return (
    <>
      <section className="relative bg-[#FCFCFC] overflow-hidden">
        <GridLinesLight />

        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 900:px-8 py-16 md:pt-36 md:pb-36">

          {/* Header Section */}
          <div className="mb-12 md:mb-20 lg:mb-24 relative">
            {/* See our Technology CTA - Top Right (Desktop Only) */}
            <div className="absolute top-0 right-0 z-20 hidden md:block">
              <a
                href="/technology"
                className="flex h-[44px] w-auto shrink-0 cursor-pointer items-center justify-center bg-[#E8E8E8] px-8 py-3 font-britti-sans text-sm font-normal text-[#202020] hover:bg-[#E8E8E8]/80 transition-colors duration-200 md:h-[51px] md:text-base"
              >
                See our Technology
              </a>
            </div>

            {/* Main Heading - matching Total Visibility styling */}
            <h1 className="font-britti-sans font-normal text-[#202020] mb-6 break-words tracking-tight text-left text-[38px] leading-[42px] 600:text-[56px] 600:leading-[66px] 1300:text-[80px] 1300:leading-[80px] max-w-fit">
              {/* Small mobile version */}
              <span className="sm:hidden">
                From Fragments<br />
                To Full Visibility<br />
                With Tracer
              </span>
              {/* All other sizes */}
              <span className="hidden sm:inline">
                From Fragments To<br />
                Full Visibility With Tracer
              </span>
            </h1>

            {/* Subheading Paragraph - matching Total Visibility styling */}
            <p className="font-britti-sans text-[#888888] text-left text-[16px] leading-[26px] 600:text-[20px] 600:leading-[28px] max-w-fit mb-12">
              Tracer delivers unmatched visibility, speed, and accuracy for high-performance scientific computing.<br />
              Built from the ground up for the unique demands of research pipelines, not generic infrastructure.
            </p>

          </div>

          {/* Content Box */}
          <div className="relative w-full bg-[#141414] border border-[#333333] overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[750px]">

            {/* Single Static Image with Text Overlay */}
            <div className="relative w-full h-full">
              {/* Background Image - Desktop */}
              <Image
                src="/images/home/Monitoring_Comparison.webp"
                alt="Monitoring comparison showing traditional vs Tracer"
                fill
                className="object-contain hidden sm:block 2xl:scale-125 2xl:-translate-x-8 2xl:-translate-y-6"
                style={{ objectPosition: 'center 55%' }}
              />

              {/* Background Image - Mobile */}
              <Image
                src="/images/home/Mobile_Comparisons.webp"
                alt="Monitoring comparison showing traditional vs Tracer"
                fill
                className="object-contain block sm:hidden"
                style={{ objectPosition: 'center center' }}
              />

              {/* Text Overlays */}
              {/* Top Half - Traditional Monitoring */}
              <div className="absolute top-8 sm:top- md:top-30 lg:top-34 xl:top-36 2xl:top-27 left-8 z-20">
                <h3 className="font-britti-sans font-normal text-white mb-2 text-[18px] leading-[22px] sm:text-[22px] sm:leading-[26px] md:text-[24px] md:leading-[28px] lg:text-[28px] lg:leading-[32px] xl:text-[32px] xl:leading-[36px] 2xl:text-[36px] 2xl:leading-[40px]">
                  Traditional Monitoring
                </h3>
                <p className="font-britti-sans text-[#888888] text-[11px] leading-[18px] sm:text-[13px] sm:leading-[20px] md:text-[14px] md:leading-[22px] lg:text-[16px] lg:leading-[26px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[28px] max-w-[220px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] 2xl:max-w-[440px]">
                  Limited or missing logs from pipelines. <br /> No visibility into OS-level failures.
                </p>
              </div>

              {/* Bottom Half - With Tracer */}
              <div className="absolute bottom-8 sm:bottom- md:bottom-28 lg:bottom-31 xl:bottom-34 2xl:bottom-35 left-8 z-20">
                <h3 className="font-britti-sans font-normal text-white mb-2 text-[18px] leading-[22px] sm:text-[22px] sm:leading-[26px] md:text-[24px] md:leading-[28px] lg:text-[28px] lg:leading-[32px] xl:text-[32px] xl:leading-[36px] 2xl:text-[36px] 2xl:leading-[40px]">
                  With Tracer
                </h3>
                <p className="font-britti-sans text-[#888888] text-[11px] leading-[18px] sm:text-[13px] sm:leading-[20px] md:text-[14px] md:leading-[22px] lg:text-[16px] lg:leading-[26px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[28px] max-w-[220px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] 2xl:max-w-[440px]">
                  Tracer taps directly into the OS layer —<br className="hidden sm:block" /> uncovering what traditional tools miss.
                </p>
              </div>
            </div>



          </div>

          {/* Mobile CTA - Full Width Below Preview */}
          <div className="mt-4 md:hidden">
            <a
              href="/technology"
              className="flex h-[44px] w-full cursor-pointer items-center justify-center bg-[#E8E8E8] font-britti-sans text-sm font-normal text-[#202020] hover:bg-[#E8E8E8]/80 transition-colors duration-200"
            >
              See our Technology
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
