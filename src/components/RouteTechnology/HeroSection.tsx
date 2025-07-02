import { GridLinesLight } from '@/components/shared/GridLines'
import StyledLayoutWrapper from '@/components/shared/StyledLayoutWrapper'
import Image from 'next/image'
import './HeroSection.css'

function HeroSection() {
  const title = (
    <>
      Powering Scientific Breakthroughs
    </>
  )

  const subtitle = "Tracer uses cutting-edge technology to bring observability to complex scientific pipelines. By extracting real-time system-level data, Tracer turns what was initially a black box into clear, actionable insights."

  return (
    <section className="relative bg-[#FCFCFC] min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
      <GridLinesLight />
      <div className="flex flex-col lg:flex-row">

        {/* Image Column - Appears first on mobile, right on desktop */}
        <div className="flex items-center justify-center mt-8 lg:mt-0 lg:flex-1 lg:justify-center lg:order-2">
          <div className="w-full max-w-xs lg:max-w-[600px] lg:min-w-[500px] xl:max-w-[800px] 2xl:max-w-[900px]">
            <div className="relative w-full aspect-square lg:aspect-[4/3] xl:aspect-[3/2] 2xl:aspect-[5/3]">
              <Image
                src="/images/technology/T-Asset-Satellite.webp"
                alt="Tracer Technology"
                fill
                className="object-contain lg:scale-[1.8] lg:translate-x-16 xl:scale-[3.2] xl:translate-x-24 2xl:scale-[4.0] 2xl:translate-x-32"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content Column - Appears second on mobile, left on desktop */}
        <div className="relative z-10 flex flex-col justify-center pt-8 pb-20 lg:py-8 lg:pb-32 xl:justify-start xl:pt-35 xl:pb-40 2xl:justify-start 2xl:pt-48 2xl:pb-48 lg:max-w-[1400px] lg:w-full lg:order-1">
          <StyledLayoutWrapper>

          {/* Product Label */}
          <p className='font-chakra-petch text-sm font-[400] uppercase text-[#202020] sm:text-base'>
            _TRACER TECH
          </p>

          {/* Main Heading */}
          <h1 className="mt-4 font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-[#202020] sm:text-[70px] 1100:text-[80px] 1300:text-[104px] mb-6 lg:mb-8">
            {title}
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-britti-sans text-[#202020] leading-[1.4] max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]
                        text-[16px] sm:text-[18px] md:text-xl lg:text-xl xl:text-lg 2xl:text-xl mb-4 lg:mb-8">
            {subtitle}
          </p>

          </StyledLayoutWrapper>
        </div>

      </div>

      {/* Bottom rectangle to eliminate white strip - matches Layer component width */}
      <div className="absolute bottom-0 left-0 w-[80%] md:w-[250px] lg:h-20 xl:w-[309px] h-10 bg-[#202020]"></div>
    </section>
  )
}

export default HeroSection
