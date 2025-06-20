'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GridLinesLight } from '@/components/shared/GridLines';

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
    label: 'Anomaly Detection',
    imageUrl: '/home/Pipeline-Overview.webp'
  },
  {
    id: 'tool-level-insights',
    label: 'Tool-Level Insights',
    imageUrl: '/home/Tool-Preview.webp'
  },
  {
    id: 'run-by-run-clarity',
    label: 'Run-by-Run Clarity',
    imageUrl: '/home/Insights-Drilldown.webp'
  },
  {
    id: 'smart-recommendations',
    label: 'Smart Recommendations',
    imageUrl: '/home/AI-Rec.webp'
  },
  {
    id: 'infra-cost-breakdown',
    label: 'Infra Cost Breakdown',
    imageUrl: '/home/Infra-Summary.webp'
  },
  {
    id: 'unified-log-search',
    label: 'Unified Log Search',
    imageUrl: '/home/unified-logs.webp'
  }
];

export default function ProductPreviewSectionV2() {
  // State to manage the currently selected tab
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].id);
  const [progress, setProgress] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);

  // Refs for intervals
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get the currently active tab data and index
  const activeTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0];
  const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);

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
        return prev + (100 / (5000 / 50)); // 5 seconds total, update every 50ms
      });
    }, 50);

    // Auto-advance to next feature after 5 seconds
    intervalRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % tabsData.length;
      setActiveTab(tabsData[nextIndex].id);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [activeTab, currentIndex, isAutoAdvancing]);

  // Handle manual tab selection
  const handleTabClick = (tabId: string) => {
    setIsAutoAdvancing(false);
    setActiveTab(tabId);
    setProgress(0);

    // Re-enable auto-advancing after manual selection
    setTimeout(() => {
      setIsAutoAdvancing(true);
    }, 100);
  };

  return (
    <section className="relative bg-[#FCFCFC] px-3 sm:px-4 py-0 xl:py-0 -mt-4 sm:-mt-8 lg:-mt-12 overflow-hidden">
      <GridLinesLight />
      <div className="relative z-10 max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] mx-auto">

        {/* Tab Navigation */}
        <div className="mb-4 flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            {tabsData.map((tab) => (
              <div key={tab.id} className="relative">
                <motion.button
                  onClick={() => handleTabClick(tab.id)}
                  className={`
                    font-britti-sans text-sm md:text-base lg:text-lg
                    transition-colors duration-300 ease-in-out
                    relative pb-2 cursor-pointer
                    ${activeTab === tab.id
                      ? 'text-[#202020]'
                      : 'text-[#888888] hover:text-[#202020]'
                    }
                  `}
                >
                  {tab.label}
                </motion.button>

                {/* Active tab underline with progress */}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8E8E8]">
                    <motion.div
                      className="h-full bg-[#202020]"
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

        {/* Full Width Black Container */}
        <div className="w-full bg-[#0B0B0B] rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)] py-6 md:py-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[1300px] rounded-lg overflow-hidden border border-[#474747]"
                 style={{ aspectRatio: '1379/724' }}>
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
    </section>
  );
}
