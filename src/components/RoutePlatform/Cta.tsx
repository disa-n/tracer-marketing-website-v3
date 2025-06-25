'use client'

import Image from 'next/image'
import React from 'react'
import { useDemo } from '../ScheduleDemo'

const Cta = () => {
    const { openDemo } = useDemo()

    return (
        <div className='flex w-full flex-col items-center justify-center gap-6 bg-[#FCFCFC] text-c-black md:gap-8'>
            <div className='flex w-full flex-col items-start justify-between px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 md:flex-row md:items-end'>
                <div className='flex flex-col items-start'>
                    <p className='font-chakra-petch text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px] font-[400] uppercase leading-[1] text-c-black'>
                        get a personalized demo
                    </p>
                    <h2 className='mt-4 font-britti-sans text-[32px] sm:text-[32px] md:text-[56px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] font-[400] leading-[0.9] tracking-tighter text-c-black sm:leading-[0.8]'>
                        Ready to see Tracer <br className='sm:hidden' /> in action?
                    </h2>
                </div>
                <button
                    onClick={openDemo}
                    className='mt-6 h-[48px] w-full shrink-0 cursor-pointer bg-[#E8E8E8] px-8 font-britti-sans text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base font-[400] text-c-black transition-all hover:opacity-80 md:mt-0 md:w-fit'
                >
                    Talk to an Expert
                </button>
            </div>
            <div className='relative h-[200px] w-full sm:h-[330px]'>
                <div className='absolute right-0 top-0 h-[45px] w-[112px] bg-[#FCFCFC] sm:h-[54px] sm:w-[458px]' />

                <Image src={"/platform/car.webp"} alt='car' width={1500} height={400} className='h-full w-full object-cover' />
            </div>
        </div>
    )
}

export default Cta
