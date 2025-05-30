'use client'

import React, { useEffect, useState, useRef } from 'react'

function LetsConnect() {
  // State for responsive behavior
  const [isMobile, setIsMobile] = useState(false)
  // State for animation
  const [isVisible, setIsVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280) // xl breakpoint
    }

    // Check initial screen size
    checkScreenSize()

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  // Handle scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    const currentRef = titleRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      className="relative w-screen bg-[#202020] overflow-hidden lets-connect-section"
      style={{
        minHeight: isMobile ? 600 : 475,
        paddingTop: 88,
        paddingBottom: 64,
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        paddingLeft: 'calc(50vw - 50% + 16px)',
        paddingRight: 'calc(50vw - 50% + 16px)',
        zIndex: 10
      }}
    >
      {/* Main Content Container */}
      <div
        className="relative"
        style={{
          width: isMobile ? '100%' : 1408,
          height: isMobile ? 'auto' : 486,
          left: isMobile ? 0 : 16,
          top: 0
        }}
      >
        {/* Content Wrapper */}
        <div
          className="relative"
          style={{
            width: isMobile ? '100%' : 1408,
            height: isMobile ? 'auto' : 247,
            left: 0,
            top: 0
          }}
        >
          {/* Title */}
          <div
            ref={titleRef}
            className={`text-white font-britti-sans font-normal break-words
                       text-[48px] leading-[44px] w-full
                       md:text-[64px] md:leading-[58px]
                       lg:text-[80px] lg:leading-[72px]
                       xl:text-[96px] xl:leading-[80px] xl:w-[697px]
                       transition-all duration-1000 ease-out
                       ${isVisible
                         ? 'translate-x-0 opacity-100'
                         : '-translate-x-20 opacity-0'
                       }`}
            style={{
              position: isMobile ? 'relative' : 'absolute',
              left: 0,
              top: 0,
              marginBottom: isMobile ? 32 : 0
            }}
          >
            Let&apos;s Connect!
          </div>

          {/* Description Container */}
          <div
            className="relative"
            style={{
              width: isMobile ? '100%' : 586,
              height: isMobile ? 'auto' : 247,
              left: isMobile ? 0 : 454,
              top: isMobile ? 0 : 0,
              marginTop: isMobile ? 24 : 0
            }}
          >
            {/* Description Text */}
            <div
              className="text-[#FCFCFC] font-britti-sans font-normal break-words
                         text-[16px] leading-[18px]
                         md:text-[18px] md:leading-[20px]
                         xl:text-[20px] xl:leading-[22px]"
              style={{
                position: isMobile ? 'relative' : 'absolute',
                width: isMobile ? '100%' : 586,
                left: isMobile ? 0 : 23,
                top: isMobile ? 0 : 152
              }}
            >
              Ready to help shape the future of high-performance computing?
              We want to hear from you!
              <br />
              <br />
              Join us in our mission to unlock the full potential of HPC and help usher in a new era of scientific breakthroughs!
              <br />
              <br />
              Reach out to{' '}
              <span
                className="underline cursor-pointer hover:opacity-80 transition-opacity duration-200"
                onClick={() => window.open('mailto:careers@tracer.cloud', '_blank')}
              >
                careers@tracer.cloud
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsConnect
