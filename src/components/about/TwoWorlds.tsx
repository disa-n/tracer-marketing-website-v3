'use client';

import { Info } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

// LinkedIn icon component
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
  </svg>
);

// Bio data for founders
const founderBios = {
  vincent: "Vincent is Tracer's lead builder with a track record of turning complex ideas into scalable platforms.\n\nA repeat technical founder, he built Flymble, a BNPL travel platform and Primary Portal, a B2B SaaS company with over $15M funding.\n\nHe holds a degree in Biomechanical Engineering from TU Delft.",
  laura: "Laura is Tracer's lead problem-solver and strategist.\n\nAt McKinsey, she advised global pharma and biotech firms, where she identified the infrastructure bottlenecks slowing scientific progress.\n\nShe holds a Master's in Digital Health from the University of Oxford."
};

export default function FoundersSection() {
  const [hoveredFounder, setHoveredFounder] = useState<string | null>(null);
  const [clickedFounder, setClickedFounder] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleFounderClick = (founder: string) => {
    setClickedFounder(founder);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

   // Set new timeout to hide card after 15 seconds
   timeoutRef.current = setTimeout(() => {
    setClickedFounder(null);
  }, 15000);
};

  const isFounderVisible = (founder: string) => {
    return hoveredFounder === founder || clickedFounder === founder;
  };

  return (
    <section className="relative bg-[#FCFCFC] overflow-visible pt-16 pb-16 md:pt-30 md:pb-30 z-40">
      <div className="relative z-10">
        {/* Mobile and small screens: stacked layout */}
        <div className="lg:hidden">
          {/* Heading and text with proper alignment */}
          <div className="flex flex-col justify-center px-4 md:px-8 lg:px-12 lg:max-w-[1400px] lg:w-full mb-8">
            <h1 className="font-britti-sans font-medium text-[#1e1e1e] text-3xl mb-6 leading-tight tracking-tight">
              The Best of Two Worlds
            </h1>
            <div className="font-britti-sans font-normal text-[#1e1e1e] text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg leading-[1.4] md:leading-[1.5] space-y-4 md:space-y-6">
              <p>
                Tracer was founded in 2023 by Vincent Hus and Laura Bogaert, who set out to change the way scientists understand and manage their computational workloads.
              </p>
              <p>
                Driven by their shared frustration with legacy tools, broken pipelines, and infrastructure bottlenecks, they joined forces to build the world&apos;s first verticalised observability platform, purpose-built for scientific computing.
              </p>
            </div>
          </div>

          {/* Founders image and bios side by side */}
          <div className="flex gap-6 px-4 md:px-8 lg:px-12">
            {/* Narrower founders image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/about-us/T-Founders.webp"
                alt="Vincent Hus and Laura Bogaert - Tracer Founders"
                width={240}
                height={280}
                className="w-48 h-64 object-cover"
              />
            </div>

            {/* Founder bios next to image */}
            <div className="flex-1 space-y-6 md:space-y-8 pt-2 md:pt-4">
              {/* Vincent Hus */}
              <div className="relative">
                <div className="mb-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-britti-sans font-medium text-[#1e1e1e] text-base md:text-lg mb-0">
                      Vincent Hus
                    </h3>
                    <Info
                      size={14}
                      strokeWidth={1.5}
                      className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors flex-shrink-0"
                      onMouseEnter={() => setHoveredFounder('vincent')}
                      onMouseLeave={() => setHoveredFounder(null)}
                      onClick={() => handleFounderClick('vincent')}
                      onTouchStart={() => setHoveredFounder(hoveredFounder === 'vincent' ? null : 'vincent')}
                    />
                  </div>
                  <p className="font-britti-sans font-normal text-[#666666] text-xs md:text-sm">
                    Co-founder and CEO
                  </p>
                </div>

                {/* Bio Card */}
                {isFounderVisible('vincent') && (
                  <div className="absolute bottom-full left-0 mb-2 w-64 bg-[#3D3D3D] text-white p-4 shadow-lg z-[100] transition-opacity duration-200">
                    <p className="font-britti-sans text-sm leading-relaxed whitespace-pre-line">
                      {founderBios.vincent}
                    </p>
                  </div>
                )}
                <a
                  href="https://www.linkedin.com/in/vincent-hus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline md:items-start gap-2 text-[#1e1e1e] hover:opacity-70 transition-opacity"
                >
                  <div className="translate-y-1 md:translate-y-0">
                    <LinkedInIcon />
                  </div>
                  <span className="font-britti-sans text-xs">LinkedIn</span>
                </a>
              </div>

              {/* Laura Bogaert */}
              <div className="relative">
                <div className="mb-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-britti-sans font-medium text-[#1e1e1e] text-base md:text-lg mb-0">
                      Laura Bogaert
                    </h3>
                    <Info
                      size={14}
                      strokeWidth={1.5}
                      className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors flex-shrink-0"
                      onMouseEnter={() => setHoveredFounder('laura')}
                      onMouseLeave={() => setHoveredFounder(null)}
                      onClick={() => handleFounderClick('laura')}
                      onTouchStart={() => setHoveredFounder(hoveredFounder === 'laura' ? null : 'laura')}
                    />
                  </div>
                  <p className="font-britti-sans font-normal text-[#666666] text-xs md:text-sm">
                    Co-founder and COO
                  </p>
                </div>

                {/* Bio Card */}
                {isFounderVisible('laura') && (
                  <div className="absolute bottom-full left-0 mb-2 w-64 bg-[#3D3D3D] text-white p-4 shadow-lg z-[100] transition-opacity duration-200">
                    <p className="font-britti-sans text-sm leading-relaxed whitespace-pre-line">
                      {founderBios.laura}
                    </p>
                  </div>
                )}
                <a
                  href="https://www.linkedin.com/in/laura-bogaert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline md:items-start gap-2 text-[#1e1e1e] hover:opacity-70 transition-opacity"
                >
                  <div className="translate-y-1 md:translate-y-0">
                    <LinkedInIcon />
                  </div>
                  <span className="font-britti-sans text-xs">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large screens: 3-column layout (text | image | bios) */}
        <div className="hidden lg:block">
          <div className="flex">
            {/* Left column: Text content with proper left alignment */}
            <div className="w-1/3 px-4 md:px-8 lg:px-12 pt-8">
              <h1 className="font-britti-sans font-medium text-[#1e1e1e] text-3xl lg:text-5xl leading-tight lg:leading-[38px] tracking-tight lg:tracking-[-1.5px] mb-6 lg:mb-8">
                The Best of Two Worlds
              </h1>
              <div className="font-britti-sans font-normal text-[#1e1e1e] text-base md:text-lg lg:text-base xl:text-base 2xl:text-lg leading-[1.5] space-y-6 max-w-[600px]">
                <p>
                  Tracer was founded in 2023 by Vincent Hus and Laura Bogaert, who set out to change the way scientists understand and manage their computational workloads.
                </p>
                <p>
                  Driven by their shared frustration with legacy tools, broken pipelines, and infrastructure bottlenecks, they joined forces to build the world&apos;s first verticalised observability platform, purpose-built for scientific computing.
                </p>
              </div>
            </div>

            {/* Center column: Founders image */}
            <div className="w-1/3 flex justify-center items-start px-4">
              <Image
                src="/images/about-us/T-Founders.webp"
                alt="Vincent Hus and Laura Bogaert - Tracer Founders"
                width={450}
                height={500}
                className="w-96 h-[500px] object-cover"
              />
            </div>

            {/* Right column: Founder bios */}
            <div className="w-1/3 px-4 flex flex-col justify-center h-full">
              <div className="flex flex-col justify-center gap-36 h-[500px]">
                {/* Vincent Hus */}
                <div className="relative">
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-britti-sans font-medium text-[#1e1e1e] text-2xl mb-1">
                        Vincent Hus
                      </h3>
                      <Info
                        size={16}
                        strokeWidth={1.5}
                        className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors flex-shrink-0 -translate-y-0.5"
                        onMouseEnter={() => setHoveredFounder('vincent')}
                        onMouseLeave={() => setHoveredFounder(null)}
                        onClick={() => handleFounderClick('vincent')}
                      />
                    </div>
                    <p className="font-britti-sans font-normal text-[#666666] text-base">
                      Co-founder and CEO
                    </p>
                  </div>

                  {/* Bio Card */}
                  {isFounderVisible('vincent') && (
                    <div className="absolute bottom-full -left-32 mb-4 w-[380px] xl:w-[420px] 2xl:w-[450px] bg-[#3D3D3D] text-white p-4 shadow-lg z-[100] transition-opacity duration-200">
                      <p className="font-britti-sans text-sm leading-tight whitespace-pre-line">
                        {founderBios.vincent}
                      </p>
                    </div>
                  )}
                  <a
                    href="https://www.linkedin.com/in/vincent-hus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-3 text-[#1e1e1e] hover:opacity-70 transition-opacity"
                  >
                    <LinkedInIcon />
                    <span className="font-britti-sans text-sm">LinkedIn</span>
                  </a>
                </div>

                {/* Laura Bogaert */}
                <div className="relative">
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-britti-sans font-medium text-[#1e1e1e] text-2xl mb-1">
                        Laura Bogaert
                      </h3>
                      <Info
                        size={16}
                        strokeWidth={1.5}
                        className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors flex-shrink-0 -translate-y-0.5"
                        onMouseEnter={() => setHoveredFounder('laura')}
                        onMouseLeave={() => setHoveredFounder(null)}
                        onClick={() => handleFounderClick('laura')}
                      />
                    </div>
                    <p className="font-britti-sans font-normal text-[#666666] text-base">
                      Co-founder and COO
                    </p>
                  </div>

                  {/* Bio Card */}
                  {isFounderVisible('laura') && (
                    <div className="absolute bottom-full -left-32 mb-4 w-[380px] bg-[#3D3D3D] text-white p-4 shadow-lg z-[100] transition-opacity duration-200">
                      <p className="font-britti-sans text-sm leading-tight whitespace-pre-line">
                        {founderBios.laura}
                      </p>
                    </div>
                  )}
                  <a
                    href="https://www.linkedin.com/in/laura-bogaert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-3 text-[#1e1e1e] hover:opacity-70 transition-opacity"
                  >
                    <LinkedInIcon />
                    <span className="font-britti-sans text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

