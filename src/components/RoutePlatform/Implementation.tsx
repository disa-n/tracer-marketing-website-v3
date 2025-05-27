'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Implementation = () => {
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

    // Animation variants for text elements (subtle rise, no fade)
    const textVariants = {
        hidden: {
            y: 30,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: 0.2
            }
        }
    }

    const textItemVariants = {
        hidden: {
            y: 30
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    }

    // Animation variants for logo grid (staggered left to right)
    const logoGridVariants = {
        hidden: {
            transition: {
                staggerChildren: 0.2, // Slower stagger
                staggerDirection: -1 // Reverse stagger for hiding
            }
        },
        visible: {
            transition: {
                staggerChildren: 0.2 // Slower left to right stagger
            }
        }
    }

    // Individual logo animation variants with less dramatic starting positions
    const createLogoVariants = (startY: number) => ({
        hidden: {
            y: Math.min(startY * 0.3, 120), // Reduce dramatic effect, cap at 120px
            transition: {
                duration: 1.2, // Slower animation
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        visible: {
            y: 0,
            transition: {
                duration: 1.2, // Slower animation
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
                    className='w-full flex items-start lg:gap-0 gap-4 lg:items-end lg:flex-row flex-col justify-between'
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
                        className='max-w-[450px] text-c-black'
                    >
                        <p className='font-[400] text-sm sm:text-[16px] font-britti-sans leading-[1.15] tracking-tight'>
                            Tracer connects through 1 line of code straight with your kernel-level system. It works instantly once copied into your Docker file or outside the file.
                        </p>
                        <p className='font-[400] mt-2 text-sm sm:text-[16px] font-britti-sans leading-[1.15] tracking-tight'>
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
            <div className='w-full max-w-[1440px] px-4 pt-10 md:pt-12 pb-10 md:pb-24 z-[10]'>
                <h2 className='font-[400] text-[20px] md:text-[32px] text-c-black font-britti-sans text-start md:text-end w-full leading-[1] tracking-tight'>
                    Monitoring insights for the worldʼs most complex industries
                </h2>
                <div className='w-full mt-6 md:mt-[18px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[0.16fr_0.21fr_0.27fr_0.36fr] gap-4 md:gap-2'>
                    <div>
                        <Image src={"/platform/m-1.webp"} alt='' width={500} height={500} className='w-full sm:h-auto h-[136px] md:object-fill object-cover' />
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>Automotive</h3>
                    </div>
                    <div>
                        <Image src={"/platform/m-2.webp"} alt='' width={500} height={500} className='w-full sm:h-auto h-[136px] md:object-fill object-cover' />
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>Computational Fluid Dynamic</h3>
                    </div>
                    <div>
                        <Image src={"/platform/m-3.webp"} alt='' width={500} height={500} className='w-full sm:h-auto h-[136px] md:object-fill object-cover' />
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>Pharma & Biotech</h3>
                    </div>
                    <div>
                        <Image src={"/platform/m-4.webp"} alt='' width={500} height={500} className='w-full sm:h-auto h-[136px] md:object-fill object-cover' />
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>Aerospace</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Implementation
