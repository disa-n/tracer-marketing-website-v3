'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

function Hiring() {
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

  // Add CSS styles for responsive behavior
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @media (max-width: 960px) {
        .hiring-section { min-height: 800px !important; }
        .hiring-title {
          width: calc(100% - 32px) !important;
          left: 16px !important;
          text-align: left !important;
          font-size: 32px !important;
          line-height: 30px !important;
        }
        .hiring-description {
          width: calc(100% - 32px) !important;
          left: 16px !important;
          top: 140px !important;
        }
        .hiring-button {
          left: 16px !important;
          top: 240px !important;
        }
        .hiring-rectangle-1 { display: none !important; }
        .hiring-rectangle-2 { display: none !important; }
        .hiring-image { display: none !important; }
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <div
      className="relative w-screen bg-[#FCFCFC] overflow-hidden hiring-section"
      style={{
        minHeight: 500,
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



      {/* Section Title */}
      <div
        className="absolute text-[#202020] font-britti-sans font-normal break-words hiring-title"
        style={{
          width: 597,
          left: 600,
          top: 64,
          textAlign: 'right',
          fontSize: 48,
          lineHeight: '38px',
          zIndex: 10
        }}
      >
        Join Our Growing Team
      </div>

      {/* Description */}
      <div
        className="absolute text-[#202020] font-britti-sans font-normal break-words hiring-description"
        style={{
          width: 669,
          left: 720,
          top: 123,
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 16,
          lineHeight: '17px',
          zIndex: 10
        }}
      >
        With VC funding in the bank, we are hiring ambitious and hard-working individuals to fast-track our growth. Join our team in London and help rethink scientific computing to power the next generation of breakthroughs.
      </div>

      {/* CTA Button */}
      <div
        className="absolute bg-[#E8E8E8] hiring-button hover:bg-[#D8D8D8] transition-colors duration-200"
        style={{
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 16,
          paddingBottom: 16,
          left: 720,
          top: 223,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          display: 'inline-flex',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        <div
          className="text-[#202020] font-britti-sans font-normal break-words"
          style={{
            fontSize: 16,
            lineHeight: '17px'
          }}
        >
          View Role Details & Apply Now
        </div>
      </div>

      {/* Background Image */}
      <motion.div
        ref={imageRef}
        className="absolute hiring-image"
        style={{
          width: 1314,
          height: 740,
          right: 500,
          bottom: -200,
          zIndex: 2
        }}
        animate={imageControls}
        initial="hidden"
        variants={{
          hidden: {
            x: -250
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
