'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

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

    // Animation controls
    const textControls = useAnimation()
    const logoControls = useAnimation()

    // Detect when section comes into view - single trigger for all animations
    const sectionInView = useInView(sectionRef, {
        amount: 0.1, // Trigger when 10% visible
        margin: "0px 0px 0px 0px"
    })

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

    // Animation variants for text elements (subtle rise, no fade) - disabled in mobile view
    const textVariants = {
        hidden: {
            y: isMobileView ? 0 : 30,
            transition: {
                duration: isMobileView ? 0 : 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        visible: {
            y: 0,
            transition: {
                duration: isMobileView ? 0 : 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: isMobileView ? 0 : 0.2
            }
        }
    }

    const textItemVariants = {
        hidden: {
            y: isMobileView ? 0 : 30
        },
        visible: {
            y: 0,
            transition: {
                duration: isMobileView ? 0 : 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    }

    // Animation variants for logo grid (staggered left to right) - disabled in mobile view
    const logoGridVariants = {
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
    const createLogoVariants = (startY: number) => ({
        hidden: {
            y: isMobileView ? 0 : Math.min(startY * 0.3, 120), // No slide animation in mobile view
            transition: {
                duration: isMobileView ? 0 : 1.2, // No duration in mobile view
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        visible: {
            y: 0,
            transition: {
                duration: isMobileView ? 0 : 1.2, // No duration in mobile view
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    })


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

        </div>
    )
}

export default Implementation
