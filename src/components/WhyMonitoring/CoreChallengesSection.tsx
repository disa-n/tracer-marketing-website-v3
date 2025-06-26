import React from 'react';
import PerformanceCard from '../ui/PerformanceCard';
import GridLines from '../shared/GridLines';

export default function CoreChallengesSection() {
  return (
    <section className="relative bg-[#202020] pt-16 pb-16 lg:pt-8 xl:pt-6 z-20">
      <div className="absolute inset-0" style={{ top: "0.5px", bottom: "0.75px" }}>
        <GridLines />
      </div>
      {/* Text content aligned with hero */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1400px] w-full">
          {/* Heading */}
          <h2 className="font-britti-sans text-[#FCFCFC] capitalize leading-[1.1] mb-4 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] max-w-[600px]">
            Core Challenges<br />Slow Scientific Progress
          </h2>

          {/* Intro paragraph */}
          <p className="font-britti-sans text-[#888888] mb-12 text-sm sm:text-base md:text-lg max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]">
            Modern science is moving software-first. Without system-level visibility, scientific progress remains difficult to measure, scale, and sustain.
          </p>
        </div>
      </div>

      {/* Card grid - with proper padding and gaps */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <PerformanceCard
            indexLabel="01–04"
            sectionLabel="CORE CHALLENGES"
            title="No visibility into digitalisation"
            description="No structured way to measure ROI, track progress, or identify the areas to double down on AI investments."
            previewImage="/whymonitoring/Core-Challenge-1-2.webp"
          />

          <PerformanceCard
            indexLabel="02–04"
            sectionLabel="CORE CHALLENGES"
            title="Information lost between teams"
            description="Metadata and crucial context get lost during handovers—leading to confusion, rework, and slower collaboration."
            previewImage="/whymonitoring/Core-Challenge-2-2.webp"
          />

          <PerformanceCard
            indexLabel="03–04"
            sectionLabel="CORE CHALLENGES"
            title="Inefficient tools"
            description="Legacy systems lack the insights needed to debug, optimise, or even pinpoint performance bottlenecks."
            previewImage="/whymonitoring/Core-Challenge-3-2.webp"
          />

          <PerformanceCard
            indexLabel="04–04"
            sectionLabel="CORE CHALLENGES"
            title="Lack of cost attribution"
            description="Cloud spend is opaque. Manual tagging is unreliable. It's hard to predict budgets or connect spend to value."
            previewImage="/whymonitoring/Core-Challenge-4-2.webp"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
