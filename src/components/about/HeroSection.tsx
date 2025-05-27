'use client'

import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Main heading */}
      <div
        className="absolute text-[#202020] font-britti-sans font-medium leading-[76px] break-words"
        style={{
          width: '1255px',
          left: '16px',
          top: '150px',
          fontSize: '88px',
          zIndex: 10
        }}
      >
        About Us
      </div>

      {/* Description text */}
      <div
        className="absolute flex flex-col justify-center text-[#202020] font-britti-sans font-normal leading-[36px] break-words"
        style={{
          width: '642px',
          left: '16px',
          top: '320px',
          fontSize: '32px',
          zIndex: 10
        }}
      >
        Tracer is an advanced observability platform for high-performance computing (HPC) systems in regulated industries. We help scientists and engineers to run, maintain, and optimise supercomputing software solutions.
      </div>

      {/* Background image */}
      <Image
        src="/About us/Tracer-brain.png"
        alt="Tracer Brain"
        width={13000}
        height={1825}
        className="absolute"
        style={{
          left: '400px',
          top: '-50px',
          width: '8000px',
          height: 'auto',
          transform: 'scale(1.5)',
          transformOrigin: 'left top',
          zIndex: 5
        }}
      />
    </section>
  )
}

export default HeroSection
