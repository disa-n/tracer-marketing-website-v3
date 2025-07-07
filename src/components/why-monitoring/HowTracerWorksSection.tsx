import { GridLinesLight } from '@/components/ui/GridLines';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Image from 'next/image';
import Link from 'next/link';

export default function HowTracerWorksSection() {
  return (
    <section className="relative bg-[#FCFCFC] pt-20 pb-6 md:pt-36 md:pb-36">
      {/* Background GridLines */}
      <div className="absolute inset-0 z-0" style={{ top: "0.5px" }}>
        <GridLinesLight />
      </div>

      {/* Title Section - Full Width */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 mt-0">
        <div className="max-w-[1400px] w-full">
          {/* Section Heading - Chakra Petch */}
          <h2 className="font-chakra-petch text-[#202020] font-normal leading-[1.1] mb-12 tracking-tight
                         text-[40px] sm:text-[56px] md:text-[68px] lg:text-[82px] xl:text-[94px] 2xl:text-[100px] whitespace-nowrap">
            How Tracer Works
          </h2>
        </div>
      </div>

      {/* Main Content Layout - Image Left, Text Right */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-12">

        {/* Left Column - Image (hidden on mobile, shown on lg+) */}
        <div className="relative z-10 w-full lg:flex-1 flex justify-center lg:justify-start px-4 md:px-8 lg:px-12 hidden lg:flex">
          <Image
            src="/images/why-monitoring/T-Stack.webp"
            alt="How Tracer Works illustration"
            width={600}
            height={800}
            className="w-full max-w-[600px] object-contain"
            priority
          />
        </div>

        {/* Right Column - Content Blocks */}
        <div className="relative z-10 w-full lg:flex-1 px-4 md:px-8 lg:px-6 2xl:px-2">
          <div className="space-y-12">
            {/* Block 1 */}
            <div className="space-y-6">
              {/* Step Number and Title - aligned horizontally */}
              <div className="flex items-start gap-3">
                <div className="font-chakra-petch text-[#202020] font-normal leading-none tracking-tight pt-1
                                  text-[36px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px]
                                  w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px] 2xl:w-[110px] flex-shrink-0">
                  01
                </div>
                <div className="flex-1">
                  <h3 className="font-britti-sans text-[#202020] font-medium leading-[1.1] tracking-tight
                                   text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
                    Built For The Most Complex<br className="hidden lg:block" /> Computing Systems
                  </h3>

                  {/* Description - aligned with title */}
                  <div className="space-y-4 mt-6">
                    <p className="font-britti-sans text-[#888888] font-normal
                                    text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px]">
                      Tracer uses eBPF-powered OS-level extraction technologies to reach actionable insights other tools miss.
                    </p>
                    <p className="font-britti-sans text-[#888888] font-normal
                                    text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px]">
                      What others can&apos;t see, we extract, transform, and explain.
                    </p>
                  </div>

                  {/* CTA Button - aligned with title */}
                  <div className="pt-4">
                    <Link href="/technology">
                      <PrimaryButton
                        title="See our Technology"
                        className="w-full lg:w-[180px] bg-[#E8E8E8] text-[#202020] hover:bg-[#E8E8E8]/80 whitespace-nowrap"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="space-y-6 2xl:mt-32">
              {/* Step Number and Title - aligned horizontally */}
              <div className="flex items-start gap-3">
                <div className="font-chakra-petch text-[#202020] font-normal leading-none tracking-tight pt-1
                                  text-[36px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px]
                                  w-[60px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px] 2xl:w-[110px] flex-shrink-0">
                  02
                </div>
                <div className="flex-1">
                  <h3 className="font-britti-sans text-[#202020] font-medium leading-[1.1] tracking-tight
                                   text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
                    Move Fast Without Losing<br className="hidden lg:block" /> Control
                  </h3>

                  {/* Description - aligned with title */}
                  <div className="space-y-4 mt-6">
                    <p className="font-britti-sans text-[#888888] font-normal
                                    text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px]">
                      Tracer reveals what&apos;s happening in compute environments as they run, helping teams ship, scale, and debug with confidence.
                    </p>
                    <p className="font-britti-sans text-[#888888] font-normal
                                    text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px]">
                      No guesswork. No blind spots. Just real-time visibility when you need it most.
                    </p>
                  </div>

                  {/* CTA Button - aligned with title */}
                  <div className="pt-4">
                    <Link href="/demo">
                      <PrimaryButton
                        title="Get a Demo"
                        className="w-full lg:w-[180px] bg-[#E8E8E8] text-[#202020] hover:bg-[#E8E8E8]/80"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Image - shown at bottom on mobile, hidden on lg+ */}
      <div className="relative z-10 flex justify-center px-4 md:px-8 mt-12 lg:hidden">
        <Image
          src="/images/why-monitoring/T-Stack.webp"
          alt="How Tracer Works illustration"
          width={600}
          height={800}
          className="w-full max-w-[600px] object-contain"
          priority
        />
      </div>
    </section>
  );
}
