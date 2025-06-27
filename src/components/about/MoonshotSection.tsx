'use client'

import React, { useRef, useEffect, useState, useMemo } from 'react'
import { motion, useAnimation, useInView, type Variants } from 'framer-motion'
import GridLines from '@/components/shared/GridLines'

export default function MoonshotSection() {
  // State for responsive behavior - disable animations on mobile
  const [isMobileView, setIsMobileView] = useState(false)

  // Effect to handle window resize and determine if animations should be disabled
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      // Disable animations on mobile view (768px and below)
      setIsMobileView(width <= 768)
    }

    // Set initial values
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const moonshotRef = useRef(null)

  // Detect when moonshot section comes into view
  const moonshotInView = useInView(moonshotRef, {
    amount: 0.2, // Trigger when 20% visible
    margin: "0px 0px 0px 0px"
  })

  // State to track if animations have played
  const [textAnimated, setTextAnimated] = useState(false)

  const textControls = useAnimation()

  // Animation variants for text elements (slide up from below, staggered after background) - desktop only
  const textVariants: Variants = useMemo(() => ({
    hidden: {
      y: isMobileView ? 0 : 60 // No slide animation in mobile
    },
    visible: {
      y: 0,
      transition: {
        duration: isMobileView ? 0 : 0.8, // No animation duration in mobile
        ease: "easeInOut",
        delay: isMobileView ? 0 : 0.4 // No delay in mobile
      }
    }
  }), [isMobileView])

  // Handle scroll-based animation - only play once, no reset
  useEffect(() => {
    if (moonshotInView && !textAnimated) {
      textControls.start("visible")
      setTextAnimated(true)
    }
    // No reset behavior - animations stay visible once triggered
  }, [moonshotInView, textAnimated, textControls, setTextAnimated])

  return (
    <>
      {/* Moonshot Section */}
      <div
        ref={moonshotRef}
        className="relative w-screen bg-[#202020] overflow-visible pb-12 lg:pb-26 -mt-10 -mb-2 -mx-4 lg:-mx-0 px-4 lg:px-16 z-10"
        style={{
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          paddingLeft: 'calc(50vw - 50% + 16px)',
          paddingRight: 'calc(50vw - 50% + 16px)'
        }}
      >
        {/* Background GridLines */}
        <GridLines />
        {/* Moonshot Title */}
        <motion.div
          className="text-[#FCFCFC] font-britti-sans font-normal text-center pt-12 lg:pt-24 text-3xl lg:text-5xl max-[1064px]:lg:text-4xl xl:text-5xl leading-tight tracking-tight relative z-20"
          animate={textControls}
          variants={textVariants}
          initial="hidden"
        >
          Our Moonshot
        </motion.div>

        {/* Moonshot Description */}
        <motion.div
          className="flex flex-col justify-center text-[#FCFCFC] font-britti-sans font-normal text-center mt-4 lg:mt-12 px-4 lg:px-0 leading-relaxed max-w-4xl mx-auto relative z-20"
          animate={textControls}
          variants={{
            hidden: {
              y: isMobileView ? 0 : 400 // No slide animation in mobile
            },
            visible: {
              y: 0,
              transition: {
                duration: isMobileView ? 0 : 1.2, // No animation duration in mobile
                ease: "easeInOut",
                delay: isMobileView ? 0 : 0.6 // No delay in mobile
              }
            }
          }}
          initial="hidden"
        >
          Just as cloud computing revolutionised web and mobile applications over the past 10 years, we believe it&apos;s time for scientists and engineers to experience a similar transformation and ask:

          <p className="mt-5 font-semibold">
            &ldquo;What can I do with all this immense power?&rdquo;
          </p>
        </motion.div>
      </div>
    </>
  )
}
