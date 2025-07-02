'use client'

import { motion, useAnimation, useInView, type Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Individual Card component with its own scroll detection
const AnimatedCard = ({
    iconSrc,
    iconAlt,
    title,
    description,
    className = 'md:gap-[48px]',
    delay = 0
}: {
    iconSrc: string
    iconAlt: string
    title: string
    description: string
    className?: string
    delay?: number
}) => {
    const cardRef = useRef(null)
    const cardControls = useAnimation()

    // State for responsive behavior based on 50% screen width
    const [isMobileView, setIsMobileView] = useState(false)

    // Effect to handle window resize and determine if animations should be disabled
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            const screenWidth = window.screen.width
            // Disable animations when window is 50% or less of screen width
            setIsMobileView(width <= screenWidth * 0.5)
        }

        // Set initial values
        handleResize()

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Detect when this specific card comes into view (once only)
    const cardInView = useInView(cardRef, {
        amount: 0, // Trigger as soon as any part of the card is visible
        margin: "0px 0px -100px 0px", // Trigger 100px before the card enters viewport
        once: true // Only trigger once, don't reset
    })

    // Card animation variants with smoother, longer animation (no fade) - disabled in mobile view
    const cardVariants: Variants = {
        hidden: {
            y: isMobileView ? 0 : 60, // No slide animation in mobile view
            scale: isMobileView ? 1 : 0.95 // No scale animation in mobile view
        },
        visible: {
            y: 0,
            scale: 1,
            transition: {
                duration: isMobileView ? 0 : 0.8, // No duration in mobile view
                delay: isMobileView ? 0 : delay, // No delay in mobile view
                ease: "easeInOut"
            }
        }
    }

    // Handle scroll-based animation for this card
    useEffect(() => {
        if (cardInView) {
            cardControls.start("visible")
        } else {
            cardControls.start("hidden")
        }
    }, [cardInView, cardControls])

    return (
        <motion.div
            ref={cardRef}
            animate={cardControls}
            variants={cardVariants}
            initial="hidden"
            className={`flex flex-col items-start justify-between gap-8 border border-[#E8E8E8] bg-[#FCFCFC] p-4 ${className}`}
        >
            <Image src={iconSrc} alt={iconAlt} width={65} height={65} className='aspect-square w-full max-w-[40px] shrink-0 sm:max-w-[56px]' />
            <div className=''>
                <h3 className='font-britti-sans text-[24px] font-[400] leading-[1] tracking-tighter text-c-black md:text-[32px]' dangerouslySetInnerHTML={{ __html: title }} />
                <p className='mt-2 font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:text-[16px]' dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </motion.div>
    )
}

