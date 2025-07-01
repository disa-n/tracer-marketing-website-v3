'use client';
import React from 'react';
import Image from 'next/image';
import { SearchX, Wrench, ShieldOff, Siren } from 'lucide-react';

// Card component matching WhyMonitoring style
interface ScienceInfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ScienceInfoCard({ icon, title, description }: ScienceInfoCardProps) {
  return (
    <div className="bg-[#FCFCFC] border border-[#E8E8E8] p-6 md:p-8 flex items-center gap-6 md:gap-8 min-h-[120px] md:min-h-[140px]">
      {/* Icon */}
      <div className="flex-shrink-0">
        {icon}
      </div>

      {/* Title and Description */}
      <div className="flex-1 space-y-2">
        {/* Title */}
        <h3 className="font-britti-sans text-lg sm:text-xl font-normal text-[#202020] leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="font-britti-sans text-sm sm:text-base text-[#888888] leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ScienceNeedsInfoSection() {
  // Card data with the content from the image
  const cardData = [
    {
      icon: <SearchX className="w-12 h-12 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"We Don't Know When Something's Failing\"",
      description: "Pipelines silently break. By the time you find out, you've already wasted hours of spend, your results are wrong."
    },
    {
      icon: <Wrench className="w-12 h-12 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"Generic Dashboards Miss Pipeline Context\"",
      description: "Off-the-shelf tools weren't built for scientific workflows. They surface metrics, but not meaning."
    },
    {
      icon: <ShieldOff className="w-12 h-12 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"Security Standards? Not Even Close\"",
      description: "Most tools ignore compliance, traceability, and access control essentials for sensitive, collaborative research."
    },
    {
      icon: <Siren className="w-12 h-12 md:w-16 md:h-16 text-[#202020]" strokeWidth={1} />,
      title: "\"Too Much Noise. Not Enough Insight\"",
      description: "Endless alerts make it hard to spot real problems. You're reactive, not proactive."
    }
  ];

  return (
    <>
      {/* Main Section */}
      <section className="relative w-full bg-[#FCFCFC] overflow-hidden">
        <div className="flex flex-col justify-center pt-16 pb-8 md:pt-36 md:pb-16">
          <div className="px-4 md:px-8 lg:px-12">
            <div className="max-w-[1400px] w-full">
              {/* Main Title - matching "From Fragments To Full Visibility With Tracer" styling */}
              <h1 className="font-britti-sans font-normal text-[#202020] mb-6 break-words tracking-tight text-left text-[48px] leading-[50px] 600:text-[56px] 600:leading-[64px] 1300:text-[80px] 1300:leading-[72px] max-w-fit">
                Science Needs<br />
                Better Information
              </h1>

              {/* Subtitle Text */}
              <p className="text-[16px] leading-[22px] 600:text-[20px] 600:leading-[22px] 2xl:text-[24px] 2xl:leading-[26px] text-neutral-400 font-normal tracking-tight font-britti mb-16">
                Clear signals. Real-time visibility. Control they can act on.
              </p>
            </div>
          </div>
        </div>

        {/* Cards moved to UseTracerSectionV2 */}
      </section>
    </>
  );
}
