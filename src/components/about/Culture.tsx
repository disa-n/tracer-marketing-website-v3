'use client'

import React, { useRef, useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView, type Variants } from 'framer-motion'
import { GridLines3Dark } from '@/components/shared/GridLines'


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
    if (windowWidth <= 960) return '350px'
    if (windowWidth <= 1024) return '350px'
    if (windowWidth <= 1280) return '380px'
    if (windowWidth <= 1440) return '420px'
    if (windowWidth <= 1600) return '450px'
    if (windowWidth <= 1920) return '480px'
    return '500px'
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
      className={`bg-[#202020] border border-[#E8E8E8] p-4 h-[212px] overflow-hidden transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: cardWidth, minWidth: cardWidth, maxWidth: cardWidth }}
    >
      <div className="w-14 h-14 mb-4">
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
        <p className="text-[#FCFCFC] font-britti-sans font-normal text-base leading-[17px] break-words">
          {description}
        </p>
      </div>
    </div>
  )
}



// Animation variants
const createAnimationVariants = (isMobileView: boolean): Variants => ({
  hidden: {
    y: isMobileView ? 0 : 60,
    opacity: isMobileView ? 1 : 0,
    transition: {
      duration: isMobileView ? 0 : 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: isMobileView ? 0 : 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
})

// Mobile Cards Component
interface MobileCardsProps {
  cultureValues: CultureValue[]
  cardWidth: string
  mobileCardsRef: React.RefObject<HTMLDivElement | null>
  mobileCardsControls: any
  animationVariants: Variants
  isMobileView: boolean
}

const MobileCards: React.FC<MobileCardsProps> = ({
  cultureValues,
  cardWidth,
  mobileCardsRef,
  mobileCardsControls,
  animationVariants,
  isMobileView
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
  desktopCardsRef: React.RefObject<HTMLDivElement | null>
  desktopCardsControls: any
  animationVariants: Variants
  isMobileView: boolean
}

const DesktopCards: React.FC<DesktopCardsProps> = ({
  cultureValues,
  cardWidth,
  desktopCardsRef,
  desktopCardsControls,
  animationVariants,
  isMobileView
}) => (
  <div className="hidden lg:block w-full">
    {/* 2x6 Grid for intermediate desktop (1024px-1150px) */}
    <div className="grid grid-cols-2 gap-6 justify-items-center 1200:hidden">
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

    {/* Original 3-column staggered layout for larger screens (1200px+) */}
    <div className="hidden 1200:grid grid-cols-3 gap-8 lg:gap-10 xl:gap-12 2xl:gap-x-8 2xl:gap-y-16 justify-items-center 2xl:grid-cols-[1fr_auto_auto_auto_1fr] 2xl:gap-x-6">
      {/* Row 1 - Top 3 cards */}
      {cultureValues.slice(0, 3).map((value, index) => (
        <div
          key={value.title}
          className={`flex justify-center ${
            index === 0 ? '2xl:col-start-2' :
            index === 1 ? '2xl:col-start-3' :
            '2xl:col-start-4'
          }`}
        >
          <CultureCard
            title={value.title}
            description={value.description}
            iconSrc={value.iconSrc}
            cardWidth={cardWidth}
          />
        </div>
      ))}

      {/* Row 2 - Bottom 3 cards with offset pattern */}
      <div className="col-start-3 2xl:col-start-4 flex justify-center">
        <div>
          <CultureCard
            title={cultureValues[3].title}
            description={cultureValues[3].description}
            iconSrc={cultureValues[3].iconSrc}
            cardWidth={cardWidth}
          />
        </div>
      </div>

      <div className="col-start-2 2xl:col-start-3 flex justify-center">
        <div>
          <CultureCard
            title={cultureValues[4].title}
            description={cultureValues[4].description}
            iconSrc={cultureValues[4].iconSrc}
            cardWidth={cardWidth}
          />
        </div>
      </div>

      <div className="col-start-3 2xl:col-start-4 flex justify-center">
        <div>
          <CultureCard
            title={cultureValues[5].title}
            description={cultureValues[5].description}
            iconSrc={cultureValues[5].iconSrc}
            cardWidth={cardWidth}
          />
        </div>
      </div>
    </div>
  </div>
)

function Culture() {
  const { isMobileView, windowWidth } = useResponsiveAnimation()
  const cardWidth = useCardDimensions(windowWidth)

  // Animation refs and controls
  const mobileCardsRef = useRef<HTMLDivElement>(null)
  const desktopCardsRef = useRef<HTMLDivElement>(null)

  const mobileCardsControls = useAnimation()
  const desktopCardsControls = useAnimation()

  // Detect when elements come into view
  const mobileCardsInView = useInView(mobileCardsRef, { amount: 0.3 })
  const desktopCardsInView = useInView(desktopCardsRef, { amount: 0.3 })

  useEffect(() => {
    if (mobileCardsInView) mobileCardsControls.start("visible")
  }, [mobileCardsInView, mobileCardsControls])

  useEffect(() => {
    if (desktopCardsInView) desktopCardsControls.start("visible")
  }, [desktopCardsInView, desktopCardsControls])

  // Culture values data
  const cultureValues: CultureValue[] = [
    {
      title: "Passion",
      description: "We lead with passion. When we care deeply about our work, great things follow.",
      iconSrc: "/About us/passion.svg"
    },
    {
      title: "Intelligence",
      description: "We face the hard truths, ask the right questions, and solve problems as a team.",
      iconSrc: "/About us/intelligence.svg"
    },
    {
      title: "Fun & Fearlessness",
      description: "The best work happens when you’re having fun and taking on big challenges.",
      iconSrc: "/About us/fun.svg"
    },
    {
      title: "Hard Work",
      description: "We work really hard, but live a life worth living — and take epic holidays.",
      iconSrc: "/About us/hardwork.svg"
    },
    {
      title: "Experiment",
      description: "We experiment relentlessly in pursuit of truth, learn fast, and iterate faster.",
      iconSrc: "/About us/exp.svg"
    },
    {
      title: "Meritocracy",
      description: "Like a professional sports team, we focus on contribution and reward excellence.",
      iconSrc: "/About us/meritocracy.svg"
    }
  ]

  // Memoized animation variants
  const animationVariants = useMemo(() => createAnimationVariants(isMobileView), [isMobileView])

  return (
    <section className="relative overflow-hidden bg-[#202020] py-16 lg:pt-16 lg:pb-24 z-30">
      {/* GridLines */}
      <GridLines3Dark />

      {/* Title Container */}
      <div className="relative z-10 w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] mx-auto px-4 md:px-8 lg:px-12 xl:px-8">
        {/* Section Title */}
        <h2
          className="text-[#FCFCFC] font-britti-sans font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[96px] leading-tight lg:leading-[80px] mb-8 lg:mb-16"
          style={{ letterSpacing: 'clamp(-2px, -0.3vw, -4px)' }}
        >
          Our Culture
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] mx-auto px-4 md:px-8 lg:px-12 2xl:px-4">
        <MobileCards
          cultureValues={cultureValues}
          cardWidth={cardWidth}
          mobileCardsRef={mobileCardsRef}
          mobileCardsControls={mobileCardsControls}
          animationVariants={animationVariants}
          isMobileView={isMobileView}
        />

        <DesktopCards
          cultureValues={cultureValues}
          cardWidth={cardWidth}
          desktopCardsRef={desktopCardsRef}
          desktopCardsControls={desktopCardsControls}
          animationVariants={animationVariants}
          isMobileView={isMobileView}
        />
      </div>
    </section>
  )
}

export default Culture
