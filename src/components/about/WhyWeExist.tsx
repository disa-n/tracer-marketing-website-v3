'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

function WhyWeExist() {
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

  // Animation variants for cards (rise into place, no fade)
  const cardVariants = {
    hidden: {
      y: 120 // Start 120px below (lower starting point)
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  // Animation variants for second card (staggered)
  const cardVariantsStaggered = {
    hidden: {
      y: 120 // Start 120px below (same as first card)
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2 // 0.2 second delay after first card
      }
    }
  }

  // Animation variants for moonshot background (rise in place)
  const moonshotVariants = {
    hidden: {
      y: 40 // Start 40px below (reduced for smoother feel)
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.0, // Slightly longer for smoothness
        ease: [0.25, 0.1, 0.25, 1] // Smoother easing curve
      }
    }
  }

  // Animation variants for rectangle (rise with background, then shrink smoothly)
  const rectangleVariants = {
    hidden: {
      y: 40, // Start 40px below (same as background)
      width: 430, // Start slightly wider (400 + 30, less dramatic)
      height: 110, // Start slightly taller (100 + 10, less dramatic)
      transformOrigin: "top right"
    },
    visible: {
      y: 0, // Rise to final position with background
      width: 400, // Final width
      height: 100, // Final height
      transition: {
        y: {
          duration: 1.0, // Match background duration
          ease: [0.25, 0.1, 0.25, 1]
        },
        width: {
          duration: 0.6, // Shorter, smoother shrink
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.6 // Start shrinking before rise completes for overlap
        },
        height: {
          duration: 0.6, // Shorter, smoother shrink
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.6 // Start shrinking before rise completes for overlap
        }
      }
    }
  }

  // Animation variants for text elements (slide up from below, staggered after background)
  const textVariants = {
    hidden: {
      y: 60 // Start 60px below
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.4 // Start after background begins moving
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
    <div className="w-full flex flex-col justify-start items-start gap-16">
      {/* Top vertical gridline */}
      <div
        className="w-full bg-[#E8E8E8]"
        style={{
          height: 1,
          zIndex: 2
        }}
      />

      {/* Section Title */}
      <div
        className="text-[#202020] font-britti-sans font-medium break-words relative"
        style={{
          width: 453,
          fontSize: 40,
          lineHeight: '38px',
          zIndex: 10,
          letterSpacing: '-1.5px'
        }}
      >
        Why We Exist
      </div>

      {/* Cards Container */}
      <div ref={cardsRef} className="relative" style={{ width: 1408, height: 720, zIndex: 10 }}>
        {/* Gridlines extending through card area */}
        {/* Vertical line 1 */}
        <div
          className="absolute bg-[#E8E8E8]"
          style={{
            width: 1,
            height: '150%',
            left: 234,
            top: 0,
            zIndex: 2
          }}
        />

        {/* Vertical line 2 */}
        <div
          className="absolute bg-[#E8E8E8]"
          style={{
            width: 1,
            height: '150%',
            left: 554,
            top: 0,
            zIndex: 2
          }}
        />

        {/* Vertical line 3 */}
        <div
          className="absolute bg-[#E8E8E8]"
          style={{
            width: 1,
            height: '150%',
            left: 874,
            top: 0,
            zIndex: 2
          }}
        />

        {/* Vertical line 4 */}
        <div
          className="absolute bg-[#E8E8E8]"
          style={{
            width: 1,
            height: '150%',
            left: 1194,
            top: 0,
            zIndex: 2
          }}
        />

        {/* Mission Card */}
        <motion.div
          className="absolute bg-[#FCFCFC] overflow-hidden"
          style={{
            width: 600,
            height: 320,
            left: 0,
            top: 0,
            outline: '1px #E8E8E8 solid',
            outlineOffset: '-1px',
            zIndex: 5
          }}
          animate={cardsControls}
          variants={cardVariants}
          initial="hidden"
        >
          {/* Mission Icon - Rocket SVG */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: 48,
              height: 48,
              left: 20,
              top: 20
            }}
          >
            <Image
              src="/About us/rocket.svg"
              alt="Mission Rocket"
              width={39}
              height={39}
              className="absolute"
              style={{
                left: 4.5,
                top: 4.5
              }}
            />
          </div>

          {/* Mission Content */}
          <div
            className="absolute flex flex-col justify-start items-start gap-2"
            style={{
              width: 520,
              left: 16,
              top: 119
            }}
          >
            <div className="w-full text-[#202020] font-britti-sans font-normal break-words"
              style={{
                fontSize: 40,
                lineHeight: '38px',
                letterSpacing: '-1.5px'
              }}
            >
              Mission
            </div>
            <div
              className="text-[#202020] font-britti-sans font-normal break-words"
              style={{
                width: 520,
                fontSize: 16,
                lineHeight: '17px'
              }}
            >
              <p style={{ marginBottom: '16px' }}>
                To revolutionise how scientists and engineers leverage high-performance computing by making observability seamless, insightful, and transformative.
              </p>
              <p>
                We empower innovation in regulated industries, enabling breakthroughs that redefine what&apos;s possible in research, design, and engineering.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Goal Card */}
        <motion.div
          className="absolute bg-[#FCFCFC] overflow-hidden"
          style={{
            width: 600,
            height: 320,
            left: 'max(16px, min(720px, calc(100vw - 616px)))',
            top: 350,
            outline: '1px #E8E8E8 solid',
            outlineOffset: '-1px',
            zIndex: 5
          }}
          animate={cardsControls}
          variants={cardVariantsStaggered}
          initial="hidden"
        >
          {/* Goal Icon - Trophy SVG */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: 46,
              height: 46,
              left: 21,
              top: 21
            }}
          >
            <Image
              src="/About us/trophy.svg"
              alt="Goal Trophy"
              width={37}
              height={37}
              className="absolute"
              style={{
                left: 4.47,
                top: 4.31
              }}
            />
          </div>

          {/* Goal Content */}
          <div
            className="absolute flex flex-col justify-start items-start gap-2"
            style={{
              width: 520,
              left: 16,
              top: 119
            }}
          >
            <div className="w-full text-[#202020] font-britti-sans font-normal break-words"
              style={{
                fontSize: 40,
                lineHeight: '38px',
                letterSpacing: '-1.5px'
              }}
            >
              Goal
            </div>
            <div className="text-[#202020] font-britti-sans font-normal break-words"
              style={{
                width: 520,
                fontSize: 16,
                lineHeight: '17px'
              }}
            >
              To make high-performance computing as accessible and impactful as cloud computing has been for software.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background rectangle element - intersecting with moonshot */}
      <div
        className="relative w-full"
        style={{
          height: 60,
          marginTop: -20
        }}
      >
        <motion.div
          className="absolute bg-[#202020] overflow-hidden"
          style={{
            left: 'calc(-50vw + 50%)',
            top: 30,
            zIndex: 10
          }}
          animate={rectangleControls}
          variants={rectangleVariants}
          initial="hidden"
        />
      </div>

      {/* Moonshot Section */}
      <motion.div
        ref={moonshotRef}
        className="relative w-screen bg-[#202020] overflow-hidden"
        style={{
          minHeight: 350,
          paddingBottom: 56,
          marginTop: -40,
          marginBottom: -9,
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          paddingLeft: 'calc(50vw - 50% + 16px)',
          paddingRight: 'calc(50vw - 50% + 16px)',
          zIndex: 10
        }}
        animate={moonshotControls}
        variants={moonshotVariants}
        initial="hidden"
      >


        {/* Moonshot Title */}
        <motion.div
          className="absolute text-[#FCFCFC] font-britti-sans font-normal break-words text-center"
          style={{
            width: '100%',
            left: 0,
            top: 96,
            fontSize: 40,
            lineHeight: '48px'
          }}
          animate={textControls}
          variants={textVariants}
          initial="hidden"
        >
          Our Moonshot
        </motion.div>

        {/* Moonshot Description */}
        <motion.div
          className="absolute flex flex-col justify-center text-[#FCFCFC] font-britti-sans font-normal break-words text-center"
          style={{
            width: '100%',
            left: 0,
            top: 167,
            fontSize: 16,
            lineHeight: '17px'
          }}
          animate={textControls}
          variants={{
            hidden: {
              y: 400 // Start completely off-screen below
            },
            visible: {
              y: 0,
              transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.6 // Slightly later than title
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
