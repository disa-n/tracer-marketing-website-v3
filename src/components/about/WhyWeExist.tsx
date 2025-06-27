'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useInView, type Variants } from 'framer-motion'
import { GridLinesLight } from '@/components/shared/GridLines'
import InsightCard from '@/components/ui/InsightCard'
import StyledLayoutWrapper from '@/components/shared/StyledLayoutWrapper'
import { Rocket, Trophy } from 'lucide-react'

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

  // Detect when cards come into view
  const cardsInView = useInView(cardsRef, {
    amount: 0.2, // Trigger when 20% visible
    margin: "0px 0px 0px 0px"
  })

  const cardsControls = useAnimation()
  const rectangleControls = useAnimation()

  // Animation variants for cards (rise into place, no fade) - desktop only
  const cardVariants: Variants = {
    hidden: {
      y: isMobileView ? 0 : 60 // Reduced from 120 to 60 for subtler animation
    },
    visible: {
      y: 0,
      transition: {
        duration: isMobileView ? 0 : 0.8,
        ease: "easeInOut"
      }
    }
  }

  // Animation variants for rectangle (rise with background, then shrink smoothly) - desktop only
  const rectangleVariants: Variants = {
    hidden: {
      y: isMobileView ? 0 : 40, // No slide animation in mobile
      width: isMobileView ? "min(400px, 85vw)" : "min(430px, 90vw)", // Start at final size in mobile, larger size in desktop
      height: isMobileView ? "min(130px, 15vw)" : "min(140px, 18vw)", // Start at final size in mobile, larger size in desktop
      transformOrigin: "top right"
    },
    visible: {
      y: 0, // Rise to final position with background
      width: "min(400px, 85vw)", // Responsive final width (smaller)
      height: "min(130px, 15vw)", // Responsive final height (smaller)
      transition: {
        y: {
          duration: isMobileView ? 0 : 1.0, // No animation duration in mobile
          ease: "easeInOut"
        },
        width: {
          duration: isMobileView ? 0 : 0.6, // No animation duration in mobile
          ease: "easeInOut",
          delay: isMobileView ? 0 : 0.6 // No delay in mobile
        },
        height: {
          duration: isMobileView ? 0 : 0.6, // No animation duration in mobile
          ease: "easeInOut",
          delay: isMobileView ? 0 : 0.6 // No delay in mobile
        }
      }
    }
  }

  // Animation variants for second card (staggered) - desktop only
  const cardVariantsStaggered: Variants = {
    hidden: {
      y: isMobileView ? 0 : 60 // Reduced from 120 to 60 for subtler animation
    },
    visible: {
      y: 0,
      transition: {
        duration: isMobileView ? 0 : 0.8,
        ease: "easeInOut",
        delay: isMobileView ? 0 : 0.2
      }
    }
  }

  // Handle scroll-based animation - only play once, no reset
  useEffect(() => {
    if (cardsInView && !cardsAnimated) {
      cardsControls.start("visible")
      rectangleControls.start("visible")
      setCardsAnimated(true)
    }
    // No reset behavior - animations stay visible once triggered
  }, [cardsInView, cardsAnimated, cardsControls, rectangleControls, setCardsAnimated])

  // Ensure rectangle starts in hidden state
  useEffect(() => {
    rectangleControls.set("hidden")
  }, [rectangleControls])

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top horizontal line */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E8E8E8]"></div>

      {/* Light Gridlines */}
      <GridLinesLight />

      <div className="relative z-20 pt-16 pb-32 lg:pt-20 lg:pb-48">
        {/* Title with new alignment */}
        <div className="flex flex-col justify-center px-4 md:px-8 lg:px-12 lg:max-w-[1400px] lg:w-full">
          <h2 className="mt-4 text-[#202020] font-britti-sans font-medium text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[38px] tracking-tight lg:tracking-[-1.5px] mb-4 lg:mb-6">
            Why We Exist
          </h2>
        </div>

        {/* Cards with original StyledLayoutWrapper for proper positioning */}
        <StyledLayoutWrapper>

          {/* Cards Container */}
          <div ref={cardsRef} className="relative mt-12 lg:mt-16">
            {/* Cards Layout - Mobile-first: stacked, then side by side on lg+ */}
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 xl:gap-12">
              {/* Mission Card */}
              <motion.div
                className="flex flex-1"
                animate={cardsControls}
                variants={cardVariants}
                initial="hidden"
              >
                <InsightCard
                  icon={<Rocket className="w-16 h-16 text-[#202020]" strokeWidth={1} />}
                  title="Our Mission"
                  description={
                    <div className="space-y-6">
                      <p>
                        To revolutionise how scientists and engineers leverage high-performance computing by making observability seamless, insightful, and transformative.
                      </p>
                      <p>
                        We empower innovation in regulated industries, enabling breakthroughs that redefine what&apos;s possible in scientific research, design, and engineering.
                      </p>
                    </div>
                  }
                />
              </motion.div>

              {/* Goal Card */}
              <motion.div
                className="flex flex-1"
                animate={cardsControls}
                variants={cardVariantsStaggered}
                initial="hidden"
              >
                <InsightCard
                  icon={<Trophy className="w-16 h-16 text-[#202020]" strokeWidth={1} />}
                  title="Our Goal"
                  description={
                    <div className="space-y-6">
                      <p>
                        To make high-performance computing as accessible and impactful for science as cloud computing has been for software.
                      </p>
                      <p className="opacity-0 pointer-events-none">
                        {/* Hidden spacer paragraph to match Mission card height */}
                        &nbsp;
                      </p>
                    </div>
                  }
                />
              </motion.div>
            </div>
          </div>
        </StyledLayoutWrapper>
      </div>

      {/* Rectangle element at bottom - positioned to sit on top of moonshot section */}
      <div className="absolute bottom-0 w-full h-20 overflow-hidden z-30">
        <motion.div
          className="absolute bg-[#202020] bottom-0 z-30"
          style={{
            left: 'calc(-50vw + 50%)'
          }}
          animate={rectangleControls}
          variants={rectangleVariants}
          initial="hidden"
        />
      </div>
    </section>
  )
}

export default WhyWeExist
