'use client';

import React, { useState, useEffect, useRef } from 'react';
import TabNavigation from './TabNavigation';
import PreviewContainer from './PreviewContainer';
import { scrollToCenter } from './utils';
import { TabData } from './types';

// Configuration for the ProductPreview module
export const PRODUCT_PREVIEW_CONFIG = {
    autoAdvanceInterval: 8000, // 8 seconds
    progressUpdateInterval: 50, // 50ms for smooth animation
    manualSelectionPause: 20000, // 20 seconds pause after manual selection
    mobileBreakpoint: 640, // sm breakpoint
};

// Tab options data - can be moved to a separate config file if needed
export const TABS_DATA: TabData[] = [
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

interface ProductPreviewModuleProps {
    tabs?: TabData[];
    className?: string;
    autoAdvance?: boolean;
}

/**
 * Complete ProductPreview module with all functionality
 * Modular, reusable, and configurable
 */
export default function ProductPreviewModule({
    tabs = TABS_DATA,
    className = '',
    autoAdvance = true
}: ProductPreviewModuleProps) {
    // State management
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
    const [progress, setProgress] = useState(0);
    const [isAutoAdvancing, setIsAutoAdvancing] = useState(autoAdvance);
    const [isMobile, setIsMobile] = useState(false);

    // Refs for intervals
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Get the currently active tab data and index
    const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);

    // Check if we're on mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < PRODUCT_PREVIEW_CONFIG.mobileBreakpoint);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-advance functionality
    useEffect(() => {
        if (!isAutoAdvancing || isMobile) return;

        // Clear existing intervals
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

        // Start progress animation
        let progressValue = 0;
        progressIntervalRef.current = setInterval(() => {
            progressValue += (PRODUCT_PREVIEW_CONFIG.progressUpdateInterval / PRODUCT_PREVIEW_CONFIG.autoAdvanceInterval) * 100;
            setProgress(progressValue);
        }, PRODUCT_PREVIEW_CONFIG.progressUpdateInterval);

        // Auto-advance to next tab
        intervalRef.current = setInterval(() => {
            setActiveTab(prevTab => {
                const currentIndex = tabs.findIndex(tab => tab.id === prevTab);
                const nextIndex = (currentIndex + 1) % tabs.length;
                return tabs[nextIndex].id;
            });
            setProgress(0);
        }, PRODUCT_PREVIEW_CONFIG.autoAdvanceInterval);

        // Cleanup function
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [activeTab, currentIndex, isAutoAdvancing, isMobile, tabs]);

    // Handle manual tab selection
    const handleTabClick = (tabId: string, event?: React.MouseEvent<HTMLButtonElement>) => {
        setIsAutoAdvancing(false);
        setActiveTab(tabId);
        setProgress(0);

        // Center the clicked tab if it's partially off-screen (mobile only)
        if (event && isMobile) {
            scrollToCenter(tabId, 0);
        }

        // Re-enable auto-advancing after configured pause
        setTimeout(() => {
            setIsAutoAdvancing(true);
        }, PRODUCT_PREVIEW_CONFIG.manualSelectionPause);
    };

    return (
        <div className={`w-full ${className}`}>
            {/* Tab Navigation */}
            <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                progress={progress}
                onTabClick={handleTabClick}
            />

            {/* Preview Container */}
            <PreviewContainer
                activeTabData={activeTabData}
                activeTab={activeTab}
                isMobile={isMobile}
                tabsData={tabs}
            />
        </div>
    );
}