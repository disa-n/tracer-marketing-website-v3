import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';
import { getTabButtonStyles } from './utils';

interface TabData {
    id: string;
    label: string;
    imageUrl: string;
}

interface TabButtonProps {
    tab: TabData;
    isActive: boolean;
    progress: number;
    breakpoint: 'mobile' | 'tablet' | 'desktop';
    onClick: (tabId: string, event?: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Reusable tab button component with progress indicator
 * Handles different responsive breakpoints and styling
 */
export default function TabButton({
    tab,
    isActive,
    progress,
    breakpoint,
    onClick
}: TabButtonProps) {
    const { buttonClasses, containerClasses } = getTabButtonStyles(breakpoint, isActive);

    return (
        <div key={tab.id} className={containerClasses}>
            <motion.button
                onClick={(e) => onClick(tab.id, e)}
                data-tab-id={tab.id}
                className={buttonClasses}
            >
                {tab.label}
            </motion.button>

            <ProgressBar progress={progress} isActive={isActive} />
        </div>
    );
}