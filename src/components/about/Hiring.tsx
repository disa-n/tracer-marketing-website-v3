'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation, useInView } from 'framer-motion'

function Hiring() {
  // State for responsive behavior
  const [isMobile, setIsMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1280) // Default to desktop width

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
    imageControls.start("hidden") // Make sure this line is present
  }
  }, [imageInView, imageControls])

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        setWindowWidth(width)
        setIsMobile(width < 1280) // xl breakpoint
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
    <div
      className="relative w-screen bg-[#FCFCFC] overflow-hidden hiring-section"
      style={{
        minHeight: isMobile ? 1100 : 500, // Increased height for stacked image
        paddingTop: 64,
        paddingBottom: 64,
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        paddingLeft: 'calc(50vw - 50% + 16px)',
        paddingRight: 'calc(50vw - 50% + 16px)',
        zIndex: 10
      }}
    >
      {/* Background Gridlines */}
      {!isMobile && (
        <>
          {/* Vertical line 1 */}
          <div
            className="absolute bg-[#E8E8E8]"
            style={{
              width: 1,
              height: '100%',
              left: 250,
              top: 0,
              zIndex: 1
            }}
          />

          {/* Vertical line 2 */}
          <div
            className="absolute bg-[#E8E8E8]"
            style={{
              width: 1,
              height: '100%',
              left: 570,
              top: 0,
              zIndex: 1
            }}
          />

          {/* Vertical line 3 */}
          <div
            className="absolute bg-[#E8E8E8]"
            style={{
              width: 1,
              height: '100%',
              left: 890,
              top: 0,
              zIndex: 1
            }}
          />

          {/* Vertical line 4 */}
          <div
            className="absolute bg-[#E8E8E8]"
            style={{
              width: 1,
              height: '100%',
              left: 1210,
              top: 0,
              zIndex: 1
            }}
          />
        </>
      )}



      {/* Section Title */}
      <div
        className="absolute text-[#202020] font-britti-sans font-normal break-words hiring-title
                   w-[calc(100%-32px)] left-4 text-left text-[32px] leading-[30px]
                   md:w-[calc(100%-64px)] md:left-8 md:text-[40px] md:leading-[36px]
                   lg:w-[calc(100%-200px)] lg:left-auto lg:right-8 lg:text-left lg:text-[44px] lg:leading-[40px]
                   xl:w-[597px] xl:left-[720px] xl:text-left xl:text-[48px] xl:leading-[38px]"
        style={{
          top: 64,
          zIndex: 10,
          letterSpacing: 'clamp(-2px, -0.3vw, -4px)'
        }}
      >
        Join Our Growing Team
      </div>

      {/* Description */}
      <div
        className="absolute text-[#202020] font-britti-sans font-normal break-words hiring-description
                   w-[calc(100%-32px)] left-4 top-[140px] flex flex-col justify-center text-[16px] leading-[17px]
                   md:w-[calc(100%-64px)] md:left-8 md:top-[150px]
                   lg:w-[calc(100%-200px)] lg:left-auto lg:right-8 lg:top-[130px]
                   xl:w-[669px] xl:left-[720px] xl:top-[123px]"
        style={{
          zIndex: 10
        }}
      >
        With VC funding in the bank, we are hiring ambitious and hard-working individuals to fast-track our growth. Join our team in London and help rethink scientific computing to power the next generation of breakthroughs.
      </div>

      {/* CTA Button */}
      <Link href="/coming-soon">
        <div
          className="absolute bg-[#E8E8E8] hiring-button hover:bg-[#D8D8D8] transition-colors duration-200
                     left-4 top-[240px] inline-flex justify-center items-center cursor-pointer w-fit
                     md:left-8 md:top-[250px]
                     lg:left-auto lg:right-8 lg:top-[230px]
                     xl:left-[720px] xl:top-[223px]"
          style={{
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 16,
            paddingBottom: 16,
            gap: 8,
            zIndex: 10
          }}
        >
          <div
            className="text-[#202020] font-britti-sans font-normal break-words whitespace-nowrap"
            style={{
              fontSize: 16,
              lineHeight: '17px'
            }}
          >
            View Role Details & Apply Now
          </div>
        </div>
      </Link>

      {/* Background Image */}
      <motion.div
        ref={imageRef}
        className="hiring-image"
        style={isMobile ? {
          position: 'absolute',
          width: windowWidth >= 1024 && windowWidth < 1280 ? 1200 : 1100, // Larger sizes for both views
          height: windowWidth >= 1024 && windowWidth < 1280 ? 680 : 620, // Proportional height increase
          left: windowWidth >= 1024 && windowWidth < 1280 ? -400 : -350,
          top: windowWidth >= 1024 && windowWidth < 1280 ? 280 : 320, // Move up in intermediate view
          zIndex: 2
        } : {
          position: 'absolute',
          width: 1314,
          height: 740,
          // More left-skewed positioning for xxl screens (1536px+)
          right: windowWidth >= 1536 ? 1000 : 500,
          bottom: -200,
          zIndex: 2
        }}
        animate={imageControls}
        initial="hidden"
        variants={{
          hidden: {
            x: isMobile ? -150 : -250
          },
          visible: {
            x: 0,
            transition: {
              duration: 1.4,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }
        }}
      >
        <Image
          src="/About us/tracer-rocket.svg"
          alt="Tracer Rocket"
          width={1314}
          height={740}
          className="object-contain"
        />
      </motion.div>
    </div>
  )
}

export default Hiring
