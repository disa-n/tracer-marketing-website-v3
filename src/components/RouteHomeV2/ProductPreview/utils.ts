// Utility functions for ProductPreviewSection

/**
 * Centers a tab button in its scrollable container
 * @param tabId - The ID of the tab to center
 * @param delay - Optional delay before centering (default: 100ms)
 */
export const scrollToCenter = (tabId: string, delay: number = 100): void => {
    setTimeout(() => {
        const targetButton = document.querySelector(`[data-tab-id="${tabId}"]`);
        if (targetButton) {
            const container = targetButton.closest('.overflow-x-auto');
            if (container) {
                const containerRect = container.getBoundingClientRect();
                const buttonRect = targetButton.getBoundingClientRect();
                const containerCenter = containerRect.left + containerRect.width / 2;
                const buttonCenter = buttonRect.left + buttonRect.width / 2;
                const scrollOffset = buttonCenter - containerCenter;

                container.scrollBy({
                    left: scrollOffset,
                    behavior: 'smooth'
                });
            }
        }
    }, delay);
};

/**
 * Gets the appropriate CSS classes for tab buttons based on breakpoint
 * @param breakpoint - The responsive breakpoint ('mobile' | 'tablet' | 'desktop')
 * @param isActive - Whether the tab is currently active
 * @returns Object containing button and text classes
 */
export const getTabButtonStyles = (
    breakpoint: 'mobile' | 'tablet' | 'desktop',
    isActive: boolean
) => {
    const baseClasses = 'font-britti-sans transition-colors duration-300 ease-in-out relative cursor-pointer whitespace-nowrap';

    const activeClasses = isActive ? 'text-white' : 'text-[#888888] hover:text-white';

    const breakpointClasses = {
        mobile: 'text-sm pb-3',
        tablet: 'text-sm md:text-base pb-3 md:pb-2 px-1 md:px-0',
        desktop: 'text-base xl:text-lg pb-2'
    };

    return {
        buttonClasses: `${baseClasses} ${breakpointClasses[breakpoint]} ${activeClasses}`,
        containerClasses: breakpoint === 'mobile' ? 'relative flex-shrink-0' : 'relative'
    };
};

/**
 * Gets container classes for different responsive breakpoints
 * @param breakpoint - The responsive breakpoint
 * @returns CSS classes for the container
 */
export const getTabContainerStyles = (breakpoint: 'mobile' | 'tablet' | 'desktop') => {
    const containerStyles = {
        mobile: 'sm:hidden w-full px-4',
        tablet: 'hidden sm:flex lg:hidden flex-wrap justify-center gap-x-4 gap-y-6 max-w-2xl px-4',
        desktop: 'hidden lg:flex justify-center gap-8 xl:gap-12 2xl:gap-16'
    };

    return containerStyles[breakpoint];
};

/**
 * Gets inner container classes for mobile scrollable tabs
 * @returns CSS classes for the scrollable container
 */
export const getMobileScrollContainerStyles = () => {
    return 'overflow-x-auto scrollbar-hide';
};

/**
 * Gets flex container classes for mobile tabs
 * @returns CSS classes for the flex container
 */
export const getMobileFlexContainerStyles = () => {
    return 'flex gap-6 min-w-max px-2';
};