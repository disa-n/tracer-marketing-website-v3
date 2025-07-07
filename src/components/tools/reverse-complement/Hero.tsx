import { GridLinesLight } from '@/components/ui/GridLines';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#FCFCFC] pt-24 lg:pt-26 xl:pt-30 2xl:pt-40 pb-6 lg:pb-20 overflow-hidden min-h-[400px] lg:min-h-[500px]">
      <GridLinesLight />
      
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-20 xl:px-16 2xl:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 relative z-10">
            <h1 className="font-chakra-petch text-[#202020] leading-tight tracking-tight
                           text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Reverse Complement Generator
            </h1>
            
            <p className="font-britti-sans text-[#202020] text-base md:text-lg lg:text-xl
                          leading-relaxed max-w-[630px] mb-0 lg:mb-0">
              Get the reverse, complement, or reverse complement of any DNA sequence as quickly
              as we can provide visibility into your bioinformatics pipelines.
            </p>
          </div>

          {/* Right Visual - DNA Asset */}
          <div className="hidden md:flex lg:justify-end relative z-10 md:absolute md:top-16 md:-right-20 md:bottom-[-50px] md:w-1/2 lg:absolute lg:top-12 lg:-right-40 lg:bottom-[-50px] lg:w-1/2 2xl:top-20">
            <div className="w-full h-full">
              <Image
                src="/images/tools/T-DNA-O.webp"
                alt="DNA visualization"
                width={700}
                height={600}
                className="w-full h-full object-cover scale-105 md:scale-110 lg:scale-105"
                style={{ objectPosition: '75% 75%' }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
