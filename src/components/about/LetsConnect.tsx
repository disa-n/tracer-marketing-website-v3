'use client'

import React, { useEffect, useState, useRef } from 'react'

function LetsConnect() {
  // State for animation - only disable on mobile view (≤50% screen width)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

  // Handle responsive behavior - disable animations when window is 50% or less of screen width
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsResizing(true)

        // Clear existing timeout
        if (resizeTimeout) {
          clearTimeout(resizeTimeout)
        }

        // Set timeout to end resize state
        resizeTimeout = setTimeout(() => {
          setIsResizing(false)
        }, 150)

        const width = window.innerWidth
        const screenWidth = window.screen.width
        setIsMobileView(width <= screenWidth * 0.5)
      }
    }

    // Check initial screen size
    handleResize()

    // Add event listener for resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
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
    <section
      className="relative w-screen bg-[#202020] overflow-hidden"
      style={{
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        paddingLeft: 'calc(50vw - 50% + 16px)',
        paddingRight: 'calc(50vw - 50% + 16px)',
        zIndex: 10
      }}
    >
      {/* Content Container - Match TwoWorlds structure: max-width + centered + responsive padding */}
      <div className="relative w-full max-w-[1408px] mx-auto px-4 md:px-8 lg:px-12 pt-8 pb-0 lg:py-20">
        {/* Title - Positioned to match "About Us" hero title exactly at all breakpoints */}
        <div
          ref={titleRef}
          className={`absolute text-white font-britti-sans font-normal break-words
                     ${!isMobileView && !isResizing ? 'transition-all duration-1000 ease-out' : ''}
                     ${!isMobileView && isVisible && !isResizing
                       ? 'translate-x-0 opacity-100'
                       : !isMobileView && !isResizing
                       ? '-translate-x-20 opacity-0'
                       : 'translate-x-0 opacity-100'
                     }`}
          style={{
            width: 'min(1255px, calc(100% - 32px))',
            left: '0px',
            top: 'clamp(30px, 6vh, 70px)',
            fontSize: 'clamp(48px, 7vw, 88px)',
            lineHeight: 'clamp(52px, 7.5vw, 76px)',
            zIndex: 10,
            letterSpacing: 'clamp(-2px, -0.3vw, -4px)'
          }}
        >
          Let&apos;s Connect!
        </div>

        {/* Description - Mobile: Below title, Desktop: Lower and right-skewed */}
        <div
          className="absolute text-[#FCFCFC] font-britti-sans font-normal break-words"
          style={{
            width: 'min(1800px, calc(100% - 0px))',
            left: '0px',
            top: 'clamp(120px, 20vh, 180px)',
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            lineHeight: 'clamp(18px, 3vw, 22px)',
            zIndex: 10
          }}
        >
          <div className="lg:ml-[40%] xl:ml-[35%] 2xl:ml-[27%] lg:mt-8">
            Ready to help shape the future of high-performance computing?
            <br className="lg:hidden" />
            We want to hear from you!
            <br />
            <br />
            Support us in our mission to optimise computational pipelines and usher in a new era of scientific discovery.
            <br />
            <br />
            Contact us at {' '}
            <span
              className="underline cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open('mailto:careers@tracer.cloud', '_blank')
                }
              }}
            >
              hello@tracer.cloud
            </span>
          </div>
        </div>

        {/* Spacer to ensure proper section height */}
        <div className="h-64 lg:h-80 xl:h-96"></div>
      </div>
    </section>
  )
}

export default LetsConnect
