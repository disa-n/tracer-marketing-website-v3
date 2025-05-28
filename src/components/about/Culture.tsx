'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

function Culture() {
  // Animation refs and controls
  const titleRef = useRef(null)
  const rectanglesRef = useRef(null)

  // Animation controls
  const titleControls = useAnimation()
  const rectanglesControls = useAnimation()

  // Detect when elements come into view
  const titleInView = useInView(titleRef, {
    amount: 0.3,
    margin: "0px 0px 0px 0px"
  })

  const rectanglesInView = useInView(rectanglesRef, {
    amount: 0.3,
    margin: "0px 0px 0px 0px"
  })

  // Handle scroll-based animations
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible")
    }
  }, [titleInView, titleControls])

  useEffect(() => {
    if (rectanglesInView) {
      rectanglesControls.start("visible")
    }
  }, [rectanglesInView, rectanglesControls])

  // Add CSS styles for responsive behavior
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @media (max-width: 960px) {
        .culture-section { min-height: 1750px !important; }
        .culture-card-0 { left: calc(50% - 175px) !important; top: 0px !important; }
        .culture-card-1 { left: calc(50% - 175px) !important; top: 240px !important; }
        .culture-card-2 { left: calc(50% - 175px) !important; top: 480px !important; }
        .culture-card-bottom-0 { left: calc(50% - 175px) !important; top: 720px !important; }
        .culture-card-bottom-1 { left: calc(50% - 175px) !important; top: 960px !important; }
        .culture-card-bottom-2 { left: calc(50% - 175px) !important; top: 1200px !important; }
      }

      .culture-card {
        transition: transform 0.3s ease;
      }

      .culture-card:hover {
        transform: scale(1.05);
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  // Culture values data
  const cultureValues = [
    {
      title: "Passion",
      description: "We lead with passion. When we care deeply about our work, great things follow."
    },
    {
      title: "Intelligence",
      description: "We face the hard truths, ask the right questions, and solve problems as a team."
    },
    {
      title: "Fun & Fearlessness",
      description: "The best work happens when you’re having fun and taking on real challenges."
    },
    {
      title: "Hard Work",
      description: "We work really hard, but live a life worth living– and take epic holidays)"
    },
    {
      title: "Experiment",
      description: "We experiment relentlessly in pursuit of truth, learn fast and iterate faster."
    },
    {
      title: "Meritocracy",
      description: "Like a professional sports team, we focus on contribution and reward excellence."
    }
  ]

  return (
    <div
      className="relative w-screen bg-[#202020] overflow-hidden culture-section"
      style={{
        minHeight: 950,
        paddingTop: 86,
        paddingBottom: 56,
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        paddingLeft: 'calc(50vw - 50% + 16px)',
        paddingRight: 'calc(50vw - 50% + 16px)',
        zIndex: 10
      }}
    >
      {/* Background Gridlines */}
      {/* Vertical line 1 */}
      <div
        className="absolute bg-[#404040]"
        style={{
          width: 1,
          height: '150%',
          left: 250,
          top: 0,
          zIndex: 1
        }}
      />

      {/* Vertical line 2 */}
      <div
        className="absolute bg-[#404040]"
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
        className="absolute bg-[#404040]"
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
        className="absolute bg-[#404040]"
        style={{
          width: 1,
          height: '100%',
          left: 1210,
          top: 0,
          zIndex: 1
        }}
      />

      {/* Section Title */}
      <motion.div
        ref={titleRef}
        className="absolute text-[#FCFCFC] font-britti-sans font-normal break-words"
        style={{
          width: 1300,
          left: 16,
          top: 86,
          fontSize: 96,
          lineHeight: '80px',
          zIndex: 10
        }}
        animate={titleControls}
        initial={{ y: 60 }}
        variants={{
          visible: {
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }
        }}
      >
        Our Culture
      </motion.div>

      {/* Cards Container */}
      <div
        className="absolute"
        style={{
          left: '50%',
          top: 205,
          transform: 'translateX(-50%)',
          width: 1200,
          height: 735,
          zIndex: 10
        }}
      >
        {/* Row 1 - Top 3 cards */}
        {cultureValues.slice(0, 3).map((value, index) => (
          <div
            key={value.title}
            className={`absolute bg-[#202020] overflow-hidden culture-card-${index}`}
            style={{
              width: 350,
              height: 212,
              left: index === 0 ? 'calc(16.67% - 175px)' : index === 1 ? 'calc(50% - 175px)' : 'calc(83.33% - 175px)',
              top: 0,
              outline: '1px #E8E8E8 solid',
              outlineOffset: '-1px',
              zIndex: 10,
              padding: 16
            }}
          >
            {/* Icon placeholder */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: 56,
                height: 56,
                left: 16,
                top: 16,
                zIndex: 10
              }}
            >
              <Image
                src="/placeholder-icon.svg"
                alt={`${value.title} Icon`}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div
              className="absolute flex flex-col justify-start items-start gap-2"
              style={{
                width: 318,
                left: 16,
                top: 124,
                zIndex: 10
              }}
            >
              <div
                className="text-[#FCFCFC] font-britti-sans font-normal break-words"
                style={{
                  fontSize: 32,
                  lineHeight: '30px'
                }}
              >
                {value.title}
              </div>
              <div
                className="text-[#FCFCFC] font-britti-sans font-normal break-words"
                style={{
                  width: 318,
                  fontSize: 16,
                  lineHeight: '17px'
                }}
              >
                {value.description}
              </div>
            </div>
          </div>
        ))}

        {/* Row 2 - Bottom 3 cards */}
        {cultureValues.slice(3, 6).map((value, index) => (
          <div
            key={value.title}
            className={`absolute bg-[#202020] overflow-hidden culture-card-bottom-${index}`}
            style={{
              width: 350,
              height: 212,
              left: index === 0 ? 'calc(83.33% - 175px)' : index === 1 ? 'calc(50% - 175px)' : 'calc(83.33% - 175px)',
              top: index === 0 ? 245 : index === 1 ? 490 : 490,
              outline: '1px #E8E8E8 solid',
              outlineOffset: '-1px',
              zIndex: 5,
              padding: 16
            }}
          >
            {/* Icon placeholder */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: 56,
                height: 56,
                left: 16,
                top: 16
              }}
            >
              <Image
                src="/placeholder-icon.svg"
                alt={`${value.title} Icon`}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div
              className="absolute flex flex-col justify-start items-start gap-2"
              style={{
                width: 318,
                left: 16,
                top: 124
              }}
            >
              <div
                className="text-[#FCFCFC] font-britti-sans font-normal break-words"
                style={{
                  fontSize: 32,
                  lineHeight: '30px'
                }}
              >
                {value.title}
              </div>
              <div
                className="text-[#FCFCFC] font-britti-sans font-normal break-words"
                style={{
                  width: 318,
                  fontSize: 16,
                  lineHeight: '17px'
                }}
              >
                {value.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Culture
