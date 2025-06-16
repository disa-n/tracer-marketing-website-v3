import React from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';

export default function Hero() {
  return (
    <section className="relative bg-[#FCFCFC] pt-20 lg:pt-26 xl:pt-30 2xl:pt-40 pb-12 lg:pb-20 overflow-hidden">
      <GridLinesLight />
      
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-20 xl:px-16 2xl:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 relative z-10">
            <h1 className="font-chakra-petch text-[#202020] leading-tight tracking-tight
                           text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Reverse Complement Generator
            </h1>
            
            <p className="font-britti-sans text-[#202020] text-base md:text-lg lg:text-xl 
                          leading-relaxed max-w-[630px]">
              Get the reverse, complement, or reverse complement of any DNA sequence as quickly 
              as we can provide visibility into your bioinformatics pipelines.
            </p>
          </div>

          {/* Right Visual - DNA Asset */}
          <div className="flex-1 lg:flex lg:justify-end relative z-10">
            <div className="hidden lg:block max-w-md">
              <Image
                src="/shared/T-DNA-O.webp"
                alt="DNA visualization"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
