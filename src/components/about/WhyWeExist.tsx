'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

function WhyWeExist() {
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

  // State to track if cards animation has played
  const [cardsAnimated, setCardsAnimated] = useState(false)

  // Refs and controls for card animations
  const cardsRef = useRef(null)
  const moonshotRef = useRef(null)

  // Detect when cards come into view
  const cardsInView = useInView(cardsRef, {
    amount: 0.2, // Trigger when 20% visible
    margin: "0px 0px 0px 0px"
  })

  // Detect when moonshot section comes into view
  const moonshotInView = useInView(moonshotRef, {
    amount: 0.2, // Trigger when 20% visible
    margin: "0px 0px 0px 0px"
  })

  const cardsControls = useAnimation()
  const moonshotControls = useAnimation()
  const rectangleControls = useAnimation()
  const textControls = useAnimation()

  // Animation variants for cards (rise into place, no fade) - desktop only
  const cardVariants = {
    hidden: {
      y: isMobileView ? 0 : 120 // No slide animation in mobile
    },
    visible: {
      y: 0,
      transition: {
        duration: isMobileView ? 0 : 0.8, // No animation duration in mobile
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  // Animation variants for second card (staggered) - desktop only
  const cardVariantsStaggered = {
    hidden: {
      y: isMobileView ? 0 : 120 // No slide animation in mobile
    },
    visible: {
      y: 0,
      transition: {
        duration: isMobileView ? 0 : 0.8, // No animation duration in mobile
        ease: [0.25, 0.1, 0.25, 1],
        delay: isMobileView ? 0 : 0.2 // No delay in mobile
      }
    }
  }

  // Animation variants for moonshot background (rise in place) - desktop only
  const moonshotVariants = {
    hidden: {
      y: isMobileView ? 0 : 40 // No slide animation in mobile
    },
    visible: {
      y: 0,
      transition: {
        duration: isMobileView ? 0 : 1.0, // No animation duration in mobile
        ease: [0.25, 0.1, 0.25, 1] // Smoother easing curve
      }
    }
  }

  // Animation variants for rectangle (rise with background, then shrink smoothly) - desktop only
  const rectangleVariants = {
    hidden: {
      y: isMobileView ? 0 : 40, // No slide animation in mobile
      width: isMobileView ? "min(400px, 85vw)" : "min(430px, 90vw)", // Start at final size in mobile
      height: isMobileView ? "min(100px, 12vw)" : "min(110px, 15vw)", // Start at final size in mobile
      transformOrigin: "top right"
    },
    visible: {
      y: 0, // Rise to final position with background
      width: "min(400px, 85vw)", // Responsive final width
      height: "min(100px, 12vw)", // Responsive final height
      transition: {
        y: {
          duration: isMobileView ? 0 : 1.0, // No animation duration in mobile
          ease: [0.25, 0.1, 0.25, 1]
        },
        width: {
          duration: isMobileView ? 0 : 0.6, // No animation duration in mobile
          ease: [0.25, 0.1, 0.25, 1],
          delay: isMobileView ? 0 : 0.6 // No delay in mobile
        },
        height: {
          duration: isMobileView ? 0 : 0.6, // No animation duration in mobile
          ease: [0.25, 0.1, 0.25, 1],
          delay: isMobileView ? 0 : 0.6 // No delay in mobile
        }
      }
    }
  }

  // Animation variants for text elements (slide up from below, staggered after background) - desktop only
  const textVariants = {
    hidden: {
      y: isMobileView ? 0 : 60 // No slide animation in mobile
    },
    visible: {
      y: 0,
      transition: {
        duration: isMobileView ? 0 : 0.8, // No animation duration in mobile
        ease: [0.25, 0.1, 0.25, 1],
        delay: isMobileView ? 0 : 0.4 // No delay in mobile
      }
    }
  }

  // Handle scroll-based animation - only play once, no reset
  useEffect(() => {
    if (cardsInView && !cardsAnimated) {
      cardsControls.start("visible")
      setCardsAnimated(true)
    }
  }, [cardsInView, cardsAnimated, cardsControls, setCardsAnimated])

  useEffect(() => {
    if (moonshotInView) {
      moonshotControls.start("visible")
      rectangleControls.start("visible")
      textControls.start("visible")
    } else {
      moonshotControls.start("hidden")
      rectangleControls.start("hidden")
      textControls.start("hidden")
    }
  }, [moonshotInView, moonshotControls, rectangleControls, textControls])

  return (
    <div className="w-full flex flex-col justify-start items-start gap-8 lg:gap-16 px-4 lg:px-0">
      {/* Top horizontal gridline */}
      <div
        className="bg-[#E8E8E8] h-px z-[2]"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)'
        }}
      />

      {/* Section Title */}
      <div className="text-[#202020] font-britti-sans font-medium break-words relative z-10 text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[38px] tracking-tight lg:tracking-[-1.5px] max-w-full lg:max-w-[453px]">
        Why We Exist
      </div>

      {/* Cards Container */}
      <div ref={cardsRef} className="relative w-full max-w-7xl mx-auto z-10">
        {/* Cards Layout - Responsive Grid */}
        <div className="flex flex-col gap-8 lg:gap-16 lg:h-[720px] lg:relative min-h-[600px] lg:min-h-[720px]">
          {/* Mission Card */}
          <motion.div
            className="bg-[#FCFCFC] border border-[#E8E8E8] p-4 lg:p-5 flex flex-col gap-4 lg:gap-6 z-[5] lg:absolute lg:w-[600px] lg:h-[320px] lg:left-[30px] lg:top-0"
            animate={cardsControls}
            variants={cardVariants}
            initial="hidden"
          >
            {/* Mission Icon - Rocket SVG */}
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/About us/rocket.svg"
                alt="Mission Rocket"
                width={39}
                height={39}
              />
            </div>

            {/* Mission Content */}
            <div className="flex flex-col gap-2 lg:gap-4 flex-1 lg:mt-[75px]">
              <h3 className="text-[#202020] font-britti-sans font-normal text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[38px] tracking-tight lg:tracking-[-1.5px]">
                Mission
              </h3>
              <div className="text-[#202020] font-britti-sans font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[17px] space-y-4">
                <p>
                  To revolutionise how scientists and engineers leverage high-performance computing by making observability seamless, insightful, and transformative.
                </p>
                <p>
                  We empower innovation in regulated industries, enabling breakthroughs that redefine what&apos;s possible in scientific research, design, and engineering.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Goal Card */}
          <motion.div
            className="bg-[#FCFCFC] border border-[#E8E8E8] p-4 lg:p-5 flex flex-col gap-4 lg:gap-6 z-[5] lg:absolute lg:w-[590px] lg:h-[320px] lg:right-[20px] lg:top-[350px]"
            animate={cardsControls}
            variants={cardVariantsStaggered}
            initial="hidden"
          >
            {/* Goal Icon - Trophy SVG */}
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/About us/trophy.svg"
                alt="Goal Trophy"
                width={37}
                height={37}
              />
            </div>

            {/* Goal Content */}
            <div className="flex flex-col gap-2 lg:gap-4 flex-1 lg:mt-[75px]">
              <h3 className="text-[#202020] font-britti-sans font-normal text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[38px] tracking-tight lg:tracking-[-1.5px]">
                Goal
              </h3>
              <div className="text-[#202020] font-britti-sans font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[17px]">
                To make high-performance computing as accessible and impactful for science as cloud computing has been for software.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background rectangle element - intersecting with moonshot */}
      <div className="relative w-full h-15 -mt-5 lg:-mt-5">
        <motion.div
          className="absolute bg-[#202020] top-7 z-10"
          style={{
            left: 'calc(-50vw + 50%)'
          }}
          animate={rectangleControls}
          variants={rectangleVariants}
          initial="hidden"
        />
      </div>

      {/* Moonshot Section */}
      <motion.div
        ref={moonshotRef}
        className="relative w-screen bg-[#202020] overflow-hidden min-h-[350px] pb-14 -mt-10 -mb-2 -mx-4 lg:-mx-0 px-4 lg:px-16 z-10"
        style={{
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          paddingLeft: 'calc(50vw - 50% + 16px)',
          paddingRight: 'calc(50vw - 50% + 16px)'
        }}
        animate={moonshotControls}
        variants={moonshotVariants}
        initial="hidden"
      >
        {/* Moonshot Title */}
        <motion.div
          className="text-[#FCFCFC] font-britti-sans font-normal text-center pt-16 lg:pt-24 text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px]"
          animate={textControls}
          variants={textVariants}
          initial="hidden"
        >
          Our Moonshot
        </motion.div>

        {/* Moonshot Description */}
        <motion.div
          className="flex flex-col justify-center text-[#FCFCFC] font-britti-sans font-normal text-center mt-8 lg:mt-12 px-4 lg:px-0 text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[17px] max-w-4xl mx-auto"
          animate={textControls}
          variants={{
            hidden: {
              y: isMobileView ? 0 : 400 // No slide animation in mobile
            },
            visible: {
              y: 0,
              transition: {
                duration: isMobileView ? 0 : 1.2, // No animation duration in mobile
                ease: [0.25, 0.1, 0.25, 1],
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
      </motion.div>
    </div>
  )
}

export default WhyWeExist
