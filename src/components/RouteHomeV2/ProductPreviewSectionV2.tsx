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
    id: 'pipeline-overview',
    label: 'Pipeline Overview',
    imageUrl: '/home/Pipeline-Overview.webp'
  },
  {
    id: 'tool-diagnostics',
    label: 'Tool Diagnostics Preview',
    imageUrl: '/home/Tool-Preview.webp'
  },
  {
    id: 'insights-drilldown',
    label: 'Insights Drilldown',
    imageUrl: '/home/Insights-Drilldown.webp'
  },
  {
    id: 'ai-recommendation',
    label: 'AI Recommendation Engine',
    imageUrl: '/home/AI-Rec.webp'
  },
  {
    id: 'infrastructure-summary',
    label: 'Infrastructure Summary',
    imageUrl: '/home/Infra-Summary.webp'
  },
  {
    id: 'logs-view',
    label: 'Logs View',
    imageUrl: '/home/Logs-View.webp'
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
    <section className="relative bg-[#202020] px-4 py-12 md:px-8 xl:py-20 overflow-hidden">
      <GridLines />
      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Tab Navigation */}
        <div className="mb-8 flex justify-center">
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
                      ? 'text-white'
                      : 'text-[#A0A0A0] hover:text-white'
                    }
                  `}
                >
                  {tab.label}
                </motion.button>

                {/* Active tab underline with progress */}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-600">
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

        {/* Outer Container - Responsive */}
        <div className="w-full flex justify-center">
          <div className="bg-[#202020] relative w-full max-w-[1379px] border-4 border-[#404040] rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
               style={{ aspectRatio: '1379/724' }}>
            {/* Inner Preview Box */}
            <div className="bg-[#141414] absolute inset-0 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-2 md:p-4">
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
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={activeTabData.imageUrl}
                      alt={`${activeTabData.label} preview`}
                      width={1280}
                      height={640}
                      className="max-w-full max-h-full object-contain"
                      priority={activeTab === tabsData[0].id}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
