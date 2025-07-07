'use client'

import GridLines from '@/components/ui/layout/GridLines'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'


// Types
interface CultureValue {
  title: string
  description: string
  iconSrc: string
}

interface CultureCardProps {
  title: string
  description: string
  iconSrc: string
  cardWidth: string
  className?: string
}

// Custom hooks
const useResponsiveAnimation = () => {
  const [isMobileView, setIsMobileView] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1440)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      const isMobileDevice = width <= 768
      const isNarrowWindow = width <= (window.screen.width * 0.5)
      setIsMobileView(isMobileDevice || isNarrowWindow)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobileView, windowWidth }
}

const useCardDimensions = (windowWidth: number) => {
  return useMemo(() => {
    if (windowWidth <= 480) return 'calc(100vw - 32px)'  // Full width minus padding for very small screens
    if (windowWidth <= 768) return '320px'  // Smaller width for mobile
    if (windowWidth <= 960) return '350px'
    if (windowWidth <= 1024) return '350px'  // lg breakpoint starts at 1024px
    if (windowWidth <= 1280) {return '360px'  // Reduced from 380px to prevent touching
    }
    if (windowWidth <= 1536) {
      // xl breakpoint: gap-8 (32px between cards = 64px total gap)
      // Available width ≈ 1280-1536px, minus padding ≈ 48px, minus gaps ≈ 64px
      return '400px'  // Reduced from 450px to prevent touching
    }
    if (windowWidth <= 1920) {
      // 2xl breakpoint: gap-10 (40px between cards = 80px total gap)
      // Available width ≈ 1536-1920px, minus padding ≈ 48px, minus gaps ≈ 80px
      return '520px'  // Increased from 480px to reduce excessive spacing
    }
    return '540px'  // Increased from 500px for larger screens
  }, [windowWidth])
}
// Reusable Culture Card Component
const CultureCard: React.FC<CultureCardProps> = ({
  title,
  description,
  iconSrc,
  cardWidth,
  className = ''
}) => {
  return (
    <div
      className={`bg-[#202020] border border-[#E8E8E8] px-4 py-6 h-[212px] overflow-hidden transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: cardWidth, minWidth: cardWidth, maxWidth: cardWidth }}
    >
      <div className="w-14 h-14 mb-3">
        <Image
          src={iconSrc}
          alt={`${title} Icon`}
          width={56}
          height={56}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-[#FCFCFC] font-britti-sans font-normal text-[32px] leading-[30px] break-words">
          {title}
        </h3>
        <p className="text-[#FCFCFC] font-britti-sans font-normal text-base leading-[18px] 2xl:leading-[20px] break-words">
          {description}
        </p>
      </div>
    </div>
  )
}





// Mobile Cards Component
interface MobileCardsProps {
  cultureValues: CultureValue[]
  cardWidth: string
}

const MobileCards: React.FC<MobileCardsProps> = ({
  cultureValues,
  cardWidth
}) => (
  <div className="block lg:hidden">
    {/* 2x6 Grid for tablet/intermediate view */}
    <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:hidden">
      {cultureValues.map((value) => (
        <div
          key={value.title}
          className="flex justify-center"
        >
          <CultureCard
            title={value.title}
            description={value.description}
            iconSrc={value.iconSrc}
            cardWidth={cardWidth}
          />
        </div>
      ))}
    </div>

    {/* Single column for mobile */}
    <div className="block md:hidden space-y-6">
      {cultureValues.map((value) => (
        <div
          key={value.title}
          className="flex justify-center"
        >
          <CultureCard
            title={value.title}
            description={value.description}
            iconSrc={value.iconSrc}
            cardWidth={cardWidth}
          />
        </div>
      ))}
    </div>
  </div>
)

// Desktop Cards Component
interface DesktopCardsProps {
  cultureValues: CultureValue[]
  cardWidth: string
}

const DesktopCards: React.FC<DesktopCardsProps> = ({
  cultureValues,
  cardWidth
}) => (
  <div className="hidden lg:block w-full">
    {/* 3x2 Grid for all desktop layouts */}
    <div className="grid grid-cols-3 gap-6 lg:gap-8 xl:gap-10 2xl:gap-8 justify-items-center">
      {cultureValues.map((value) => (
        <div
          key={value.title}
          className="flex justify-center"
        >
          <CultureCard
            title={value.title}
            description={value.description}
            iconSrc={value.iconSrc}
            cardWidth={cardWidth}
          />
        </div>
      ))}
    </div>
  </div>
)

function Culture() {
  const { windowWidth } = useResponsiveAnimation()
  const cardWidth = useCardDimensions(windowWidth)



  // Culture values data
  const cultureValues: CultureValue[] = [
    {
      title: "Passion",
      description: "We lead with passion. When we care deeply about our work, great things follow.",
      iconSrc: "/images/about-us/passion.svg"
    },
    {
      title: "Intelligence",
      description: "We face the hard truths, ask the right questions, and solve problems as a team.",
      iconSrc: "/images/about-us/intelligence.svg"
    },
    {
      title: "Fun & Fearlessness",
      description: "The best work happens when you’re having fun and taking on big challenges.",
      iconSrc: "/images/about-us/fun.svg"
    },
    {
      title: "Hard Work",
      description: "We work really hard, but live a life worth living — and take epic holidays.",
      iconSrc: "/images/about-us/hardwork.svg"
    },
    {
      title: "Experiment",
      description: "We experiment relentlessly in pursuit of truth, learn fast, and iterate faster.",
      iconSrc: "/images/about-us/exp.svg"
    },
    {
      title: "Meritocracy",
      description: "Like a professional sports team, we focus on contribution and reward excellence.",
      iconSrc: "/images/about-us/meritocracy.svg"
    }
  ]

  return (
    <section className="relative overflow-hidden bg-[#202020] pt-10 pb-16 md:pt-30 md:pb-42 z-30">
      {/* GridLines */}
      <GridLines />

      {/* Title Container */}
      <div className="relative z-10 flex flex-col justify-center px-4 md:px-8 lg:px-12 lg:max-w-[1400px] lg:w-full">
        {/* Section Title */}
        <h2
          className="mt-4 text-[#FCFCFC] font-britti-sans font-normal text-4xl lg:text-6xl max-[1064px]:lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-8 lg:mb-16"
        >
          Our Values
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] mx-auto px-4 md:px-8 lg:px-12 2xl:px-4">
        <MobileCards
          cultureValues={cultureValues}
          cardWidth={cardWidth}
        />

        <DesktopCards
          cultureValues={cultureValues}
          cardWidth={cardWidth}
        />
      </div>
    </section>
  )
}

export default Culture
