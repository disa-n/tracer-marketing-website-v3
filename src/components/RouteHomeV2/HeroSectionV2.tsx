import React from 'react';
import Image from 'next/image';
import GridLines from '@/components/shared/GridLines';

export default function HeroSectionV2() {
  return (
    <section className="relative bg-[#202020] min-h-screen overflow-hidden">
      <GridLines />
      <div className="relative z-10 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20 min-h-screen">

          {/* Left Column - Text Content (Desktop) / Order 2 on Mobile */}
          <div className="relative z-20 flex flex-col justify-center pt-24 pb-16 sm:py-20 lg:py-24 xl:py-32 order-2 lg:order-1">

            {/* Main Heading */}
            <h1 className="font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-[#FCFCFC] sm:text-[70px] 1100:text-[80px] 1300:text-[104px] mb-4 sm:mb-6 lg:mb-8">
              <span className="lg:whitespace-nowrap">The First Pipeline</span><br className="hidden lg:block" />{" "}
              <span className="lg:whitespace-nowrap">Monitoring System</span>
            </h1>

            {/* Subheading */}
            <h2 className="font-chakra-petch text-[#FCFCFC] leading-[0.9] mb-6 sm:mb-8 lg:mb-10
                           text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-[60px]">
              That Lives in the OS
            </h2>

            {/* Supporting Text */}
            <p className="font-britti-sans text-[#888888] leading-relaxed mb-8 sm:mb-10 lg:mb-12
                          text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl
                          max-w-2xl">
              Tracer combines cutting-edge technological advances with the deep understanding of scientific industries to give insights into enterprises&apos; digital and AI acceleration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="https://sandbox.tracer.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[200px] inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4
                           bg-[#E8E8E8] text-[#202020] font-medium
                           hover:bg-gray-300 transition-colors duration-200
                           text-sm sm:text-base lg:text-lg
                           rounded-none border-none"
              >
                Try For Free
              </a>

              <a
                href="/product"
                className="w-full sm:w-[200px] inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4
                           bg-[#626161] text-[#FCFCFC] font-medium
                           hover:bg-gray-500 transition-colors duration-200
                           text-sm sm:text-base lg:text-lg
                           rounded-none border-none gap-2"
              >
                Learn More
                <span className="text-lg sm:text-xl">→</span>
              </a>
            </div>

          </div>

          {/* Right Column - Image - Order 1 on mobile */}
          <div className="flex items-center justify-center pt-20 -pb-2 lg:py-16 lg:justify-end lg:pr-0 order-1 lg:order-2">
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
