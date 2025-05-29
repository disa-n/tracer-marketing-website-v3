'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

function TwoWorlds() {
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

  // Animation variants for title (fade-in + slide up)
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 60 // Start 60px below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  // Animation variants for image (slide up, no fade)
  const imageVariants = {
    hidden: {
      y: 100 // Start 100px below
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0, 0.38, 1]
      }
    }
  }

  // Animation variants for rectangle 1 (start slightly longer, shorten into position)
  const rectangle1Variants = {
    hidden: {
      width: 520 // Start slightly longer
    },
    visible: {
      width: 458, // Shrink to final size
      transition: {
        duration: 0.8,
        ease: [0.6, 0, 0.38, 1]
      }
    }
  }

  // Animation variants for rectangle 2 (start slightly longer, shorten into position)
  const rectangle2Variants = {
    hidden: {
      width: 600 // Start slightly longer
    },
    visible: {
      width: 529, // Shrink to final size
      transition: {
        duration: 0.8,
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
    if (imageInView) {
      imageControls.start("visible")
    } else {
      imageControls.start("hidden")
    }
  }, [imageInView, imageControls])

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
      className="relative w-full bg-[#FCFCFC] overflow-hidden"
      style={{
        height: 486, // End where bottom-left rectangle ends (445 + 41 = 486)
        marginTop: -55 // Move section up to align with end of moonshot section
      }}
    >
      {/* Background Image - Right Side */}
      <motion.div
        ref={imageRef}
        animate={imageControls}
        variants={imageVariants}
        initial="hidden"
        className="absolute overflow-hidden"
        style={{
          left: '8%',
          bottom: -120,
          width: '100%',
          height: 680,
          zIndex: 1
        }}
      >
        <Image
          src="/About us/tracer-ball.svg"
          alt="Tracer Ball"
          fill
          className="object-contain object-bottom"
        />
      </motion.div>

      {/* Main Title */}
      <motion.div
        ref={titleRef}
        animate={titleControls}
        variants={titleVariants}
        initial="hidden"
        className="absolute text-[#202020] font-britti-sans font-medium break-words"
        style={{
          width: 'min(597px, 46vw)', // Responsive width that shrinks with viewport
          maxWidth: '597px', // Original max width
          left: 12,
          top: 86,
          fontSize: 'clamp(30px, 4.2vw, 48px)', // Responsive font size: min 24px, max 40px
          lineHeight: 'clamp(22px, 3vw, 38px)', // Responsive line height: min 22px, max 38px
          letterSpacing: 'clamp(-2px, -0.3vw, -4px)'
        }}
      >
        The Best of Two Worlds
      </motion.div>

      {/* Mini-heading - Right half only: 001, tracer, FOUNDERs */}
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

      {/* Description Text - Responsive */}
      <div
        className="absolute flex flex-col text-[#202020] font-britti-sans font-normal break-words"
        style={{
          width: '46%', // Responsive width to stay in left half
          maxWidth: '669px', // Original max width
          left: 16,
          top: 170,
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
        className="absolute bg-[#202020] overflow-hidden"
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
        className="absolute bg-[#202020] overflow-hidden"
        style={{
          height: 79,
          left: 0,
          top: 446, // Position below the first rectangle (405 + 41 = 446)
          zIndex:12
        }}
      />
<div
        className="absolute bg-[#404040]"
        style={{
          width: 1,
          height: '20%',
          left: 250,
          top: 405,
          zIndex: 13
        }}
      />
      {/* Gridlines */}
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
          width: '50%', // From center to right edge
          height: 1,
          backgroundColor: '#E8E8E8',
          left: '50%',
          top: 33.5, // Vertically centered between top and mini-heading
          zIndex: 2
        }}
      />
    </section>
  )
}

export default TwoWorlds
