import React from 'react';
import PerformanceCard from '../ui/PerformanceCard';
import GridLines from '../shared/GridLines';

export default function CoreChallengesSection() {
  return (
    <section className="relative bg-[#202020] py-16">
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

      {/* Card grid - centered as before */}
      <div className="relative z-10 px-4 lg:px-20 xl:px-32">
        <div className="max-w-[1400px] mx-auto">
          {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          <div className="[&>div]:!h-[480px] [&>div]:md:!h-[440px] [&>div]:xl:!h-[480px] [&>div]:2xl:!h-[520px] [&>div>div:first-child]:!h-[280px] [&>div>div:first-child]:md:!h-[260px] [&>div>div:first-child]:xl:!h-[305px] [&>div>div:first-child]:2xl:!h-[325px] [&>div>div:first-child]:md:!flex-none">
            <PerformanceCard
              indexLabel="01–04"
              sectionLabel="CORE CHALLENGES"
              title="No visibility into digitalisation"
              description="No structured way to measure ROI, track progress, or identify the areas to double down on AI investments."
              previewImage="/whymonitoring/Core-Challenge-1-2.webp"
            />
          </div>

          <div className="[&>div]:!h-[480px] [&>div]:md:!h-[440px] [&>div]:xl:!h-[480px] [&>div]:2xl:!h-[520px] [&>div>div:first-child]:!h-[280px] [&>div>div:first-child]:md:!h-[260px] [&>div>div:first-child]:xl:!h-[305px] [&>div>div:first-child]:2xl:!h-[325px] [&>div>div:first-child]:md:!flex-none">
            <PerformanceCard
              indexLabel="02–04"
              sectionLabel="CORE CHALLENGES"
              title="Information lost between teams"
              description="Metadata and crucial context get lost during handovers—leading to confusion, rework, and slower collaboration."
              previewImage="/whymonitoring/Core-Challenge-2-2.webp"
            />
          </div>

          <div className="[&>div]:!h-[480px] [&>div]:md:!h-[440px] [&>div]:xl:!h-[480px] [&>div]:2xl:!h-[520px] [&>div>div:first-child]:!h-[280px] [&>div>div:first-child]:md:!h-[260px] [&>div>div:first-child]:xl:!h-[305px] [&>div>div:first-child]:2xl:!h-[325px] [&>div>div:first-child]:md:!flex-none">
            <PerformanceCard
              indexLabel="03–04"
              sectionLabel="CORE CHALLENGES"
              title="Inefficient tools"
              description="Legacy systems lack the insights needed to debug, optimise, or even pinpoint performance bottlenecks."
              previewImage="/whymonitoring/Core-Challenge-3-2.webp"
            />
          </div>

          <div className="[&>div]:!h-[480px] [&>div]:md:!h-[440px] [&>div]:xl:!h-[480px] [&>div]:2xl:!h-[520px] [&>div>div:first-child]:!h-[280px] [&>div>div:first-child]:md:!h-[260px] [&>div>div:first-child]:xl:!h-[305px] [&>div>div:first-child]:2xl:!h-[325px] [&>div>div:first-child]:md:!flex-none">
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
      </div>
    </section>
  );
}
