import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TabData } from './types';

interface PreviewContainerProps {
    activeTabData: TabData;
    activeTab: string;
    isMobile: boolean;
    tabsData: TabData[];
}

/**
 * Preview container component with glassmorphism styling
 * Displays the active tab's image with smooth transitions
 */
export default function PreviewContainer({
    activeTabData,
    activeTab,
    isMobile,
    tabsData
}: PreviewContainerProps) {
    return (
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
    );
}