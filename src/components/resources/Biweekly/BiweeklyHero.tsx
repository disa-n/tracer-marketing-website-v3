import Image from 'next/image';

export default function BiweeklyHero() {
  return (
    <section className="w-full bg-[#202020] pt-[73px] pb-8 relative overflow-hidden">
      <div className="max-w-[1408px] mx-auto px-4 relative">
        {/* Hero Content - Mobile-first responsive layout */}
        <div className="relative min-h-[400px] md:min-h-[500px]">
          {/* Mobile: Stacked layout, Desktop: Side-by-side */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
            {/* Left Column - Text Content */}
            <div className="space-y-6 pt-8 w-full lg:w-1/2 lg:max-w-[704px] relative z-10">
              {/* Main Title */}
              <div className="w-full">
                <h1 className="text-neutral-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-chakra-petch leading-tight">
                  Tracer&apos;s<br />
                  Bi-weekly Roundups<br />
                  <span className="block sm:inline"></span>
                </h1>
              </div>

              {/* Description */}
              <div className="w-full">
                <p className="text-neutral-50 text-base sm:text-lg lg:text-xl font-normal font-britti-sans leading-relaxed mb-4">
                  Stay up to date with Tracer&apos;s latest developments through our bi-weekly roundups.
                </p>
                <p className="text-neutral-50 text-base sm:text-lg lg:text-xl font-normal font-britti-sans leading-relaxed">
                  Get insights into our product evolution, company milestones,
                  and behind-the-scenes updates from the team.
                </p>
              </div>

              {/* Stats or Additional Info */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00FF94] rounded-full"></div>
                  <span className="text-neutral-50 text-xs sm:text-sm font-chakra-petch uppercase tracking-wider">
                    PUBLISHED EVERY TWO WEEKS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00FF94] rounded-full"></div>
                  <span className="text-neutral-50 text-xs sm:text-sm font-chakra-petch uppercase tracking-wider">
                    COMPANY & PRODUCT UPDATES
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="w-full lg:w-1/2 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:max-w-[704px]">
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px] overflow-hidden bg-[#202020]">
                <Image
                  src="/images/blog/posts/T-Asset-Organic_Shape.png"
                  alt="Tracer bi-weekly roundups - organic DNA helix design"
                  fill
                  className="object-contain object-center rounded-lg"
                  style={{
                    objectPosition: 'center center'
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
