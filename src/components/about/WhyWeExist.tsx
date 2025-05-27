'use client'

import React from 'react'
import Image from 'next/image'

function WhyWeExist() {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-12">
      {/* Section Title */}
      <div
        className="text-[#202020] font-britti-sans font-medium break-words relative"
        style={{
          width: 453,
          fontSize: 40,
          lineHeight: '38px',
          zIndex: 10
        }}
      >
        Why We Exist
      </div>

      {/* Cards Container */}
      <div className="w-full flex justify-start items-center gap-6 relative" style={{ zIndex: 10 }}>
        {/* Mission Card */}
        <div
          className="relative bg-[#FCFCFC] overflow-hidden"
          style={{
            width: 454,
            height: 320,
            outline: '1px #E8E8E8 solid',
            outlineOffset: '-1px'
          }}
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
              width: 358,
              left: 16,
              top: 119
            }}
          >
            <div className="w-full text-[#202020] font-britti-sans font-normal break-words"
              style={{
                fontSize: 40,
                lineHeight: '38px'
              }}
            >
              Mission
            </div>
            <div
              className="text-[#202020] font-britti-sans font-normal break-words"
              style={{
                width: 383,
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
        </div>

        {/* Goal Card */}
        <div
          className="relative bg-[#FCFCFC] overflow-hidden"
          style={{
            width: 454,
            height: 320,
            outline: '1px #E8E8E8 solid',
            outlineOffset: '-1px'
          }}
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
              width: 358,
              left: 16,
              top: 119
            }}
          >
            <div className="w-full text-[#202020] font-britti-sans font-normal break-words"
              style={{
                fontSize: 40,
                lineHeight: '38px'
              }}
            >
              Goal
            </div>
            <div className="w-full text-[#202020] font-britti-sans font-normal break-words"
              style={{
                fontSize: 16,
                lineHeight: '17px'
              }}
            >
              To make high-performance computing as accessible and impactful as cloud computing has been for software.
            </div>
          </div>
        </div>
      </div>

      {/* Background rectangle element - intersecting with moonshot */}
      <div
        className="relative w-full"
        style={{
          height: 60,
          marginTop: 48
        }}
      >
        {/* Gridlines extending over rectangle area */}
        {/* Vertical line 1 */}
        <div
          className="absolute bg-[#E8E8E8]"
          style={{
            width: 1,
            height: '100%',
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
            height: '100%',
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
            height: '100%',
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
            height: '100%',
            left: 1194,
            top: 0,
            zIndex: 2
          }}
        />

        <div
          className="absolute bg-[#202020] overflow-hidden"
          style={{
            width: 400,
            height: 100,
            right: 0,
            top: 85,
            zIndex: 5
          }}
        />
      </div>

      {/* Moonshot Section */}
      <div
        className="relative w-full bg-[#202020] overflow-hidden"
        style={{
          height: 320,
          marginTop: 48
        }}
      >
        {/* Top right black rectangle */}
        <div
          className="absolute bg-[#202020] overflow-hidden"
          style={{
            width: 454,
            height: 212,
            right: 20,
            top: 30
          }}
        />

        {/* Moonshot Title */}
        <div
          className="absolute text-[#FCFCFC] font-britti-sans font-normal break-words"
          style={{
            width: 800,
            left: 16,
            top: 56,
            fontSize: 40,
            lineHeight: '48px'
          }}
        >
          Our Moonshot
        </div>

        {/* Moonshot Description */}
        <div
          className="absolute flex flex-col justify-center text-[#FCFCFC] font-britti-sans font-normal break-words"
          style={{
            width: 669,
            left: 16,
            top: 127,
            fontSize: 16,
            lineHeight: '17px'
          }}
        >
          Just as cloud computing revolutionised web and mobile applications over the past 10 years, we believe it&apos;s time for scientists and engineers to experience a similar transformation, and get their turn to ask: &ldquo;what can I do with all this immense power?&rdquo;
        </div>
      </div>
    </div>
  )
}

export default WhyWeExist
