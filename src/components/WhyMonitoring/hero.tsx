import { GridLinesLight } from '@/components/shared/GridLines';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#FCFCFC] min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
      <GridLinesLight />
      <div className="flex flex-col lg:flex-row">

        {/* Image Column - Appears first on mobile, right on desktop */}
        <div className="flex items-center justify-center mt-8 lg:mt-0 lg:flex-1 lg:justify-center lg:order-2 lg:items-start lg:pt-16">
          <div className="w-full max-w-xs lg:max-w-[600px] lg:min-w-[500px] xl:max-w-[800px] 2xl:max-w-[900px]">
            <div className="relative w-full aspect-square lg:aspect-[4/3] xl:aspect-[3/2] 2xl:aspect-[5/3]">
              <Image
                src="/images/why-monitoring/T-Space-Satellite.webp"
                alt="Monitoring illustration showing complex pipeline systems"
                fill
                className="object-contain lg:scale-[1.8] lg:translate-x-8 xl:scale-[3.2] xl:translate-x-16 2xl:scale-[4.0] 2xl:translate-x-4"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content Column - Appears second on mobile, left on desktop */}
        <div className="relative z-10 flex flex-col justify-center px-4 md:px-8 lg:px-12 pt-8 pb-20 lg:py-8 lg:pb-32 xl:justify-start xl:pt-35 xl:pb-40 2xl:justify-start 2xl:pt-48 2xl:pb-48 lg:max-w-[1400px] lg:w-full lg:order-1">

          {/* Product Label */}
          <p className='font-chakra-petch text-sm font-[400] uppercase text-[#202020] sm:text-base'>
            _TRACER INSIGHTS
          </p>

          {/* Main Heading */}
          <h1 className="mt-4 font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-[#202020] sm:text-[70px] 1100:text-[80px] xl:text-[92px] 1300:text-[104px] mb-6 lg:mb-8">
            Monitoring Matters<br />More Than Ever
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-britti-sans text-[#202020] leading-[1.4] max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]
                        text-[16px] sm:text-[18px] md:text-xl lg:text-xl xl:text-lg 2xl:text-xl">
            Pipelines are growing faster, more complex, and more opaque. Yet, most teams still rely on legacy tools, fragmented logs, and guesswork. Monitoring is no longer optional. It&apos;s how science and systems move forward with confidence.
          </p>

        </div>

      </div>

      {/* Bottom Rectangles - Only visible in non-stacked views */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-1/3 h-14 bg-[#202020]"></div>
      <div className="hidden lg:block absolute bottom-14 left-0 w-[27%] h-14 bg-[#202020]"></div>
    </section>
  );
}