'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, type Variants } from 'framer-motion'

const Implementation = () => {
    // State for responsive behavior based on 50% screen width
    const [isMobileView, setIsMobileView] = useState(false)

    // Effect to handle window resize and determine if animations should be disabled
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            // Disable animations on mobile devices (width <= 768px) or when window is 50% or less of screen width
            const isMobileDevice = width <= 768;
            const isNarrowWindow = width <= (window.screen.width * 0.5);
            setIsMobileView(isMobileDevice || isNarrowWindow)
        }

        // Set initial values
        handleResize()

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Single ref and controls for unified animation trigger
    const sectionRef = useRef(null)
    const monitoringRef = useRef(null)

    // Animation controls
    const textControls = useAnimation()
    const logoControls = useAnimation()
    const monitoringImageControls = useAnimation()
    const monitoringTextControls = useAnimation()

    // Scroll direction tracking for monitoring section
    const [lastScrollY, setLastScrollY] = React.useState(0)
    const [scrollDirection, setScrollDirection] = React.useState('down')
    const [hasImageAnimated, setHasImageAnimated] = React.useState(false)

    // Detect when section comes into view - single trigger for all animations
    const sectionInView = useInView(sectionRef, {
        amount: 0.1, // Trigger when 10% visible
        margin: "0px 0px 0px 0px"
    })

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

    // Handle all animations simultaneously
    useEffect(() => {
        if (sectionInView) {
            // Start all animations at the same time
            textControls.start("visible")
            logoControls.start("visible")
        } else {
            // Reset all animations when out of view
            textControls.start("hidden")
            logoControls.start("hidden")
        }
    }, [sectionInView, textControls, logoControls])

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

    // Animation variants for text elements (subtle rise, no fade) - disabled in mobile view
    const textVariants: Variants = {
        hidden: {
            y: isMobileView ? 0 : 30,
            transition: {
                duration: isMobileView ? 0 : 0.8,
                ease: "easeInOut"
            }
        },
        visible: {
            y: 0,
            transition: {
                duration: isMobileView ? 0 : 0.8,
                ease: "easeInOut",
                staggerChildren: isMobileView ? 0 : 0.2
            }
        }
    }

    const textItemVariants: Variants = {
        hidden: {
            y: isMobileView ? 0 : 30
        },
        visible: {
            y: 0,
            transition: {
                duration: isMobileView ? 0 : 0.8,
                ease: "easeInOut"
            }
        }
    }

    // Animation variants for logo grid (staggered left to right) - disabled in mobile view
    const logoGridVariants: Variants = {
        hidden: {
            transition: {
                staggerChildren: isMobileView ? 0 : 0.2, // No stagger in mobile view
                staggerDirection: -1
            }
        },
        visible: {
            transition: {
                staggerChildren: isMobileView ? 0 : 0.2 // No stagger in mobile view
            }
        }
    }

    // Individual logo animation variants with less dramatic starting positions - disabled in mobile view
    const createLogoVariants = (startY: number): Variants => ({
        hidden: {
            y: isMobileView ? 0 : Math.min(startY * 0.3, 120), // No slide animation in mobile view
            transition: {
                duration: isMobileView ? 0 : 1.2, // No duration in mobile view
                ease: "easeInOut"
            }
        },
        visible: {
            y: 0,
            transition: {
                duration: isMobileView ? 0 : 1.2, // No duration in mobile view
                ease: "easeInOut"
            }
        }
    })

    // Individual monitoring image variants (expand from collapsed state - never reset) - disabled in mobile view
    const monitoringImageVariants: Variants = {
        hidden: {
            scaleY: isMobileView ? 1 : 0.05, // No scale animation in mobile view
            transition: {
                duration: isMobileView ? 0 : 0.8, // No duration in mobile view
                ease: "easeOut"
            }
        },
        visible: {
            scaleY: 1,
            transition: {
                duration: isMobileView ? 0 : 0.8, // No duration in mobile view
                ease: "easeOut"
            }
        }
    }

    // Text label variants (fade in - can reset) - disabled in mobile view
    const labelVariants: Variants = {
        hidden: {
            opacity: isMobileView ? 1 : 0, // No fade animation in mobile view
            transition: {
                duration: isMobileView ? 0 : 0.6, // No duration in mobile view
                ease: "easeOut"
            }
        },
        visible: {
            opacity: 1,
            transition: {
                duration: isMobileView ? 0 : 0.6, // No duration in mobile view
                ease: "easeOut"
            }
        }
    }
    return (
        <div ref={sectionRef} className='w-full flex items-center justify-center border-b border-[#E8E8E8] flex-col relative text-black bg-c-off-white'>
            <div className='w-full h-full max-w-[1140px] grid grid-cols-3 absolute top-0 900:px-0 px-4'>
                <div className='border-l border-[#E8E8E8]' />
                <div className='border-x-[1px] border-[#E8E8E8]' />
                <div className='border-r border-[#E8E8E8]' />
            </div>
            <div className='w-full max-w-[1440px]  text-black z-[10] px-4 flex gap-6 md:gap-[82px] pt-24 md:pt-[162px] pb-4 flex-col items-center justify-center'>
                <motion.div
                    animate={textControls}
                    variants={textVariants}
                    className='w-full flex items-start lg:gap-0 gap-4 lg:items-baseline lg:flex-row flex-col justify-between'
                >
                    <motion.h2
                        variants={textItemVariants}
                        className='font-[400] font-britti-sans text-[70px] md:block hidden xl:text-[96px] leading-[0.9] text-c-black tracking-tight'
                    >
                        Our implementation <br /> takes 1 line of code
                    </motion.h2>
                    <motion.h2
                        variants={textItemVariants}
                        className='font-[400] text-[40px] md:hidden font-britti-sans  leading-[0.85] text-c-black tracking-tighter'
                    >
                        Our implemen- <br /> tation takes 1 line <br /> of code
                    </motion.h2>
                    <motion.div
                        variants={textItemVariants}
                        className='max-w-[450px] text-c-black lg:mt-0 mt-4 relative -top-8'
                    >
                        <p className='font-[400] text-sm sm:text-[16px] font-britti-sans leading-[1.15] tracking-tight'>
                            Tracer connects through 1 line of code straight to your kernel-level system. It works instantly once copied into your Docker file or outside the file.
                        </p>
                        <p className='font-[400] mt-3 text-sm sm:text-[16px] font-britti-sans leading-[1.15] tracking-tight'>
                            Our integration platform enables real-time sharing of DevOps findings across all your systems, apps, and services, to support AI adoption and enable a new dawn of science.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    animate={logoControls}
                    variants={logoGridVariants}
                    className='md:gap-6 grid grid-cols-3 lg:grid-cols-6 w-full'
                >
                    <div className='lg:flex hidden' />
                    <div className='lg:flex hidden' />
                    <div className='lg:flex hidden' />
                    <div className='lg:flex hidden' />
                    {/* Bash logo - starts from position 421px down */}
                    <motion.div
                        variants={createLogoVariants(421)}
                        className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'
                    >
                        <Image src={"/platform/bash.svg"} alt='bash' width={200} height={80} className='w-full max-w-[59px] md:max-w-[111px]' />
                    </motion.div>
                    {/* Box-split logo - starts from position 445px down */}
                    <motion.div
                        variants={createLogoVariants(445)}
                        className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'
                    >
                        <Image src={"/platform/box-split.svg"} alt='box-split' width={200} height={80} className='w-full max-w-[47px] md:max-w-[76px]' />
                    </motion.div>
                    {/* Airflow logo - starts from position 668px down */}
                    <motion.div
                        variants={createLogoVariants(668)}
                        className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'
                    >
                        <Image src={"/platform/air-flow.svg"} alt='air-flow' width={200} height={80} className='w-full max-w-[59px] md:max-w-[126px]' />
                    </motion.div>
                    {/* AWS logo - starts from position 692px down */}
                    <motion.div
                        variants={createLogoVariants(692)}
                        className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'
                    >
                        <Image src={"/platform/aws-sv.svg"} alt='aws-sv' width={200} height={80} className='w-full max-w-[45px] md:max-w-[88px]' />
                    </motion.div>
                    {/* Nextflow logo - starts from position 716px down */}
                    <motion.div
                        variants={createLogoVariants(716)}
                        className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'
                    >
                        <Image src={"/platform/next-flow.svg"} alt='next-flow' width={200} height={80} className='w-full max-w-[64px] md:max-w-[124px]' />
                    </motion.div>
                    <div className='lg:flex hidden' />
                    <div className='lg:flex hidden' />
                    {/* Ununto logo - starts from position 740px down */}
                    <motion.div
                        variants={createLogoVariants(740)}
                        className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'
                    >
                        <Image src={"/platform/ununto.svg"} alt='ununto' width={200} height={80} className='w-full max-w-[60px] md:max-w-[113px]' />
                    </motion.div>
                </motion.div>
            </div>
            <div
                ref={monitoringRef}
                className='w-full max-w-[1440px] px-4 pt-10 md:pt-12 pb-10 md:pb-24 z-[10]'
            >
                <motion.h2
                    animate={monitoringTextControls}
                    variants={labelVariants}
                    initial="hidden"
                    className='font-[400] text-[20px] md:text-[32px] text-c-black font-britti-sans text-start md:text-end w-full leading-[1] tracking-tight'
                >
                    Monitoring insights for the worldʼs most complex industries
                </motion.h2>
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

export default Implementation
