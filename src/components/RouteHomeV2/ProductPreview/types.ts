// Type definitions for ProductPreview components

export interface TabData {
    id: string;
    label: string;
    imageUrl: string;
}

export type BreakpointType = 'mobile' | 'tablet' | 'desktop';

export interface TabButtonProps {
    tab: TabData;
    isActive: boolean;
    progress: number;
    breakpoint: BreakpointType;
    onClick: (tabId: string, event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface TabNavigationProps {
    tabs: TabData[];
    activeTab: string;
    progress: number;
    onTabClick: (tabId: string, event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ProgressBarProps {
    progress: number;
    isActive: boolean;
}

export interface PreviewContainerProps {
    activeTabData: TabData;
    activeTab: string;
    isMobile: boolean;
}