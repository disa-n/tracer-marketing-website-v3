'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { GridLinesLight } from '@/components/shared/GridLines'
import {
  BarChart3,
  Settings,
  Eye,
  Activity,
  Clock,
  Brain
} from 'lucide-react'

// Feature data structure
interface Feature {
  id: string
  title: string
  previewTitle: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  image: string
  isActive?: boolean
}

const features: Feature[] = [
  {
    id: 'pipeline-spend',
    title: 'Map Pipeline Spend',
    previewTitle: 'Match Pipeline Activity to Cost Centers in Real Time',
    description: 'Automatically attribute cloud spend to specific pipelines, tools, and teams. Map compute usage directly to cost centers for accurate budgeting.',
    icon: BarChart3,
    image: '/platformv2/features/pipeline-spend.webp'
  },
  {
    id: 'tool-metrics',
    title: 'Tool-Level Metrics',
    previewTitle: 'Tool-Level Metrics',
    description: 'Get granular insights into tool-level CPU, memory, and disk I/O usage, along with performance and execution patterns across your pipeline ecosystem.',
    icon: Settings,
    image: '/platformv2/features/tool-metrics.webp'
  },
  {
    id: 'unified-log',
    title: 'Unified Log View',
    previewTitle: 'Unified Log View',
    description: 'Centralised logging across all pipeline components with intelligent filtering, search, and correlation capabilities.',
    icon: Eye,
    image: '/platformv2/features/unified-log.webp'
  },
  {
    id: 'live-instance',
    title: 'Live Instance Watch',
    previewTitle: 'Live Instance Watch',
    description: 'Real-time monitoring of running instances with live resource utilisation, performance metrics, and health status.',
    icon: Activity,
    image: '/platformv2/features/live-instance.webp'
  },
  {
    id: 'time-sink',
    title: 'Time Sink Detector',
    previewTitle: 'Time Sink Detector',
    description: 'Automatically identify bottlenecks and performance issues that slow down your pipelines and impact productivity.',
    icon: Clock,
    image: '/platformv2/features/time-sink.webp'
  },
  {
    id: 'smart-tradeoffs',
    title: 'Smart Tool Tradeoffs',
    previewTitle: 'Smart Tool Tradeoffs',
    description: 'Intelligent recommendations for optimizing tool selection, resource allocation, and configuration based on your specific workloads.',
    icon: Brain,
    image: '/platformv2/features/smart-tradeoffs.webp'
  }
]

// Utility function to center a tab in its scrollable container
const scrollToCenter = (tabId: string, delay: number = 100): void => {
  setTimeout(() => {
    const targetButton = document.querySelector(`[data-tab-id="${tabId}"]`)
    if (targetButton) {
      const container = targetButton.closest('.overflow-x-auto')
      if (container) {
        const containerRect = container.getBoundingClientRect()
        const buttonRect = targetButton.getBoundingClientRect()
        const containerCenter = containerRect.left + containerRect.width / 2
        const buttonCenter = buttonRect.left + buttonRect.width / 2
        const scrollOffset = buttonCenter - containerCenter

        container.scrollBy({
          left: scrollOffset,
          behavior: 'smooth'
        })
      }
    }
  }, delay)
}

