'use client';

import { GridLinesLight } from '@/components/ui/layout/GridLines';



export default function ScienceNeedsInfoSection() {

  return (
    <>
      {/* Main Section */}
      <section className="relative w-full bg-[#FCFCFC] overflow-hidden">
        {/* Grid Lines */}
        <GridLinesLight />

        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 900:px-8 pt-16 pb-4 md:pt-36 md:pb-8">
          {/* Main Title - matching "From Fragments To Full Visibility With Tracer" styling */}
          <h1 className="font-britti-sans font-normal text-[#202020] mb-6 break-words tracking-tight text-left text-[38px] leading-[42px] 600:text-[56px] 600:leading-[64px] 1300:text-[80px] 1300:leading-[72px] max-w-fit">
            Science Needs<br />
            Better Information
          </h1>

          {/* Subtitle Text */}
          <p className="text-[16px] leading-[22px] 600:text-[20px] 600:leading-[22px] 2xl:text-[24px] 2xl:leading-[26px] text-neutral-400 font-normal tracking-tight font-britti mb-16">
            Clear signals. Real-time visibility. Control they can act on.
          </p>
        </div>

        {/* Cards moved to UseTracerSectionV2 */}
      </section>
    </>
  );
}
