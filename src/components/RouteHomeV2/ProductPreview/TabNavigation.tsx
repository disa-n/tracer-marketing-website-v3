import React from 'react';
import TabButton from './TabButton';
import {
    getTabContainerStyles,
    getMobileScrollContainerStyles,
    getMobileFlexContainerStyles
} from './utils';

interface TabData {
    id: string;
    label: string;
    imageUrl: string;
}

interface TabNavigationProps {
    tabs: TabData[];
    activeTab: string;
    progress: number;
    onTabClick: (tabId: string, event?: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Complete tab navigation component with responsive layouts
 * Handles mobile, tablet, and desktop breakpoints
 */
export default function TabNavigation({
    tabs,
    activeTab,
    progress,
    onTabClick
}: TabNavigationProps) {
    return (
        <div className="mb-6 sm:mb-10 lg:mb-12 xl:mb-16 2xl:mb-18 flex justify-center">
            {/* Small Mobile: swipable single row (< 640px) */}
            <div className={getTabContainerStyles('mobile')}>
                <div className={getMobileScrollContainerStyles()}>
                    <div className={getMobileFlexContainerStyles()}>
                        {tabs.map((tab) => (
                            <TabButton
                                key={tab.id}
                                tab={tab}
                                isActive={activeTab === tab.id}
                                progress={progress}
                                breakpoint="mobile"
                                onClick={onTabClick}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Tablet: flexible 2-row layout (640px - 1024px) */}
            <div className={getTabContainerStyles('tablet')}>
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.id}
                        tab={tab}
                        isActive={activeTab === tab.id}
                        progress={progress}
                        breakpoint="tablet"
                        onClick={onTabClick}
                    />
                ))}
            </div>

            {/* Desktop: single row (≥ 1024px) */}
            <div className={getTabContainerStyles('desktop')}>
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.id}
                        tab={tab}
                        isActive={activeTab === tab.id}
                        progress={progress}
                        breakpoint="desktop"
                        onClick={onTabClick}
                    />
                ))}
            </div>
        </div>
    );
}