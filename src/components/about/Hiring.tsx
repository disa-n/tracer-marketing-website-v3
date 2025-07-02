'use client'

import { GridLinesLight } from '@/components/shared/GridLines'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function Hiring() {
  // State for animation control based on 50% screen width
  const [isMobileView, setIsMobileView] = useState(false)

  // Animation refs and controls for image
  const imageRef = useRef(null)
  const imageControls = useAnimation()

  // Detect when image comes into view
  const imageInView = useInView(imageRef, {
    amount: 0.01,
    margin: "0px 0px -0px 0px"
  })

  // Handle image animation
  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible")
    } else {
      imageControls.start("hidden")
    }
  }, [imageInView, imageControls])

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        // Disable animations on mobile devices (width <= 768px) or when window is 50% or less of screen width
        const isMobileDevice = width <= 768;
        const isNarrowWindow = width <= (window.screen.width * 0.5);
        setIsMobileView(isMobileDevice || isNarrowWindow)
      }
    }

    // Check initial screen size
    checkScreenSize()

    // Add event listener for resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkScreenSize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkScreenSize)
      }
    }
  }, [])



  return (
    <section className="relative overflow-hidden bg-[#FCFCFC] min-h-[600px] lg:min-h-[650px]">
      {/* Background Gridlines */}
      <GridLinesLight />

      {/* Text Content - Always above image to prevent overlap */}
      <div className="relative z-10 py-16 md:pb-0 lg:py-28">
        <div className="w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] mx-auto px-4 md:px-8 lg:px-12 xl:px-8">
          <div className="md:max-w-[550px] lg:ml-[50%] lg:max-w-[600px] xl:ml-[50%] xl:max-w-[600px] 2xl:ml-[40%] 2xl:max-w-[800px]">
            {/* Section Title */}
            <h2 className="text-[#202020] font-britti-sans font-medium text-[32px] leading-[30px] md:text-[40px] md:leading-[36px] lg:text-[44px] lg:leading-[40px] xl:text-[48px] xl:leading-[44px] tracking-tight mb-6 text-left lg:text-left xl:text-left">
              Join Our Growing Team
            </h2>

            {/* Description */}
            <p className="text-[#202020] font-britti-sans font-normal text-[16px] leading-[1.5] md:text-[18px] mb-4 text-left lg:text-left xl:text-left">
              Ready to help shape the future of high-performance computing? We are hiring ambitious and hard-working individuals to fast-track our growth.
            </p>
            <p className="text-[#202020] font-britti-sans font-normal text-[16px] leading-[1.5] md:text-[18px] mb-4 text-left lg:text-left xl:text-left">
              Join our team in London and support our mission to rethink scientific computing and power the next generation of breakthroughs.
            </p>

            {/* Contact Information */}
            <p className="text-[#202020] font-britti-sans font-normal text-[16px] leading-[1.5] md:text-[18px] mb-4 text-left lg:text-left xl:text-left">
              Apply now for a position or contact us at{' '}
              <a
                href="mailto:careers@tracer.cloud"
                className="text-[#202020] hover:text-[#404040] transition-colors duration-200 underline"
              >
                careers@tracer.cloud
              </a>
              .
            </p>

            {/* CTA Button */}
            <div className="flex lg:justify-start xl:justify-start">
              <a
                href="https://jobs.ashbyhq.com/tracer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E8E8E8] hover:bg-[#D8D8D8] transition-colors duration-200 px-8 py-4 text-[#202020] font-britti-sans font-normal text-[16px] leading-[17px] whitespace-nowrap mb-8 md:mb-4 lg:mb-8 xl:mb-0"
              >
                View Open Roles
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Stacked Image - Mobile to md only - Completely outside all containers */}
      <div className="lg:hidden relative z-5 -mt-28 md:-mt-20 -mx-32">
        <div className="relative w-[calc(100%+16rem)] h-[550px] md:h-[700px] -ml-65 md:-ml-100">
          <Image
            src="/images/about-us/tracer-rocket.svg"
            alt="Tracer Rocket"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Rocket Image - Positioned after text to prevent overlap */}
      <motion.div
        className="absolute hidden lg:block left-[-200px] lg:left-[-280px] xl:left-[-280px] xl:bottom-[-50px] 2xl:left-[-150px] 2xl:bottom-[-30px] bottom-0 z-0"
        style={{
          width: 1314,
          height: 740,
        }}
        animate={imageControls}
        initial="hidden"
        variants={{
          hidden: {
            x: isMobileView ? 0 : -250
          },
          visible: {
            x: 0,
            transition: {
              duration: isMobileView ? 0 : 1.4,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }
        }}
      >
        <Image
          src="/images/about-us/tracer-rocket.svg"
          alt="Tracer Rocket"
          width={1314}
          height={740}
          className="object-contain"
        />
      </motion.div>
    </section>
  )
}

export default Hiring
