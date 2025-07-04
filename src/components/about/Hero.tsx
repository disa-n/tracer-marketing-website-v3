'use client'

const AboutHero = () => {
  return (
    <div className='overflow-hidden bg-main-background'>
      <div className='relative mx-auto grid w-full grid-cols-1 grid-rows-[290px_auto] 1000:grid-cols-[0.52fr_1fr] 1000:grid-rows-[380px_187px_auto]'>
        <img
          src="/images/about-us/T-Asset-Spacecraft.webp"
          alt="Tracer Spacecraft - Advanced space technology visualization"
          width={800}
          height={567}
          className='absolute left-0 top-0 z-[50] aspect-[775/567] w-full max-w-[480px] max-sm:hidden sm:max-w-[480px] 1000:max-w-[775px] 1000:-translate-x-20'
        />
        <img
          src="/images/about-us/T-Asset-Spacecraft.webp"
          alt="Tracer Spacecraft - Advanced space technology visualization"
          width={800}
          height={567}
          className='absolute left-0 top-0 z-[50] aspect-[775/567] w-full min-w-[480px] max-w-[480px] -translate-x-20 400:-translate-x-8 500:max-w-[480px] sm:hidden'
        />


        <div className="absolute right-0 top-[230px] z-[10] h-[62px] w-[80px] bg-transparent 1000:hidden">
        </div>
        <div className='col-span-2 hidden bg-transparent 1000:flex' />
        <div className='bg-transparent' />
        <div className='z-[70] col-span-1 row-span-2 relative px-4 pb-10 pt-[32px] text-white 800:pb-36 800:pl-[59px] 800:pt-[69px] lg:pb-40 xl:pb-44 2xl:pb-48 flex items-center justify-start'>
          {/* Static black background rectangle */}
          <div className='absolute inset-0 z-[20] bg-transparent' />
          {/* Static text content */}
          <div className='relative z-[80] -mt-4 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-28'>
            <p className='font-chakra-petch text-sm font-[400] uppercase text-[#FCFCFC] sm:text-base'>
              _TRACER MISSION
            </p>
            <h1 className='mt-4 font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-[#FCFCFC] sm:text-[70px] 1100:text-[80px] 1300:text-[104px]'>
              Our Moonshot
            </h1>
            <p className='mt-6 max-w-[630px] font-britti-sans text-sm font-[400] text-[#FCFCFC] md:text-base sm:mt-4 sm:text-lg md:mt-8'>
              Just as cloud computing revolutionised web and mobile applications over the past 10 years, we believe it&apos;s time for scientists and engineers to experience a similar transformation and ask:<span className='hidden sm:inline'><em> &quot;what can I do with all this immense power?&quot;</em></span>
            </p>
            <p className='mt-4 max-w-[630px] font-britti-sans text-sm font-[400] text-[#FCFCFC] md:text-base sm:hidden sm:text-lg'>
              <em>&quot;What can I do with all this immense power?&quot;</em>
            </p>
          </div>
        </div>
        <div className='z-[70] bg-transparent' />
      </div>
    </div>
  )
}

export default AboutHero