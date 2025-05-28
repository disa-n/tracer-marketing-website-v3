'use client'

import React from 'react'
import Image from 'next/image'

function TwoWorlds() {
  return (
    <section
      className="relative w-full bg-[#FCFCFC] overflow-hidden"
      style={{
        height: 486, // End where bottom-left rectangle ends (445 + 41 = 486)
        marginTop: -55 // Move section up to align with end of moonshot section
      }}
    >
      {/* Background Image - Right Side */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: '10%',
          top: '-1%',
          width: '97%',
          height: '105%',
          zIndex: 1
        }}
      >
        <Image
          src="/About us/tracer-ball.svg"
          alt="Tracer Ball"
          fill
          className="object-contain"
        />
      </div>

      {/* Main Title */}
      <div
        className="absolute text-[#202020] font-britti-sans font-normal break-words"
        style={{
          width: 'min(597px, 46vw)', // Responsive width that shrinks with viewport
          maxWidth: '597px', // Original max width
          left: 16,
          top: 56,
          fontSize: 'clamp(24px, 3.2vw, 40px)', // Responsive font size: min 24px, max 40px
          lineHeight: 'clamp(22px, 3vw, 38px)' // Responsive line height: min 22px, max 38px
        }}
      >
        The Best of Two Worlds
      </div>

      {/* Mini-heading - Right half only: 001, tracer, FOUNDERs */}
      <div
  className="absolute"
  style={{
    left: '50%',
    top: -114,
    width: '50%',
    paddingLeft: '1%',
    paddingRight: '1%',
  }}
>
  <div
    style={{
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex',
    }}
  >
    <div style={{
      color: '#202020',
      fontSize: 14,
      fontFamily: 'Chakra Petch',
      fontWeight: '400',
      textTransform: 'uppercase',
      lineHeight: 19,
      wordWrap: 'break-word',
    }}>
      001
    </div>

    {/* tracer + FOUNDERS grouped */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '100px', // tighter than default
    }}>
      <div style={{
        color: '#202020',
        fontSize: 14,
        fontFamily: 'Chakra Petch',
        fontWeight: '400',
        textTransform: 'uppercase',
        lineHeight: 19,
        wordWrap: 'break-word',
      }}>
        tracer
      </div>
      <div style={{
        color: '#202020',
        fontSize: 14,
        fontFamily: 'Chakra Petch',
        fontWeight: '400',
        textTransform: 'uppercase',
        lineHeight: 19,
        wordWrap: 'break-word',
      }}>
        FOUNDERS
      </div>
    </div>
  </div>
</div>

      {/* Description Text - Responsive */}
      <div
        className="absolute flex flex-col justify-center text-[#202020] font-britti-sans font-normal break-words"
        style={{
          width: '46%', // Responsive width to stay in left half
          maxWidth: '669px', // Original max width
          left: 16,
          top: 117,
          fontSize: 'clamp(14px, 1.1vw, 16px)', // Responsive font size
          lineHeight: 'clamp(15px, 1.2vw, 17px)' // Responsive line height
        }}
      >
       <p className="mb-4">
    Founded in 2023 by Vincent Hus and Laura Bogaert, Tracer brings together deep technical expertise and sharp business acumen.
  </p>
  <p className="mb-4">
    Vincent, an expert in software and biomechanical engineering, and Laura, a McKinsey alum specialising in bioinformatics and pharma, are the perfect storm of innovation.
  </p>
  <p className="mb-4">
    Together, they joined forces to lead the next wave of computational infrastructure and build the world&apos;s first verticalised observability platform.
  </p>
      </div>

      {/* Decorative Rectangle 1 */}
      <div
        className="absolute bg-[#202020] overflow-hidden"
        style={{
          width: 458,
          height: 41,
          left: 458,
          top: 445,
          transform: 'rotate(180deg)',
          transformOrigin: 'top left'
        }}
      />

      {/* Decorative Rectangle 2 */}
      <div
        className="absolute bg-[#202020] overflow-hidden"
        style={{
          width: 529,
          height: 79,
          left: 529,
          top: 524,
          transform: 'rotate(180deg)',
          transformOrigin: 'top left'
        }}
      />

      {/* Gridlines */}
      {/* Top Horizontal Gridline */}
      <div
        className="absolute"
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#E8E8E8',
          left: 0,
          top: 0,
          zIndex: 2
        }}
      />

      {/* Left Vertical Gridline */}
      <div
        className="absolute"
        style={{
          width: 1,
          height: '100%',
          backgroundColor: '#E8E8E8',
          left: 0,
          top: 0,
          zIndex: 2
        }}
      />

      {/* Center Vertical Gridline */}
      <div
        className="absolute"
        style={{
          width: 1,
          height: '100%',
          backgroundColor: '#E8E8E8',
          left: '50%',
          top: 0,
          transform: 'translateX(-1px)', // Center the 2px line
          zIndex: 2
        }}
      />

      {/* Horizontal Gridline under mini-heading */}
      <div
        className="absolute"
        style={{
          width: '50%', // From center to right edge
          height: 1,
          backgroundColor: '#E8E8E8',
          left: '50%',
          top: 33.5, // Vertically centered between top and mini-heading
          zIndex: 2
        }}
      />
    </section>
  )
}

export default TwoWorlds
