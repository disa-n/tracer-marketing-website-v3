'use client'

import React, { useRef } from 'react'

function LetsConnect() {
  const titleRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative w-screen bg-[#202020] overflow-hidden -mx-[50vw] ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] px-[calc(50vw-50%+16px)] z-10">
      {/* Content Container - Match Why Monitoring hero structure */}
      <div className="relative z-10 flex flex-col justify-center px-4 md:px-8 lg:px-12 pt-8 pb-8 lg:py-20 lg:max-w-[1400px] lg:w-full">
        {/* Title */}
        <h1
          ref={titleRef}
          className="mt-4 font-britti-sans font-normal text-white text-[48px] sm:text-[70px] 1100:text-[80px] xl:text-[92px] 1300:text-[104px] leading-[0.9] tracking-tighter mb-6 lg:mb-8"
        >
          Let&apos;s Connect!
        </h1>

        {/* Description - Positioned to align with title in stacked views */}
        <div
          className="text-[#FCFCFC] font-britti-sans font-normal break-words mt-1"
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            lineHeight: 'clamp(18px, 3vw, 22px)'
          }}
        >
          <div className="lg:ml-[35%] xl:ml-[40%] 2xl:ml-[32%] lg:mt-8">
            Ready to help shape the future of high-performance computing?
            <br />
            <br className="lg:hidden" />
            We want to hear from you!
            <br />
            <br />
            Support us in our mission to optimise computational pipelines and usher in a new era of scientific discovery.
            <br />
            <br />
            Contact us at {' '}
            <button
              className="underline hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open('mailto:hello@tracer.cloud', '_blank')
                }
              }}
              type="button"
            >
              hello@tracer.cloud
            </button>
          </div>
        </div>

        {/* Spacer to ensure proper section height - shortened for non-stacked views */}
        <div className="h-64 lg:h-20 xl:h-24"></div>
      </div>
    </section>
  )
}

export default LetsConnect
