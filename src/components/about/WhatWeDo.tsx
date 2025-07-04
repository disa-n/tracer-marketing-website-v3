import Image from 'next/image'

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#1e1e1e] -mt-16 md:-mt-20 lg:-mt-24 xl:-mt-28 2xl:-mt-32">
      <div className="relative z-20 pt-56 pb-20 md:pt-56 md:pb-48 lg:pt-64 lg:pb-56 xl:pt-72 xl:pb-64 2xl:pt-96 2xl:pb-72">
        {/* Title and Description with alignment matching Why We Exist */}
        <div className="flex flex-col justify-center px-4 md:px-8 lg:px-12 lg:max-w-[1400px] lg:w-full">
          {/* Title */}
          <h2 className="text-[#FCFCFC] font-britti-sans font-medium text-3xl lg:text-5xl leading-tight lg:leading-[38px] tracking-tight lg:tracking-[-1.5px] mb-6 lg:mb-8">
            What We Do
          </h2>

          {/* Description */}
          <p className="font-britti-sans font-normal text-[#FCFCFC] text-sm md:text-base sm:text-lg leading-[1.5] max-w-[600px]">
            Tracer is an advanced observability platform for high-performance computing (HPC) systems in regulated industries. We help scientists and engineers to run, maintain, and optimise supercomputing software solutions.
          </p>
        </div>
      </div>

      {/* T-Asset-Edge Image - Right Edge */}
      <div className="absolute right-0 top-0 md:top-0 2xl:top-64 z-30">
        <div className="relative w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] xl:h-[500px] 2xl:h-[450px]">
          <Image
            src="/images/about-us/T-Asset-Edge.webp"
            alt="Tracer Edge Asset"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </section>
  )
}