export const metadata = {
  title: "Tracer | Bi-weekly Roundups",
  description: "Stay up to date with Tracer's latest company and product updates through our bi-weekly roundups.",
};

import BiweeklyHero from '@/components/resources/Biweekly/BiweeklyHero';
import BiweeklyGrid from '@/components/resources/Biweekly/BiweeklyGrid';

export default function BiweeklyRoundupsOverview() {
  return (
    <main className="w-full min-h-screen bg-[#202020] text-[#FCFCFC] relative">
      {/* Hero Section */}
      <BiweeklyHero />

      {/* Bi-weekly Entries Grid - Improved spacing and layout */}
      <section className="py-12 mt-[-80px] relative z-10">
        <div className="max-w-[1408px] mx-auto px-4 mb-8">
          {/* Section Header with improved typography */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
            <h2 className="font-chakra-petch text-2xl md:text-3xl lg:text-4xl font-medium text-[#FCFCFC] tracking-wide">
              ALL ENTRIES
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00FF94] rounded-full"></div>
              <span className="text-[#CCCCCC] text-sm font-chakra-petch uppercase tracking-wider">
                LATEST UPDATES
              </span>
            </div>
          </div>

          {/* Subtle divider */}
          <div className="w-full h-px bg-gradient-to-r from-[#00FF94]/30 via-[#8B5CF6]/20 to-transparent mb-8"></div>
        </div>

        {/* Grid with improved spacing */}
        <div className="px-4">
          <BiweeklyGrid />
        </div>
      </section>
    </main>
  );
}
