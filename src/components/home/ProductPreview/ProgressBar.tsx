import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
    progress: number;
    isActive: boolean;
}

/**
 * Reusable progress bar component for tab indicators
 * Shows animated progress bar under active tabs
 */
export default function ProgressBar({ progress, isActive }: ProgressBarProps) {
    if (!isActive) return null;

    return (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#303030]">
            <motion.div
                className="h-full bg-white"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
            />
        </div>
    );
}