const GainVisibility = () => {
    // Refs and controls for scroll-based animation
    const textRef = useRef(null)
    const bottomVisualRef = useRef(null)

    // Detect when text comes into view
    const textInView = useInView(textRef, {
        amount: 0.3, // Trigger when 30% visible
        margin: "0px 0px 0px 0px"
    })

    // Detect when bottom visual element comes into view
    const bottomVisualInView = useInView(bottomVisualRef, {
        amount: 0.1, // Trigger when 10% visible (more sensitive)
        margin: "0px 0px 0px 0px",
        once: false // Allow reset when out of view
    })

    const textControls = useAnimation()
    const bottomVisualControls = useAnimation()
    const bottomImageControls = useAnimation()
    const rectangle1Controls = useAnimation()
    const rectangle2Controls = useAnimation()

    // Animation variants for subtle slide-up effect
    const textVariants: Variants = {
        hidden: {
            y: 30, // Shorter distance than other animations
            opacity: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6, // Faster than other animations
                ease: "easeOut"
            }
        }
    }

    // Animation variants for bottom visual container (no movement)
    const bottomVisualVariants: Variants = {
        hidden: {},
        visible: {}
    }

    // Animation variants for bottom image (slide from left to final position)
    const bottomImageVariants: Variants = {
        hidden: {
            x: -30 // Start 30px to the left
        },
        visible: {
            x: 0, // End at original position
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
            }
        }
    }

    // Animation variants for rectangles (width shrinking)
    const rectangleVariants: Variants = {
        hidden: {
            width: "var(--start-width)", // Start at larger width
            transformOrigin: "right" // Shrink from the right side
        },
        visible: {
            width: "var(--final-width)", // Shrink to final smaller width
            transition: {
                duration: 1.0,
                ease: "easeOut",
                delay: 0.4
            }
        }
    }

    // Handle scroll-based animation for text
    useEffect(() => {
        if (textInView) {
            textControls.start("visible")
        } else {
            textControls.start("hidden")
        }
    }, [textInView, textControls])

    // Handle scroll-based animation for bottom visual
    useEffect(() => {
        if (bottomVisualInView) {
            bottomVisualControls.start("visible")
            bottomImageControls.start("visible")
            rectangle1Controls.start("visible")
            rectangle2Controls.start("visible")
        } else {
            bottomVisualControls.start("hidden")
            bottomImageControls.start("hidden")
            rectangle1Controls.start("hidden")
            rectangle2Controls.start("hidden")
        }
    }, [bottomVisualInView, bottomVisualControls, bottomImageControls, rectangle1Controls, rectangle2Controls])

    return (
        <div className='relative flex w-full flex-col items-center justify-center bg-[#FCFCFC] pt-[56px] text-black md:pt-[127px]'>
            <div className='absolute grid h-full w-full grid-cols-3 px-4 md:hidden'>
                <div className='border-l border-[#E8E8E8]' />
                <div className='border-x-[1px] border-[#E8E8E8]' />
                <div className='border-r border-[#E8E8E8]' />
            </div>
            <div className='relative z-[10] w-full max-w-[1440px] px-4'>
                <motion.div
                    ref={textRef}
                    animate={textControls}
                    variants={textVariants}
                    initial="hidden"
                >
                    <h1 className='mb-10 hidden max-w-[1000px] font-britti-sans text-[40px] font-[400] leading-[1] tracking-tight md:mb-6 md:block md:text-[70px] md:leading-[88px] 1300:max-w-none 1300:text-[96px]'>
                        Gain full visibility into pipeline performance, cost, and usage, and <br className='hidden 1300:flex' /> turn insights into better decisions.
                    </h1>
                    <h1 className='mb-10 max-w-[1000px] font-britti-sans text-[40px] font-[400] leading-[.9] tracking-tight md:mb-6 md:hidden md:text-[70px] md:leading-[80px] 1300:max-w-none 1300:text-[96px]'>
                        Gain full visibility into pipeline performance, cost, and usage — and turn insights into better decisions.
                    </h1>
                </motion.div>
                <div className='grid w-full gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
                    <AnimatedCard
                        iconSrc="/images/product/icons/monitor.svg"
                        iconAlt="monitor"
                        title="Compute requirement <br /> predictor"
                        description="Accurately predict how much CPU, RAM, and memory <br /> any pipeline needs for any file size and tools"
                        delay={0}
                    />
                    <AnimatedCard
                        iconSrc="/images/product/icons/monitor-2.svg"
                        iconAlt="monitor-2"
                        title="Bottleneck centre"
                        description="Review compute bottlenecks across your organisation to recognise underutlised instances, slow tools, <br /> and low performance"
                        delay={0}
                    />
                    <AnimatedCard
                        iconSrc="/images/product/icons/eye.svg"
                        iconAlt="eye"
                        title="Democratise pipeline <br /> knowledge"
                        description="Share real-time pipeline status with all team members <br /> for ultimate visibility"
                        delay={0}
                    />
                    <div className='hidden md:flex' />
                    <div className='hidden md:flex' />
                    <AnimatedCard
                        iconSrc="/images/product/icons/phone.svg"
                        iconAlt="phone"
                        title="Runtime calculator"
                        description="Know when your pipeline will finish"
                        className="md:gap-[65px]"
                        delay={0.3}
                    />
                    <div className='hidden md:flex' />
                    <AnimatedCard
                        iconSrc="/images/product/icons/cloude.svg"
                        iconAlt="cloude"
                        title="Cloud cost dashboard"
                        description="Review what is driving your cloud costs - across department to sub-tool level and everything in between"
                        delay={0.3}
                    />
                    <AnimatedCard
                        iconSrc="/images/product/icons/camera.svg"
                        iconAlt="camera"
                        title="System of record"
                        description="Know what analyses you did yesterday, last month,  <br />and years ago"
                        delay={0.3}
                    />
                </div>
            </div>
            <motion.div
                ref={bottomVisualRef}
                animate={bottomVisualControls}
                variants={bottomVisualVariants}
                initial="hidden"
                className='relative h-[216px] w-full md:h-[346px] overflow-visible z-[5]'
            >
                <motion.div
                    animate={bottomImageControls}
                    variants={bottomImageVariants}
                    initial="hidden"
                    className='absolute bottom-[-60px] left-[-180px] md:bottom-[-105px] md:left-[-35px] z-0'
                >
                    <Image src={"/images/product/visuals-assets/engine-shape.webp"} alt='engine-shape.webp' width={600} height={600} className='w-full max-w-[350px] shrink-0 md:max-w-[550px]' />
                </motion.div>
                <div className='absolute bottom-0 right-0 flex w-[133px] flex-col items-end justify-center md:w-[529px]'>
                    <div className='h-[45px] w-[90%] bg-[#FCFCFC] md:h-[54px]' />
                    <div className='h-[55px] w-full bg-[#FCFCFC] md:h-[103px]' />

                </div>
                <motion.div
                    animate={rectangle1Controls}
                    variants={rectangleVariants}
                    initial="hidden"
                    className='absolute bg-[#202020] shrink-0'
                    style={{
                        ['--start-width' as string]: '509px',
                        ['--final-width' as string]: '458px',
                        height: '54px',
                        bottom: '103px',
                        right: '0px'
                    }}
                />
                <motion.div
                    animate={rectangle2Controls}
                    variants={rectangleVariants}
                    initial="hidden"
                    className='absolute bg-[#202020] shrink-0'
                    style={{
                        ['--start-width' as string]: '651px',
                        ['--final-width' as string]: '529px',
                        height: '103px',
                        bottom: '0px',
                        right: '0px'
                    }}
                />
            </motion.div>
        </div>
    )
}

export default GainVisibility
