'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, Variants, useInView, type Transition } from 'framer-motion'

// Animation configuration
const animationConfig: Transition = { delay: 0.1, duration: 2.0, ease: "easeInOut" }

const Hero2 = () => {
  const ref = useRef(null)
  const [imageAnimated, setImageAnimated] = useState(false)

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

  // Image animation variant - slides in from the left (no fade) - disabled in mobile view
  const imageVariant: Variants = {
    hidden: { x: isMobileView ? 0 : -300 },
    visible: { x: 0, transition: isMobileView ? { duration: 0 } : animationConfig },
  }

  // Rectangle animation variant - starts larger and shrinks into place on page load - disabled in mobile view
  const rectangleVariant: Variants = {
    hidden: {
      scale: isMobileView ? 1 : 1.1,
      transformOrigin: "bottom center"
    },
    visible: {
      scale: 1,
      transformOrigin: "bottom center",
      transition: isMobileView ? { duration: 0 } : animationConfig
    },
  }

  // Rectangle animation triggers once on page load
  const isInView = useInView(ref, {
    once: true, // Only animate once on page load
    amount: 0.3 // Trigger when 30% of element is visible
  })



  // Image animation only plays once
  useEffect(() => {
    if (!imageAnimated) {
      setImageAnimated(true)
    }
  }, [imageAnimated])

  return (
    <div className='relative bg-white pb-4 md:pb-8' ref={ref}>
      <div className='relative mx-auto grid w-full grid-cols-1 grid-rows-[290px_auto] 1000:grid-cols-[0.52fr_1fr] 1000:grid-rows-[380px_187px_auto]'>
        <motion.img
          src="/technology/T-Asset-Satellite.webp"
          alt="Scientific observability technology"
          width={800}
          height={567}
          className='absolute left-0 top-0 w-full max-w-[480px] max-sm:hidden sm:max-w-[480px] 1000:max-w-[775px] h-[600px] object-cover z-0'
          variants={imageVariant}
          initial="hidden"
          animate={imageAnimated ? 'visible' : 'hidden'}
        />
        <motion.img
          src="/technology/T-Asset-Satellite.webp"
          alt="Scientific observability technology"
          width={800}
          height={567}
          className='absolute left-0 top-0 w-full min-w-[400px] max-w-[400px] -translate-x-14 400:translate-x-0 500:max-w-[400px] sm:hidden h-[450px] object-cover z-0'
          variants={imageVariant}
          initial="hidden"
          animate={imageAnimated ? 'visible' : 'hidden'}
        />
        <div className='absolute right-0 top-[230px] z-[50] h-[62px] w-[80px] bg-white 1000:hidden'>

        </div>
        <div className='col-span-2 hidden bg-main-background 1000:flex' />
        <div className='bg-main-background' />
        <div className='z-[10] col-span-1 row-span-2 relative px-4 pb-12 pt-[32px] text-black 800:pb-[66px] 800:pl-[59px] 800:pt-[69px]'>
          {/* Animated white background rectangle */}
          <motion.div
            className='absolute inset-0 bg-white'
            variants={rectangleVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />
          {/* Static text content */}
          <div className='relative z-10'>
            <p className='font-chakra-petch text-sm font-[400] uppercase text-c-black sm:text-base'>
              _TRACER TECHNOLOGY
            </p>
            <h1 className='mt-4 font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-c-black sm:text-[70px] 1100:text-[80px] 1300:text-[104px]'>
              Powering Scientific<br />Breakthroughs
            </h1>
            <p className='mt-4 max-w-[630px] font-britti-sans text-sm font-[400] text-c-black sm:text-base md:mt-8'>
              Tracer uses cutting-edge technology to bring observability to complex scientific pipelines. By extracting real-time system-level data, Tracer turns what was initially a black box into clear, actionable insights.
            </p>
          </div>
        </div>
        <div className='z-[10] bg-white' />
      </div>
      {/* Dark rectangle at bottom of section margin space - hidden on mobile/stacked view */}
      <div className='absolute bottom-0 left-0 w-1/4 h-16 bg-[#202020] z-20 hidden lg:block' />
    </div>
  )
}

export default Hero2
