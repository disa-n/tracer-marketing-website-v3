'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, Variants, useInView, type Transition } from 'framer-motion'

// Animation configuration
const animationConfig: Transition = { delay: 0.1, duration: 2.0, ease: "easeInOut" }

interface ReusablePageHeroProps {
  title: string
  subtitle: string
  productLabel: string
  imageSrc: string
  imageAlt: string
  variant?: 'default' | 'mirrored' | 'flipped'
}

const ReusablePageHero = ({
  title,
  subtitle,
  productLabel,
  imageSrc,
  imageAlt,
  variant = 'default'
}: ReusablePageHeroProps) => {
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
    hidden: { x: isMobileView ? 0 : (variant === 'mirrored' ? 300 : -300) },
    visible: { x: 0, transition: isMobileView ? { duration: 0 } : animationConfig },
  }

  // Rectangle animation variant - starts larger and shrinks into place - disabled in mobile view
  const rectangleVariant: Variants = {
    hidden: { scale: isMobileView ? 1 : 1.15 },
    visible: { scale: 1, transition: isMobileView ? { duration: 0 } : animationConfig },
  }

  // Rectangle animation resets on scroll
  const isInView = useInView(ref, {
    once: false, // Allow animation to reset when out of view
    amount: 0.3 // Trigger when 30% of element is visible
  })

  // Image animation only plays once
  useEffect(() => {
    if (!imageAnimated) {
      setImageAnimated(true)
    }
  }, [imageAnimated])

  return (
    <div className='overflow-hidden bg-white' ref={ref}>
      <div className={`relative mx-auto grid w-full ${variant === 'mirrored' ? 'grid-cols-1 grid-rows-[290px_auto] 1000:grid-cols-[1fr_0.52fr] 1000:grid-rows-[380px_187px_auto]' : 'grid-cols-1 grid-rows-[290px_auto] 1000:grid-cols-[0.52fr_1fr] 1000:grid-rows-[380px_187px_auto]'}`}>
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={567}
          className={`absolute ${variant === 'mirrored' ? 'right-0 scale-x-[-1]' : 'left-0'} top-0 aspect-[775/567] w-full max-w-[480px] max-sm:hidden sm:max-w-[480px] 1000:max-w-[775px] ${imageSrc.includes('Tracer-brain') ? 'lg:scale-[1.15] lg:translate-x-4 lg:translate-y-3 xl:scale-[1.25] xl:translate-x-6 xl:translate-y-4 2xl:scale-[1.35] 2xl:translate-x-8 2xl:translate-y-6' : ''}`}
          variants={imageVariant}
          initial="hidden"
          animate={imageAnimated ? 'visible' : 'hidden'}
        />
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={567}
          className={`absolute ${variant === 'mirrored' ? 'right-0 translate-x-14 400:translate-x-0 scale-x-[-1]' : 'left-0 -translate-x-14 400:translate-x-0'} top-0 aspect-[775/567] w-full min-w-[400px] max-w-[400px] 500:max-w-[400px] sm:hidden ${imageSrc.includes('Tracer-brain') ? 'scale-[1.2]' : ''}`}
          variants={imageVariant}
          initial="hidden"
          animate={imageAnimated ? 'visible' : 'hidden'}
        />

        <div className={`absolute ${variant === 'mirrored' ? 'left-0' : 'right-0'} top-[230px] z-[50] h-[62px] w-[80px] bg-white 1000:hidden`}>
        </div>
        <div className='col-span-2 hidden bg-main-background 1000:flex' />
        {variant === 'mirrored' ? (
          <>
            <div className='bg-white' />
            <div className='bg-main-background' />
            <div className='z-[10] col-span-1 row-span-2 relative px-4 pb-12 pt-[32px] text-black 800:pb-[66px] 800:pr-[59px] 800:pt-[69px]'>
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
                  {productLabel}
                </p>
                <h1 className='mt-4 font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-c-black sm:text-[70px] 1100:text-[80px] 1300:text-[104px]'>
                  {title}
                </h1>
                <p className='mt-4 max-w-[630px] font-britti-sans text-sm font-[400] text-c-black sm:text-base md:mt-8'>
                  {subtitle}
                </p>
              </div>
            </div>
            <div className='z-[10] bg-white' />
          </>
        ) : (
          <>
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
                  {productLabel}
                </p>
                <h1 className='mt-4 font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-c-black sm:text-[70px] 1100:text-[80px] 1300:text-[104px]'>
                  {title}
                </h1>
                <p className='mt-4 max-w-[630px] font-britti-sans text-sm font-[400] text-c-black sm:text-base md:mt-8'>
                  {subtitle}
                </p>
              </div>
            </div>
            <div className='z-[10] bg-white' />
          </>
        )}
      </div>
    </div>
  )
}

export default ReusablePageHero
