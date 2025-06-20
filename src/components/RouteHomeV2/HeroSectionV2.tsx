import React from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';

export default function HeroSectionV2() {
  return (
    <section className="relative bg-[#FCFCFC] overflow-hidden">
      <GridLinesLight />
      <div className="relative z-10 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20">

          {/* Left Column - Text Content (Desktop) / Order 2 on Mobile */}
          <div className="relative z-20 flex flex-col justify-start pt-28 pb-16 lg:pt-40 lg:pb-20 order-2 lg:order-1">

            {/* Main Heading */}
            <h1 className="font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-[-0.04em] text-[#202020] sm:text-[70px] 1100:text-[80px] 1300:text-[104px] mb-4 sm:mb-6 lg:mb-8">
              <span className="lg:whitespace-nowrap">The First Pipeline</span><br className="hidden lg:block" />{" "}
              <span className="lg:whitespace-nowrap">Monitoring System</span>
            </h1>

            {/* Subheading */}
            <h2 className="font-chakra-petch text-[#202020] leading-[0.9] tracking-[-0.03em] mb-6 sm:mb-8 lg:mb-10 -mt-2 sm:-mt-3 lg:-mt-4
                           text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[70px]">
              That Lives in the OS
            </h2>

            {/* Supporting Text */}
            <p className="font-britti-sans text-[#202020] leading-[1.4] max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]
                          text-[16px] sm:text-[18px] md:text-xl lg:text-xl xl:text-lg 2xl:text-xl mb-8 sm:mb-10 lg:mb-12">
              Tracer combines cutting-edge technological advances with the deep understanding of scientific industries to give insights into enterprises&apos; digital and AI acceleration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative w-full sm:w-[160px] group">
                {/* Static gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] p-[2px]">
                  <div className="w-full h-full bg-[#202020]"></div>
                </div>

                <a
                  href="https://sandbox.tracer.cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-full inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3
                             bg-[#202020] text-[#FCFCFC] font-medium
                             hover:bg-[#303030] transition-all duration-200
                             text-sm sm:text-sm lg:text-base
                             shadow-[0_0_20px_rgba(58,35,237,0.3),0_0_40px_rgba(191,81,152,0.2),0_0_60px_rgba(255,162,49,0.1)]
                             hover:shadow-[0_0_30px_rgba(58,35,237,0.5),0_0_60px_rgba(191,81,152,0.4),0_0_90px_rgba(255,162,49,0.3)]"
                >
                  Try For Free
                </a>
              </div>

              <a
                href="/product"
                className="w-full sm:w-[160px] inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3
                           bg-[#E8E8E8] text-[#202020] font-medium
                           hover:bg-[#D8D8D8] transition-colors duration-200
                           text-sm sm:text-sm lg:text-base
                           rounded-none border-none gap-2"
              >
                Learn More
                <span className="text-base sm:text-lg">→</span>
              </a>
            </div>

          </div>

          {/* Right Column - Image - Order 1 on mobile */}
          <div className="flex items-start justify-center pt-16 pb-8 lg:pt-20 lg:pb-12 lg:justify-end lg:pr-0 order-1 lg:order-2">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-lg lg:ml-auto mx-auto lg:mx-0">
              <div className="w-full aspect-square relative lg:scale-[1.7] xl:scale-[2.1] 2xl:scale-[2.6] lg:translate-x-16 xl:translate-x-24 2xl:translate-x-32">
                <Image
                  src="/home/Space_Satellite_2.webp"
                  alt="Space Satellite"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
