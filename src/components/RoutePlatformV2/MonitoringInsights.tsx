'use client'
import React from 'react'
import Image from 'next/image'

const MonitoringInsights = () => {

    return (
        <div className='w-full flex justify-center bg-white'>
            <div className='w-full max-w-[1800px] px-6 900:px-8 py-16 md:py-24'>
                <div className="mb-8 md:mb-12 lg:mb-16">
                    <h2 className="font-britti-sans text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.1] tracking-[-0.01em] text-black mb-6">
                        Monitoring Insights for the Worldʼs<br className="hidden sm:block" />
                        <span className="sm:hidden">Most Complex Industries</span>
                        <span className="hidden sm:inline">Most Complex Industries</span>
                    </h2>
                    <p className="font-britti-sans text-sm sm:text-base font-normal leading-[1.4] text-[#888888] max-w-2xl">
                        From automotive to biotech, Tracer brings real-time monitoring and deep system-level insights to the most data-intensive industries.
                    </p>
                </div>
                <div className='w-full mt-6 md:mt-[18px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[0.16fr_0.27fr_0.27fr_0.36fr] gap-4 md:gap-2'>
                    {/* Automotive */}
                    <div className="min-h-[200px] md:min-h-[450px]">
                        <div className="overflow-hidden h-[200px] md:h-[450px]">
                            <Image src={"/platform/m-1.webp"} alt='' width={500} height={500} className='w-full h-full object-cover' style={{objectPosition: 'center 60%'}} />
                        </div>
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>
                            Automotive
                        </h3>
                    </div>
                    {/* Computational Fluid Dynamic */}
                    <div className="min-h-[200px] md:min-h-[450px]">
                        <div className="overflow-hidden h-[200px] md:h-[450px]">
                            <Image src={"/platform/m-2.webp"} alt='' width={500} height={500} className='w-full h-auto object-cover' />
                        </div>
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>
                            Computational Fluid Dynamic
                        </h3>
                    </div>
                    {/* Pharma & Biotech */}
                    <div className="min-h-[200px] md:min-h-[450px]">
                        <div className="overflow-hidden h-[200px] md:h-[450px]">
                            <Image src={"/platform/m-3.webp"} alt='' width={500} height={500} className='w-full h-full object-cover' style={{objectPosition: 'center 60%'}} />
                        </div>
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>
                            Pharma & Biotech
                        </h3>
                    </div>
                    {/* Aerospace */}
                    <div className="min-h-[200px] md:min-h-[450px]">
                        <div className="overflow-hidden h-[200px] md:h-[450px]">
                            <Image src={"/platform/m-4.webp"} alt='' width={500} height={500} className='w-full h-auto object-cover' />
                        </div>
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>
                            Aerospace
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonitoringInsights
