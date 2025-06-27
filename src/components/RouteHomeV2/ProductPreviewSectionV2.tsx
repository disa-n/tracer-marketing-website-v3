'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import GridLines from '@/components/shared/GridLines';

// Define the tab data structure
interface TabData {
  id: string;
  label: string;
  imageUrl: string;
}

// Tab options data
const tabsData: TabData[] = [
  {
    id: 'anomaly-detection',
    label: 'Pipeline Health Map',
    imageUrl: '/home/Pipeline Health Map-v2.webp'
  },
  {
    id: 'tool-level-insights',
    label: 'Tool-Level Insights',
    imageUrl: '/home/Tool-Level Insights-v2.webp'
  },
  {
    id: 'run-by-run-clarity',
    label: 'Multi-Tool Analysis',
    imageUrl: '/home/Multi-Tool Analysis-v2.webp'
  },
  {
    id: 'smart-recommendations',
    label: 'Workflow Optimisation',
    imageUrl: '/home/Workflow Optimisation-v2.webp'
  },
  {
    id: 'infra-cost-breakdown',
    label: 'Cost Attribution',
    imageUrl: '/home/Costs Attribution-v2.webp'
  },
  {
    id: 'unified-log-search',
    label: 'Unified Log Panel',
    imageUrl: '/home/Unified Log Panel-v2.webp'
  }
];

export default function ProductPreviewSectionV2() {
  // State to manage the currently selected tab
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].id);
  const [progress, setProgress] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for intervals
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get the currently active tab data and index
  const activeTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0];
  const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoAdvancing) return;

    // Clear existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    // Reset progress
    setProgress(0);

    // Progress bar animation (updates every 50ms for smooth animation)
    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + (100 / (8000 / 50)); // 8 seconds total, update every 50ms
      });
    }, 50);

    // Auto-advance to next feature after 8 seconds
    intervalRef.current = setTimeout(() => {
      // For small mobile view only: if current tab is "Unified Log Panel", go back to "Pipeline Health Map"
      if (isMobile && activeTab === 'unified-log-search') {
        setActiveTab('anomaly-detection'); // Pipeline Health Map

        // Center the Pipeline Health Map button after switching
        setTimeout(() => {
          const pipelineButton = document.querySelector('[data-tab-id="anomaly-detection"]');
          if (pipelineButton) {
            const container = pipelineButton.closest('.overflow-x-auto');
            if (container) {
              const containerRect = container.getBoundingClientRect();
              const buttonRect = pipelineButton.getBoundingClientRect();
              const containerCenter = containerRect.left + containerRect.width / 2;
              const buttonCenter = buttonRect.left + buttonRect.width / 2;
              const scrollOffset = buttonCenter - containerCenter;

              container.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
              });
            }
          }
        }, 100); // Small delay to ensure tab switch has completed
      } else {
        const nextIndex = (currentIndex + 1) % tabsData.length;
        setActiveTab(tabsData[nextIndex].id);
      }
    }, 8000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [activeTab, currentIndex, isAutoAdvancing, isMobile]);

  // Handle manual tab selection
  const handleTabClick = (tabId: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    setIsAutoAdvancing(false);
    setActiveTab(tabId);
    setProgress(0);

    // Center the clicked tab if it's partially off-screen (mobile only)
    if (event && isMobile) {
      const button = event.currentTarget;
      const container = button.closest('.overflow-x-auto');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        const buttonCenter = buttonRect.left + buttonRect.width / 2;
        const scrollOffset = buttonCenter - containerCenter;

        container.scrollBy({
          left: scrollOffset,
          behavior: 'smooth'
        });
      }
    }

    // Re-enable auto-advancing after manual selection
    setTimeout(() => {
      setIsAutoAdvancing(true);
    }, 100);
  };

  return (
    <section className="relative bg-[#141414] py-0 xl:py-0 -mt-32 sm:-mt-20 lg:-mt-24 xl:-mt-28 2xl:-mt-32 overflow-hidden">

      <GridLines />

      {/* Dark gradient overlay working upward toward hero */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 75%, transparent 100%)'
        }}
      />

      {/* Full navbar width container - no frame */}
      <div className='w-full flex items-center px-6 sm:px-4 pt-8 justify-center relative z-10'>
        <div className={`w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px]`}>

          {/* Tab Navigation */}
          <div className="mb-6 flex justify-center">
            {/* Small Mobile: swipable single row (< 640px) */}
            <div className="sm:hidden w-full px-4">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 min-w-max px-2">
                  {tabsData.map((tab) => (
                    <div key={tab.id} className="relative flex-shrink-0">
                      <motion.button
                        onClick={(e) => handleTabClick(tab.id, e)}
                        data-tab-id={tab.id}
                        className={`
                        font-britti-sans text-sm
                        transition-colors duration-300 ease-in-out
                        relative pb-3 cursor-pointer whitespace-nowrap
                        ${activeTab === tab.id
                            ? 'text-white'
                            : 'text-[#888888] hover:text-white'
                          }
                      `}
                      >
                        {tab.label}
                      </motion.button>

                      {/* Active tab underline with progress */}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#303030]">
                          <motion.div
                            className="h-full bg-white"
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

            {/* Tablet: flexible 2-row layout (640px - 1024px) */}
            <div className="hidden sm:flex lg:hidden flex-wrap justify-center gap-x-4 gap-y-6 max-w-2xl px-4">
              {tabsData.map((tab) => (
                <div key={tab.id} className="relative">
                  <motion.button
                    onClick={(e) => handleTabClick(tab.id, e)}
                    className={`
                    font-britti-sans text-sm md:text-base
                    transition-colors duration-300 ease-in-out
                    relative pb-3 md:pb-2 cursor-pointer px-1 md:px-0 whitespace-nowrap
                    ${activeTab === tab.id
                        ? 'text-white'
                        : 'text-[#888888] hover:text-white'
                      }
                  `}
                  >
                    {tab.label}
                  </motion.button>

                  {/* Active tab underline with progress */}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#303030]">
                      <motion.div
                        className="h-full bg-white"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Laptop and up: single row (≥ 1024px) */}
            <div className="hidden lg:flex justify-center gap-8 xl:gap-12 2xl:gap-16">
              {tabsData.map((tab) => (
                <div key={tab.id} className="relative">
                  <motion.button
                    onClick={(e) => handleTabClick(tab.id, e)}
                    className={`
                    font-britti-sans text-base xl:text-lg
                    transition-colors duration-300 ease-in-out
                    relative pb-2 cursor-pointer whitespace-nowrap
                    ${activeTab === tab.id
                        ? 'text-white'
                        : 'text-[#888888] hover:text-white'
                      }
                  `}
                  >
                    {tab.label}
                  </motion.button>

                  {/* Active tab underline with progress */}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#303030]">
                      <motion.div
                        className="h-full bg-white"
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

          {/* Preview Container with Glassmorphism Border */}
          <div className="w-full pt-1 pb-0 md:pt-1 md:pb-0 relative">
            {/* Glassmorphism Border Frame - spans full navbar width */}
            <div
              className="relative w-full rounded-lg overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.4)'
              }}
            >

              {/* Inner content container with minimal padding for larger preview */}
              <div className="p-2 sm:p-3 md:p-4">
                {/* Full width container - no max-width constraint */}
                <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '1379/678' }}>
                  <div
                    className="relative w-full rounded-lg overflow-hidden bg-[#0B0B0B]"
                    style={{
                      aspectRatio: '1379/714'
                    }}
                  >
                    {/* Inner content container */}
                    <div className="relative w-full h-full bg-[#0B0B0B] rounded-md overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            opacity: { duration: 0.3 },
                            y: { duration: 0.4 }
                          }}
                          className="w-full h-full"
                        >
                          <Image
                            src={activeTabData.imageUrl}
                            alt={`${activeTabData.label} preview`}
                            width={1280}
                            height={640}
                            className="w-full h-full object-contain"
                            priority={activeTab === tabsData[0].id}
                          />
                        </motion.div>
                      </AnimatePresence>


                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fade overlay at bottom - positioned over entire preview section */}
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 h-20 sm:h-32"
              style={{
                background: isMobile
                  ? 'linear-gradient(to top, #141414 0%, rgba(20, 20, 20, 0.6) 30%, rgba(20, 20, 20, 0.3) 60%, transparent 100%)'
                  : 'linear-gradient(to top, #141414 0%, rgba(20, 20, 20, 0.9) 40%, rgba(20, 20, 20, 0.5) 70%, transparent 100%)'
              }}
            />
          </div>

        </div> {/* Close navbar width container */}
      </div> {/* Close full width container */}
    </section>
  );
}