const ProductFeaturesDeepDive = () => {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].id)
  const [progress, setProgress] = useState<number>(0)
  const [isAutoAdvancing, setIsAutoAdvancing] = useState<boolean>(true)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const currentFeature = features.find(f => f.id === activeFeature) || features[0]
  const currentIndex = features.findIndex(f => f.id === activeFeature)

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-advance functionality (works on all devices)
  useEffect(() => {
    if (!isAutoAdvancing) return

    // Clear existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)

    // Reset progress
    setProgress(0)

    // Progress bar animation (updates every 50ms for smooth animation)
    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100
        return prev + (100 / (8000 / 50)) // 8 seconds total, update every 50ms
      })
    }, 50)

    // Auto-advance to next feature after 8 seconds
    intervalRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % features.length
      const nextFeatureId = features[nextIndex].id
      setActiveFeature(nextFeatureId)

      // Auto-center the new active tab on mobile
      if (isMobile) {
        scrollToCenter(nextFeatureId, 100)
      }
    }, 8000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [activeFeature, currentIndex, isAutoAdvancing])

  // Handle manual feature selection
  const handleFeatureClick = (featureId: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    setIsAutoAdvancing(false)
    setActiveFeature(featureId)
    setProgress(0)

    // Center the clicked tab if it's partially off-screen (mobile only)
    if (event && isMobile) {
      scrollToCenter(featureId, 0)
    }

    // Re-enable auto-advancing after 20 seconds of manual selection
    setTimeout(() => {
      setIsAutoAdvancing(true)
    }, 20000) // 20 seconds pause
  }

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Grid Lines - Desktop Only */}
      <div className="hidden lg:block">
        <GridLinesLight />
      </div>
      <div className='w-full flex z-[10] flex-col items-center justify-center max-w-[1800px] px-6 900:px-8 mx-auto'>
        <div className="relative z-10 py-10 md:pt-36 md:pb-36 w-full">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            <h2 className="font-britti-sans text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.1] tracking-[-0.01em] text-black mb-6">
              Explore the Power Behind<br />
              Tracer&apos;s Observability Layers
            </h2>
            <p className="font-britti-sans text-sm sm:text-base font-normal leading-[1.4] text-[#888888] max-w-2xl">
              Get a closer look at the core features powering real-time observability, cost tracking, and smarter pipeline decisions.
            </p>
          </div>
          {/* Features Grid */}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[300px_1fr] lg:gap-8">
            {/* Mobile Tab Navigation - horizontally scrollable */}
            <div className="lg:hidden mb-8">
              <div className="w-full px-4">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-6 min-w-max px-2">
                    {features.map((feature) => (
                      <div key={feature.id} className="relative flex-shrink-0">
                        <motion.button
                          onClick={(e) => handleFeatureClick(feature.id, e)}
                          data-tab-id={feature.id}
                          className={`
                            font-britti-sans text-sm
                            transition-colors duration-300 ease-in-out
                            relative pb-3 cursor-pointer whitespace-nowrap
                            ${activeFeature === feature.id
                              ? 'text-black'
                              : 'text-[#888888] hover:text-black'
                            }
                          `}
                        >
                          {feature.title}
                        </motion.button>
                        {/* Active tab underline with progress bar */}
                        {activeFeature === feature.id && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300">
                            <motion.div
                              className="h-full bg-black"
                              initial={{ width: '0%' }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.1, ease: 'linear' }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Feature List */}
            <div className="hidden lg:block border border-gray-200 bg-white h-fit">
              {features.map((feature) => (
                <div key={feature.id} className="relative">
                  <motion.button
                    onClick={() => handleFeatureClick(feature.id)}
                    className={`w-full text-left p-4 sm:p-6 lg:p-8 transition-all duration-300 min-h-[80px] sm:min-h-[90px] lg:min-h-[105px] ${activeFeature === feature.id
                      ? 'bg-gray-50'
                      : 'bg-white hover:bg-gray-25'
                      }`}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.995 }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <feature.icon
                        size={20}
                        className={`flex-shrink-0 transition-colors duration-300 sm:w-6 sm:h-6 ${activeFeature === feature.id ? 'text-gray-700' : 'text-[#888888]'
                          }`}
                      />
                      <h3 className={`font-britti-sans text-base sm:text-lg font-normal leading-[1.2] tracking-[-0.01em] transition-colors duration-300 ${activeFeature === feature.id ? 'text-black' : 'text-[#888888]'
                        }`}>
                        {feature.title}
                      </h3>
                    </div>
                  </motion.button>

                  {/* Loading Bar - Desktop Only */}
                  {activeFeature === feature.id && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                      <motion.div
                        className="h-full bg-black"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Feature Display */}
            <div className="relative">
              <div className="lg:sticky lg:top-8 h-fit">
                {/* Feature Header */}
                <div className="mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="font-britti-sans text-2xl sm:text-[28px] lg:text-[32px] font-normal leading-[1.1] tracking-[-0.01em] text-black mb-4 break-words">
                        {currentFeature.previewTitle}
                      </h3>
                      <p className="font-britti-sans text-sm sm:text-base font-normal leading-[1.4] tracking-[0em] text-[#888888] break-words">
                        {currentFeature.description}
                      </p>
                    </div>
                    {/* See It in Action Button - Desktop only, aligned with header */}
                    <div className="hidden lg:flex flex-shrink-0">
                      <Link
                        href="https://sandbox.tracer.cloud/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 font-britti-sans text-sm sm:text-base font-normal cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-6 sm:px-8 hover:opacity-80 transition-all"
                      >
                        See It in Action
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Feature Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full border border-gray-200 h-[300px] sm:h-[400px] lg:h-[510px] mb-6 lg:mb-0"
                    style={{ backgroundColor: '#0B0B0B' }}
                  >
                    <Image
                      src={currentFeature.image}
                      alt={currentFeature.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* See It in Action Button - Mobile/Tablet only, below image */}
                <div className="lg:hidden flex justify-center">
                  <Link
                    href="https://sandbox.tracer.cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[44px] font-britti-sans text-sm sm:text-base font-normal cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-6 sm:px-8 hover:opacity-80 transition-all w-full sm:w-auto"
                  >
                    See It in Action
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeaturesDeepDive
