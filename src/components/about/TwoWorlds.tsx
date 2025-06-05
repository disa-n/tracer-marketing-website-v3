'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

function TwoWorlds() {
  // State for responsive behavior based on 50% screen width
  const [isMobileView, setIsMobileView] = useState(false)

  // Effect to handle window resize and determine if animations should be disabled
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      // Disable animations on mobile devices (width <= 768px) or when window is 50% or less of screen width
      const isMobileDevice = width <= 768;
      const isNarrowWindow = width <= (window.screen.width * 0.5);
      setIsMobileView(isMobileDevice || isNarrowWindow)
    }

    // Set initial values
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Refs for animation triggers
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const rectanglesRef = useRef<HTMLDivElement>(null)

  // Animation controls
  const titleControls = useAnimation()
  const imageControls = useAnimation()
  const rectanglesControls = useAnimation()

  // Detect when elements come into view
  const titleInView = useInView(titleRef, {
    amount: 0.1, // Trigger when 10% visible
    margin: "0px 0px 0px 0px"
  })

  const imageInView = useInView(imageRef, {
    amount: 0.1, // Trigger when 10% visible
    margin: "0px 0px 0px 0px"
  })

  const rectanglesInView = useInView(rectanglesRef, {
    amount: 0.1, // Trigger when 10% visible
    margin: "0px 0px 0px 0px"
  })

  // Animation variants for title (fade-in + slide up) - desktop only
  const titleVariants = {
    hidden: {
      opacity: isMobileView ? 1 : 0, // No fade-in animation in mobile
      y: isMobileView ? 0 : 60 // No slide animation in mobile
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobileView ? 0 : 0.8, // No animation duration in mobile
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  // Animation variants for image (slide up, no fade) - desktop only
  const imageVariants = {
    hidden: {
      y: isMobileView ? 0 : 100, // No slide animation in mobile
      opacity: isMobileView ? 1 : 1 // Always visible on mobile
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobileView ? 0 : 0.8, // No animation duration in mobile
        ease: [0.6, 0, 0.38, 1]
      }
    }
  }

  // Animation variants for rectangle 1 (start slightly longer, shorten into position) - desktop only
  const rectangle1Variants = {
    hidden: {
      width: isMobileView ? 458 : 520 // Start at final size in mobile
    },
    visible: {
      width: 458, // Shrink to final size
      transition: {
        duration: isMobileView ? 0 : 0.8, // No animation duration in mobile
        ease: [0.6, 0, 0.38, 1]
      }
    }
  }

  // Animation variants for rectangle 2 (start slightly longer, shorten into position) - desktop only
  const rectangle2Variants = {
    hidden: {
      width: isMobileView ? 529 : 600 // Start at final size in mobile
    },
    visible: {
      width: 529, // Shrink to final size
      transition: {
        duration: isMobileView ? 0 : 0.8, // No animation duration in mobile
        ease: [0.6, 0, 0.38, 1]
      }
    }
  }

  // Handle scroll-based animation with reset when out of view
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible")
    } else {
      titleControls.start("hidden")
    }
  }, [titleInView, titleControls])

  useEffect(() => {
    // Only animate on desktop (mobile uses static positioning)
    if (!isMobileView) {
      if (imageInView) {
        imageControls.start("visible")
      } else {
        imageControls.start("hidden")
      }
    }
  }, [imageInView, imageControls, isMobileView])

  useEffect(() => {
    console.log('Rectangle animation state changed:', rectanglesInView)
    if (rectanglesInView) {
      console.log('Starting visible animation')
      rectanglesControls.start("visible")
    } else {
      console.log('Starting hidden animation')
      rectanglesControls.start("hidden")
    }
  }, [rectanglesInView, rectanglesControls])

  return (
    <section
      className={`relative w-full bg-[#FCFCFC] z-20 ${
        isMobileView ? 'overflow-visible' : 'overflow-hidden'
      } h-[600px] sm:h-[550px] md:h-[500px] lg:h-[486px] xl:h-[486px] 2xl:h-[486px]`}
      style={{
        marginTop: -55 // Move section up to align with end of moonshot section
      }}
    >
      {/* Background Image - Conditional rendering for mobile vs desktop */}
      {isMobileView ? (
        // Mobile: Simple positioned image at bottom, moved up slightly
        <div
          className="absolute left-0 w-full z-[1]"
          style={{
            bottom: '-200px', // Moved up from -300px to -200px so more of the image is visible
            height: '400px'
          }}
        >
          <Image
            src="/About us/tracer-ball.svg"
            alt="Tracer Ball"
            fill
            className="object-contain object-top"
          />
        </div>
      ) : (
        // Desktop: Animated image on right side
        <motion.div
          ref={imageRef}
          animate={imageControls}
          variants={imageVariants}
          initial="hidden"
          className="absolute overflow-hidden w-full z-[5]
                     left-[35%] sm:left-[30%] md:left-[28%] lg:left-[25%] xl:left-[30%] 2xl:left-[35%]
                     -bottom-[140px] sm:-bottom-[160px] md:-bottom-[240px] lg:-bottom-[340px] xl:-bottom-[420px] 2xl:-bottom-[460px]
                     h-[400px] sm:h-[450px] md:h-[500px] lg:h-[750px] xl:h-[800px] 2xl:h-[900px]"
        >
          <Image
            src="/About us/tracer-ball.svg"
            alt="Tracer Ball"
            fill
            className="object-contain object-bottom"
          />
        </motion.div>
      )}

      {/* Main Title */}
      <motion.div
        ref={titleRef}
        animate={titleControls}
        variants={titleVariants}
        initial="hidden"
        className="absolute text-[#202020] font-britti-sans font-medium break-words"
        style={{
          width: isMobileView ? '90%' : 'min(597px, 46vw)', // Full width on mobile
          maxWidth: isMobileView ? 'none' : '597px', // No max width on mobile
          left: isMobileView ? '5%' : 12, // Centered on mobile
          top: isMobileView ? 40 : 86, // Higher on mobile to make room for content
          fontSize: 'clamp(30px, 4.2vw, 48px)', // Responsive font size: min 24px, max 40px
          lineHeight: 'clamp(22px, 3vw, 38px)', // Responsive line height: min 22px, max 38px
          letterSpacing: 'clamp(-2px, -0.3vw, -4px)'
        }}
      >
        The Best of Two Worlds
      </motion.div>

      {/* Mini-heading - Right half only: 001, tracer, FOUNDERs - Hidden on mobile */}
      {!isMobileView && (
        <div
          className="absolute"
          style={{
            left: '50%',
            top: -114,
            width: '50%',
            paddingLeft: '1%',
            paddingRight: '1%',
          }}
        >
          <div
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div style={{
              color: '#202020',
              fontSize: 14,
              fontFamily: 'Chakra Petch',
              fontWeight: '400',
              textTransform: 'uppercase',
              lineHeight: 19,
              wordWrap: 'break-word',
            }}>
              001
            </div>

            {/* tracer + FOUNDERS grouped */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '100px', // tighter than default
            }}>
              <div style={{
                color: '#202020',
                fontSize: 14,
                fontFamily: 'Chakra Petch',
                fontWeight: '400',
                textTransform: 'uppercase',
                lineHeight: 19,
                wordWrap: 'break-word',
              }}>
                tracer
              </div>
              <div style={{
                color: '#202020',
                fontSize: 14,
                fontFamily: 'Chakra Petch',
                fontWeight: '400',
                textTransform: 'uppercase',
                lineHeight: 19,
                wordWrap: 'break-word',
              }}>
                FOUNDERS
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Description Text - Responsive */}
      <div
        className="absolute flex flex-col text-[#202020] font-britti-sans font-normal break-words"
        style={{
          width: isMobileView ? '90%' : '46%', // Full width on mobile, left half on desktop
          maxWidth: isMobileView ? 'none' : '669px', // No max width on mobile
          left: isMobileView ? '5%' : 16, // Centered on mobile, left aligned on desktop
          top: isMobileView ? 120 : 170, // Adjusted for mobile title position
          fontSize: 'clamp(14px, 1.2vw, 16px)', // Responsive, targeting moonshot size
          lineHeight: 'clamp(15px, 1.3vw, 17px)' // Responsive, targeting moonshot line height
        }}
      >
       <p className="mb-4">
    Tracer was founded in 2023 by Vincent Hus and Laura Bogaert, who set out to change the way scientists understand and manage their computational workloads.
  </p>
  <p className="mb-4">
    Vincent, an engineer working at the intersection of software and biomechanics, kept running into infrastructure issues that slowed his work. Laura, advising leading life sciences organisations at McKinsey, saw those same slowdowns across the industry.
  </p>
  <p className="mb-4">
    Driven by their shared frustration, they joined forces to build the world’s first verticalised observability platform, purpose-built for scientific computing.
  </p>
      </div>

      {/* Decorative Rectangle 1 - Shorter rectangle on top */}
      <motion.div
        ref={rectanglesRef}
        animate={rectanglesControls}
        variants={rectangle1Variants}
        initial="hidden"
        className="absolute bg-[#202020] overflow-hidden hidden lg:block"
        style={{
          height: 41,
          left: 0,
          top: 405,
          zIndex:12
        }}
      />

      {/* Decorative Rectangle 2 - Longer rectangle below */}
      <motion.div
        animate={rectanglesControls}
        variants={rectangle2Variants}
        initial="hidden"
        className="absolute bg-[#202020] overflow-hidden hidden lg:block"
        style={{
          height: 79,
          left: 0,
          top: 446, // Position below the first rectangle (405 + 41 = 446)
          zIndex:12
        }}
      />
<div
        className="absolute bg-[#404040] hidden lg:block"
        style={{
          width: 1,
          height: '20%',
          left: 250,
          top: 405,
          zIndex: 13
        }}
      />
      {/* Gridlines - Hidden on mobile */}
      {!isMobileView && (
        <>
          {/* Top Horizontal Gridline */}
          <div
            className="absolute"
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#E8E8E8',
              left: 0,
              top: 0,
              zIndex: 2
            }}
          />

          {/* Left Vertical Gridline */}
          <div
            className="absolute"
            style={{
              width: 1,
              height: '100%',
              backgroundColor: '#E8E8E8',
              left: 0,
              top: 0,
              zIndex: 2
            }}
          />

          {/* Center Vertical Gridline */}
          <div
            className="absolute"
            style={{
              width: 1,
              height: '100%',
              backgroundColor: '#E8E8E8',
              left: '50%',
              top: 0,
              transform: 'translateX(-1px)', // Center the 2px line
              zIndex: 2
            }}
          />

          {/* Horizontal Gridline under mini-heading */}
          <div
            className="absolute"
            style={{
              width: '75%', // Extended from center to 75% of the way across
              height: 1,
              backgroundColor: '#E8E8E8',
              left: '50%',
              top: 33.5, // Vertically centered between top and mini-heading
              zIndex: 2
            }}
          />
        </>
      )}
    </section>
  )
}

export default TwoWorlds
