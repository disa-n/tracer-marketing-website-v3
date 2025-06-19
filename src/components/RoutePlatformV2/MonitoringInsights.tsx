'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, type Variants } from 'framer-motion'
import Image from 'next/image'

const MonitoringInsights = () => {

    // Refs for monitoring section
    const monitoringRef = useRef(null)

    // Animation controls
    const monitoringImageControls = useAnimation()
    const monitoringTextControls = useAnimation()

    // Scroll direction tracking for monitoring section
    const [lastScrollY, setLastScrollY] = React.useState(0)
    const [scrollDirection, setScrollDirection] = React.useState('down')
    const [hasImageAnimated, setHasImageAnimated] = React.useState(false)

    // Detect when monitoring section comes into view
    const monitoringInView = useInView(monitoringRef, {
        amount: 0.2, // Trigger when 20% visible
        margin: "0px 0px 0px 0px"
    })

    // Track scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down')
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up')
            }
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    // Handle monitoring section animation with separate image and text behavior
    useEffect(() => {
        if (monitoringInView && scrollDirection === 'down' && !hasImageAnimated) {
            // Images: Only trigger when scrolling down and coming into view for the first time
            monitoringImageControls.start("visible")
            setHasImageAnimated(true)
        }

        if (monitoringInView) {
            // Text: Always animate when in view (can reset)
            monitoringTextControls.start("visible")
        } else {
            // Text: Reset when out of view
            monitoringTextControls.start("hidden")
        }
        // Images never reset once animated (only on page refresh)
    }, [monitoringInView, scrollDirection, hasImageAnimated, monitoringImageControls, monitoringTextControls])

    // Animation variants for monitoring section
    const monitoringImageVariants: Variants = {
        hidden: {
            scaleY: 0,
            transition: {
                duration: 0.9,
                ease: "easeInOut"
            }
        },
        visible: {
            scaleY: 1,
            transition: {
                duration: 0.9,
                ease: "easeInOut"
            }
        }
    }

    const labelVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.3
            }
        }
    }

    return (
        <div ref={monitoringRef} className='w-full flex justify-center bg-white'>
            <div className='w-full max-w-[1800px] px-6 900:px-8 py-16 md:py-24'>
                <div className="mb-12 lg:mb-16">
                    <h2 className="font-britti-sans text-[48px] font-normal leading-[52px] tracking-[-0.01em] text-black mb-6">
                        Monitoring Insights For The Worldʼs<br />
                        Most Complex Industries
                    </h2>
                    <p className="font-britti-sans text-[16px] font-normal leading-[20px] text-[#888888] max-w-2xl">
                        Get a closer look at the core features powering real-time observability, cost tracking, and smarter pipeline decisions.
                    </p>
                </div>
                <div className='w-full mt-6 md:mt-[18px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[0.16fr_0.27fr_0.27fr_0.36fr] gap-4 md:gap-2'>
                    {/* Static container for Automotive - stays at final expanded size */}
                    <div className="min-h-[200px] md:min-h-[450px]">
                        <motion.div
                            animate={monitoringImageControls}
                            variants={monitoringImageVariants}
                            initial="hidden"
                            className="overflow-hidden origin-top"
                        >
                            <Image src={"/platform/m-1.webp"} alt='' width={500} height={500} className='w-full h-auto object-cover' />
                        </motion.div>
                        <motion.h3
                            animate={monitoringTextControls}
                            variants={labelVariants}
                            initial="hidden"
                            className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'
                        >
                            Automotive
                        </motion.h3>
                    </div>
                    {/* Static container for Computational Fluid Dynamic - stays at final expanded size */}
                    <div className="min-h-[200px] md:min-h-[450px]">
                        <motion.div
                            animate={monitoringImageControls}
                            variants={monitoringImageVariants}
                            initial="hidden"
                            className="overflow-hidden origin-top"
                        >
                            <Image src={"/platform/m-2.webp"} alt='' width={500} height={500} className='w-full h-auto object-cover' />
                        </motion.div>
                        <motion.h3
                            animate={monitoringTextControls}
                            variants={labelVariants}
                            initial="hidden"
                            className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'
                        >
                            Computational Fluid Dynamic
                        </motion.h3>
                    </div>
                    {/* Static container for Pharma & Biotech - stays at final expanded size */}
                    <div className="min-h-[200px] md:min-h-[450px]">
                        <motion.div
                            animate={monitoringImageControls}
                            variants={monitoringImageVariants}
                            initial="hidden"
                            className="overflow-hidden origin-top"
                        >
                            <Image src={"/platform/m-3.webp"} alt='' width={500} height={500} className='w-full h-auto object-cover' />
                        </motion.div>
                        <motion.h3
                            animate={monitoringTextControls}
                            variants={labelVariants}
                            initial="hidden"
                            className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'
                        >
                            Pharma & Biotech
                        </motion.h3>
                    </div>
                    {/* Static container for Aerospace - stays at final expanded size */}
                    <div className="min-h-[200px] md:min-h-[450px]">
                        <motion.div
                            animate={monitoringImageControls}
                            variants={monitoringImageVariants}
                            initial="hidden"
                            className="overflow-hidden origin-top"
                        >
                            <Image src={"/platform/m-4.webp"} alt='' width={500} height={500} className='w-full h-auto object-cover' />
                        </motion.div>
                        <motion.h3
                            animate={monitoringTextControls}
                            variants={labelVariants}
                            initial="hidden"
                            className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'
                        >
                            Aerospace
                        </motion.h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonitoringInsights
