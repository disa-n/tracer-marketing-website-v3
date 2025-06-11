import React from 'react';
import GridLines from '@/components/shared/GridLines';

export default function HeroSectionV2() {
  return (
    <section className="relative bg-[#202020] min-h-screen overflow-hidden">
      <GridLines />
      <div className="relative z-10 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20 min-h-screen">

          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center py-16 sm:py-20 lg:py-24 xl:py-32">

            {/* Main Heading */}
            <h1 className="font-chakra-petch text-[#FCFCFC] leading-[0.9] mb-4 sm:mb-6 lg:mb-8
                           text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[90px]">
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
                href="/platform"
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

          {/* Right Column - Image */}
          <div className="flex items-center justify-center py-8 lg:py-16">
            <div className="w-full max-w-lg lg:max-w-none">
              {/* Temporary placeholder - replace with your actual image */}
              <div className="w-full aspect-square bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-300 text-lg font-medium text-center">
                  Image Placeholder<br />
                  <span className="text-sm">600x600</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
