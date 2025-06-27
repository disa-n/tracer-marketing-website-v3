'use client';
import React from 'react';
import GridLines from '../shared/GridLines';

export default function ScienceNeedsInfoSection() {
  return (
    <>
      {/* Background Grid Lines */}
      <GridLines />

      {/* Main Section */}
      <section className="relative w-full bg-[#FCFCFC] overflow-hidden">
        <div className="flex flex-col justify-center pt-16 md:pt-24 pb-2 md:pb-4">
          <div className="px-4 md:px-8 lg:px-12">
            <div className="max-w-[1400px] w-full">
              {/* Main Title - matching "From Fragments To Full Visibility With Tracer" styling */}
              <h1 className="font-britti-sans font-normal text-[#202020] mb-6 break-words tracking-tight text-left text-[48px] leading-[50px] 600:text-[56px] 600:leading-[64px] 1300:text-[80px] 1300:leading-[72px] max-w-fit">
                Science Needs<br />
                Better Information
              </h1>

              {/* Subtitle Text */}
              <p className="text-[16px] leading-[22px] 600:text-[20px] 600:leading-[22px] 2xl:text-[24px] 2xl:leading-[26px] text-neutral-400 font-normal tracking-tight font-britti">
                Tracer gives researchers the real-time insight traditional monitoring tools can&apos;t.<br />
                Purpose-built for the complexity, speed, and stakes of scientific discovery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
