'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { GridLines3 } from '@/components/shared/GridLines'
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
    description: 'Automatically attribute cloud spend to specific pipelines, tools, and teams. Map compute\nusage directly to cost centers for accurate budgeting and internal chargebacks.',
    icon: BarChart3,
    image: '/platformv2/features/pipeline-spend.webp'
  },
  {
    id: 'tool-metrics',
    title: 'Tool-Level Metrics',
    previewTitle: 'Tool-Level Metrics',
    description: 'Get granular insights into individual tool performance, resource consumption,\nand execution patterns across your pipeline ecosystem.',
    icon: Settings,
    image: '/platformv2/features/tool-metrics.webp'
  },
  {
    id: 'unified-log',
    title: 'Unified Log View',
    previewTitle: 'Unified Log View',
    description: 'Centralized logging across all pipeline components with intelligent\nfiltering, search, and correlation capabilities.',
    icon: Eye,
    image: '/platformv2/features/unified-log.webp'
  },
  {
    id: 'live-instance',
    title: 'Live Instance Watch',
    previewTitle: 'Live Instance Watch',
    description: 'Real-time monitoring of running instances with live resource utilization,\nperformance metrics, and health status.',
    icon: Activity,
    image: '/platformv2/features/live-instance.webp'
  },
  {
    id: 'time-sink',
    title: 'Time Sink Detector',
    previewTitle: 'Time Sink Detector',
    description: 'Automatically identify bottlenecks and performance issues that slow down\nyour pipelines and impact productivity.',
    icon: Clock,
    image: '/platformv2/features/time-sink.webp'
  },
  {
    id: 'smart-tradeoffs',
    title: 'Smart Tool Tradeoffs',
    previewTitle: 'Smart Tool Tradeoffs',
    description: 'Intelligent recommendations for optimizing tool selection, resource allocation,\nand configuration based on your specific workloads.',
    icon: Brain,
    image: '/platformv2/features/smart-tradeoffs.webp'
  }
]

const ProductFeaturesDeepDive = () => {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].id)
  const [progress, setProgress] = useState<number>(0)
  const [isAutoAdvancing, setIsAutoAdvancing] = useState<boolean>(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const currentFeature = features.find(f => f.id === activeFeature) || features[0]
  const currentIndex = features.findIndex(f => f.id === activeFeature)

  // Auto-advance functionality
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
        return prev + (100 / (5000 / 50)) // 5 seconds total, update every 50ms
      })
    }, 50)

    // Auto-advance to next feature after 5 seconds
    intervalRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % features.length
      setActiveFeature(features[nextIndex].id)
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [activeFeature, currentIndex, isAutoAdvancing])

  // Handle manual feature selection
  const handleFeatureClick = (featureId: string) => {
    setIsAutoAdvancing(false)
    setActiveFeature(featureId)
    setProgress(0)

    // Re-enable auto-advancing after manual selection
    setTimeout(() => {
      setIsAutoAdvancing(true)
    }, 100)
  }

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Grid Lines */}
      <GridLines3 />
      
      <div className='w-full flex z-[10] flex-col items-center justify-center max-w-[1800px] 900:px-8 px-6 mx-auto'>
        <div className="relative z-10 py-16 lg:py-28 w-full">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            <h2 className="font-britti-sans text-[48px] font-normal leading-[52px] tracking-[-0.01em] text-black mb-6">
              Explore The Power Behind<br />
              Tracer's Observability Layers
            </h2>
            <p className="font-britti-sans text-[16px] font-normal leading-[20px] text-[#888888] max-w-2xl">
              Get a closer look at the core features powering real-time observability, cost tracking, and smarter pipeline decisions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr] lg:gap-8">
            {/* Left Side - Feature List */}
            <div className="border border-gray-200 bg-white h-fit">
              {features.map((feature) => (
                <div key={feature.id} className="relative">
                  <motion.button
                    onClick={() => handleFeatureClick(feature.id)}
                    className={`w-full text-left p-8 transition-all duration-300 min-h-[105px] ${
                      activeFeature === feature.id
                        ? 'bg-gray-50'
                        : 'bg-white hover:bg-gray-25'
                    }`}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.995 }}
                  >
                    <div className="flex items-center gap-4">
                      <feature.icon
                        size={24}
                        className={`flex-shrink-0 transition-colors duration-300 ${
                          activeFeature === feature.id ? 'text-gray-700' : 'text-[#888888]'
                        }`}
                      />
                      <h3 className={`font-britti-sans text-[18px] font-normal leading-[21px] tracking-[-0.01em] transition-colors duration-300 ${
                        activeFeature === feature.id ? 'text-black' : 'text-[#888888]'
                      }`}>
                        {feature.title}
                      </h3>
                    </div>
                  </motion.button>

                  {/* Loading Bar */}
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
              <div className="sticky top-8 h-fit">
                {/* Feature Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-britti-sans text-[32px] font-normal leading-[36px] tracking-[-0.01em] text-black whitespace-pre-line">
                      {currentFeature.previewTitle}
                    </h3>
                    <Link
                      href="https://sandbox.tracer.cloud/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[48px] font-britti-sans text-base font-normal cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-8 hover:opacity-80 transition-all shrink-0 ml-4"
                    >
                      See It In Action
                    </Link>
                  </div>
                  <p className="font-britti-sans text-[16px] font-normal leading-[17px] tracking-[0em] text-[#888888] whitespace-pre-line">
                    {currentFeature.description}
                  </p>
                </div>

                {/* Feature Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full border border-gray-200"
                    style={{ height: '510px', backgroundColor: '#0B0B0B' }}
                  >
                    <Image
                      src={currentFeature.image}
                      alt={currentFeature.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeaturesDeepDive
