'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

function HeroSection() {
  // State for responsive behavior based on 50% screen width
  const [isMobileView, setIsMobileView] = useState(false)

  // Effect to handle window resize and determine if animations should be disabled
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const screenWidth = window.screen.width
      // Disable animations when window is 50% or less of screen width
      setIsMobileView(width <= screenWidth * 0.5)
    }

    // Set initial values
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation refs and controls for description only
  const descriptionRef = useRef(null)

  // Animation controls
  const descriptionControls = useAnimation()

  // State to track if animation has played
  const [descriptionAnimated, setDescriptionAnimated] = useState(false)

  // Detect when description comes into view
  const descriptionInView = useInView(descriptionRef, {
    amount: 0.3,
    margin: "0px 0px 0px 0px"
  })

  // Animation variants for text rising up (desktop only)
  const textVariants = {
    hidden: {
      y: isMobileView ? 0 : 60, // No slide animation in mobile
      opacity: isMobileView ? 1 : 0 // No fade-in animation in mobile
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobileView ? 0 : 0.8, // No animation duration in mobile
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  // Handle scroll-based animation - only play once, no reset
  useEffect(() => {
    if (descriptionInView && !descriptionAnimated) {
      descriptionControls.start("visible")
      setDescriptionAnimated(true)
    }
  }, [descriptionInView, descriptionAnimated, descriptionControls])

  return (
    <section className="relative w-full h-[80vh]">
      {/* Main heading */}
      <div
        className="absolute text-[#202020] font-britti-sans font-medium break-words px-4 sm:px-6 lg:px-4"
        style={{
          width: 'min(1255px, calc(100vw - 32px))',
          left: '16px',
          top: 'clamp(100px, 15vh, 150px)',
          fontSize: 'clamp(48px, 7vw, 88px)',
          lineHeight: 'clamp(52px, 7.5vw, 76px)',
          zIndex: 10,
          letterSpacing: 'clamp(-2px, -0.3vw, -4px)'
        }}
      >
        About Us
      </div>

      {/* Description text */}
      <motion.div
        ref={descriptionRef}
        animate={descriptionControls}
        variants={textVariants}
        initial="hidden"
        className="absolute flex flex-col justify-center text-[#202020] font-britti-sans font-normal break-words px-4 sm:px-6 lg:px-4"
        style={{
          width: 'min(642px, calc(100vw - 32px))',
          left: '16px',
          top: 'clamp(250px, 35vh, 320px)',
          fontSize: 'clamp(24px, 3.5vw, 35px)',
          lineHeight: 'clamp(28px, 4vw, 36px)',
          zIndex: 10,
          letterSpacing: 'clamp(-0.8px, -0.15vw, -1.5px)'
        }}
      >
        Tracer is an advanced observability platform for high-performance computing (HPC) systems in regulated industries. We help scientists and engineers to run, maintain, and optimise supercomputing software solutions.
      </motion.div>

      {/* Background image container */}
      <div
        className="absolute hidden sm:block overflow-hidden"
        style={{
          left: 'clamp(400px, 30vw, 600px)',
          top: 'clamp(-30px, -10vh, -80px)',
          width: 'calc(100vw - clamp(400px, 30vw, 600px))',
          height: 'calc(80vh + 95px)',
          zIndex: 5
        }}
      >
        <Image
          src="/About us/Tracer-brain.png"
          alt="Tracer Brain"
          width={13000}
          height={1825}
          style={{
            position: 'absolute',
            left: '0',
            top: 'clamp(15px, 1vh, 25px)',
            width: '6000px',
            height: 'auto',
            transform: 'scale(1.5)',
            transformOrigin: 'left top'
          }}
        />
      </div>
    </section>
  )
}

export default HeroSection
