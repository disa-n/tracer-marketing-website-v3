'use client'

import { motion, useAnimation, useInView, type Variants } from 'framer-motion'
import Image from "next/image"
import { useEffect, useRef, useState } from 'react'
import { useDemo } from '../ScheduleDemo'

const Monitoring = () => {
    // Demo functionality
    const { openDemo } = useDemo()

    // Refs and controls for scroll-based animation
    const containerRef = useRef(null)
    const endTriggerRef = useRef(null)

    // Track window width to disable animation reset on small screens
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setWindowWidth(window.innerWidth)
            }
        }

        // Set initial width
        handleResize()

        // Add event listener
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize)
        }

        // Cleanup
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [])

    // Detect when cards come into view
    const cardsVisible = useInView(containerRef, {
        amount: 0.1, // Trigger when 10% visible
        margin: "0px 0px 0px 0px"
    })

    // Detect when we scroll past the end
    const pastEnd = useInView(endTriggerRef, {
        amount: 0,
        margin: "0px 0px -200px 0px" // Trigger when 200px past this point
    })

    const containerControls = useAnimation()

    // Check if screen is mobile device (width <= 768px) or 50% or less of screen width
    const isMobileDevice = windowWidth <= 768;
    const isNarrowWindow = windowWidth <= (typeof window !== 'undefined' ? window.screen.width * 0.5 : 960);
    const isSmallScreen = isMobileDevice || isNarrowWindow

    // Calculate proportional height for cards based on viewport width
    const getCardHeight = () => {
        if (windowWidth <= 960) return '215px'
        if (windowWidth <= 1024) return '215px'
        if (windowWidth <= 1280) return '250px'
        if (windowWidth <= 1440) return '287px'
        // For xxl screens (>1440px), scale proportionally
        // Base ratio: 287px at 1440px = 0.199 ratio
        const baseRatio = 287 / 1440
        const proportionalHeight = Math.min(windowWidth * baseRatio, 400) // Cap at 400px
        return `${Math.round(proportionalHeight)}px`
    }

    // Calculate proportional height for extended background area
    const getExtendedAreaHeight = () => {
        if (windowWidth <= 1024) return '430px'
        if (windowWidth <= 1440) return '574px'
        // For xxl screens (>1440px), scale proportionally
        // Base ratio: 574px at 1440px = 0.399 ratio
        const baseRatio = 574 / 1440
        const proportionalHeight = Math.min(windowWidth * baseRatio, 800) // Cap at 800px
        return `${Math.round(proportionalHeight)}px`
    }

    // Animation variants for staggered slide-up effect with slower transitions
    // Completely disabled on mobile screens
    const containerVariants: Variants = {
        hidden: {
            transition: {
                staggerChildren: isSmallScreen ? 0 : 0.5, // No stagger on small screens
                staggerDirection: -1, // Reverse the stagger order when going to hidden
            }
        },
        visible: {
            transition: {
                staggerChildren: isSmallScreen ? 0 : 0.5, // No stagger on small screens
            }
        }
    }

    // First card has no animation (stays in place as reference point)
    const firstCardVariants: Variants = {
        hidden: {},
        visible: {}
    }

    // Second card slides up into place - completely disabled on mobile screens
    const secondCardVariants: Variants = {
        hidden: {
            y: isSmallScreen ? 0 : 250, // No animation on mobile screens
            transition: {
                duration: isSmallScreen ? 0 : 1.5, // No duration on mobile screens
                ease: "easeOut"
            }
        },
        visible: {
            y: 0, // Final aligned position
            transition: {
                duration: isSmallScreen ? 0 : 1.5, // No duration on mobile screens
                ease: "easeOut"
            }
        }
    }

    // Third card slides up into place - completely disabled on mobile screens
    const thirdCardVariants: Variants = {
        hidden: {
            y: isSmallScreen ? 0 : 500, // No animation on mobile screens
            transition: {
                duration: isSmallScreen ? 0 : 1.5, // No duration on mobile screens
                ease: "easeOut"
            }
        },
        visible: {
            y: 0, // Final aligned position
            transition: {
                duration: isSmallScreen ? 0 : 1.5, // No duration on mobile screens
                ease: "easeOut"
            }
        }
    }

    // Handle scroll-based animation with reverse functionality
    // Completely disabled on mobile screens
    useEffect(() => {
        console.log('Scroll state:', { cardsVisible, pastEnd, windowWidth })

        // Check if screen is mobile device (width <= 768px) or 50% or less of screen width
        const isMobileDevice = windowWidth <= 768;
        const isNarrowWindow = windowWidth <= (window.screen.width * 0.5);
        const isSmallScreen = isMobileDevice || isNarrowWindow

        // On mobile screens, keep animations in visible state (no animations)
        if (isSmallScreen) {
            console.log('Mobile screen detected - animations disabled, keeping visible state')
            containerControls.start("visible")
            return
        }

        // Desktop animation logic
        if (cardsVisible && !pastEnd) {
            console.log('Cards in view - staying visible (aligned)')
            containerControls.start("visible")
        } else if (pastEnd) {
            console.log('Past end - animating to hidden (staggered) - desktop only')
            containerControls.start("hidden")
        } else if (!cardsVisible) {
            console.log('Cards out of view - animating to hidden (staggered) - desktop only')
            containerControls.start("hidden")
        }
    }, [cardsVisible, pastEnd, containerControls, windowWidth])
    return (
        <div ref={containerRef} className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
            <Image src={"/product/assets/monitoting-section-img.png"} alt="monitoting-section-img" width={955} height={800} className="absolute right-0 top-0 w-full max-w-[500px] -translate-y-14 translate-x-32 md:translate-x-20 md:translate-y-0 lg:max-w-[800px] lg:translate-x-32 1300:max-w-[955px] 1300:translate-x-40" />
            <div className='z-[10] w-full border-b border-[#E8E8E8]'>
                {/* Header Section - Transparent background to show background image */}
                <div className='w-full flex justify-center'>
                    <div className='w-full max-w-[1440px] pt-30 px-4 pb-4 md:px-6 md:pb-12 md:pt-14'>
                        <div className='w-full max-w-[685px] text-c-off-white'>
                            <h2 className='font-britti-sans text-[32px] font-[400] leading-[0.9] md:text-[40px]'>
                                One platform from monitoring <br className="hidden sm:flex" /> to insights, for scientists to executives
                            </h2>
                            <p className='mt-4 max-w-[560px] font-britti-sans text-sm font-[400] leading-[1.1] text-c-off-white md:mt-3 md:text-[16px]'>
                                The Tracer Platform empowers teams across Data Science, Engineering,
                                DevOps, and Machine Learning to monitor and optimise everything they build
                                and run in the cloud.
                            </p>
                            <button
                                onClick={openDemo}
                                className='mt-8 h-[48px] w-full cursor-pointer bg-[#E8E8E8] px-8 font-britti-sans text-base font-[400] text-c-black transition-all hover:opacity-80 sm:w-fit md:mt-10'
                            >
                                Talk to an Expert
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cards Container */}
                <motion.div
                    className='grid grid-cols-1 gap-0 h-auto w-full'
                    style={{
                        gridTemplateColumns: windowWidth > 960 ? 'repeat(3, 1fr)' : '1fr'
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    animate={containerControls}
                >
                    {/* First Card - No Animation */}
                    <motion.div className='flex flex-col h-full' variants={firstCardVariants}>
                        <div className='w-full bg-white px-4 pt-4 md:px-3 md:pt-3'>
                            <div className='h-[215px] w-full bg-main-background relative'
                                 style={{
                                     height: getCardHeight()
                                 }}>
                                <Image
                                    src="/product/icons/predict-and-optimise.svg"
                                    alt="Predict and optimise compute requirements"
                                    fill
                                    className="object-cover object-top-left"
                                />
                            </div>
                        </div>
                        <div className='w-full flex flex-col bg-[#FCFCFC] text-black flex-1'>
                            <div className='flex flex-col justify-between gap-12 border-b border-r border-[#E8E8E8] px-4 py-3 md:gap-20 md:p-3 h-full'>
                                <div className='flex w-full items-center justify-between'>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        01–03
                                    </p>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        TRACER PERFORMANCE
                                    </p>
                                </div>
                                <div className="w-full">
                                    <h2 className='font-britti-sans text-[24px] font-[400] leading-[0.9] md:text-[32px]'>
                                        Predict and optimize <br className="sm:hidden" /> compute requirements
                                    </h2>
                                    <p className='mt-2 max-w-[560px] font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:mt-3 md:text-[16px]'>
                                        Forecast the exact running time and compute needs of your pipelines. Further optimize your underutilized instances and increase the usage of AI models in a cost-efficient manner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Second Card - Slide Up Animation */}
                    <motion.div className='flex flex-col h-full' variants={secondCardVariants}>
                        <div className='w-full border-l border-[#E8E8E8] bg-[#FCFCFC] px-4 pt-4 text-black md:px-3 md:pt-3'>
                            <div className='h-[215px] w-full bg-main-background relative'
                                 style={{
                                     height: getCardHeight()
                                 }}>
                                <Image
                                    src="/product/icons/total-visibility.svg"
                                    alt="Total visibility into computational infrastructure"
                                    fill
                                    className="object-cover object-top-left"
                                />
                            </div>
                        </div>
                        <div className='w-full flex flex-col bg-[#FCFCFC] text-black flex-1'>
                            <div className='flex flex-col justify-between gap-12 border-x border-b border-[#E8E8E8] px-4 py-3 md:gap-20 md:p-3 h-full'>
                                <div className='flex w-full items-center justify-between'>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        02–03
                                    </p>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        TRACER INTELLIGENCE
                                    </p>
                                </div>
                                <div className="w-full">
                                    <h2 className='font-britti-sans text-[24px] font-[400] leading-[0.9] md:text-[32px]'>
                                        Total visibility into computational infrastructure
                                    </h2>
                                    <p className='mt-2 max-w-[560px] text-sm font-[400] leading-[1.1] text-c-black md:mt-3 md:text-[16px]'>
                                        Gain real-time, highly granular insights into every workload and process, independent of coding language or framework, including highly parallelised processes across instances
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Third Card - Slide Up Animation */}
                    <motion.div className='flex flex-col h-full' variants={thirdCardVariants}>
                        <div className='w-full border-l border-[#E8E8E8] bg-[#FCFCFC] px-4 pt-4 md:px-3 md:pt-3'>
                            <div className='h-[215px] w-full bg-main-background relative'
                                 style={{
                                     height: getCardHeight()
                                 }}>
                                <Image
                                    src="/platformv2/fix-issues.svg"
                                    alt="Fix issues instantly"
                                    fill
                                    className="object-cover object-top-left"
                                />
                            </div>
                        </div>
                        <div className='w-full flex flex-col bg-[#FCFCFC] text-black flex-1'>
                            <div className='flex flex-col justify-between gap-12 border-x border-b border-[#E8E8E8] px-4 py-3 md:gap-20 md:p-3 h-full'>
                                <div className='flex w-full items-center justify-between'>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        03–03
                                    </p>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        TRACER DEBUG
                                    </p>
                                </div>
                                <div className="w-full">
                                    <h2 className='font-britti-sans text-[24px] font-[400] leading-[0.9] md:text-[32px]'>
                                        Fix issues instantly
                                    </h2>
                                    <p className='mt-2 max-w-[560px] text-sm font-[400] leading-[1.1] text-c-black md:mt-3 md:text-[16px]'>
                                        Gain deep insights into the root causes of bugs across all analyses, recognise the error type, and solve instantly
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* End trigger for reverse animation */}
                <div ref={endTriggerRef} className='w-full h-0'></div>

                {/* White background for extended area */}
                <div className='w-full bg-[#FCFCFC]' style={{ height: getExtendedAreaHeight() }}></div>
            </div>
        </div>
    )
}

export default Monitoring
