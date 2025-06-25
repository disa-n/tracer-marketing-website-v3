"use client"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/Sheet"
import Image from 'next/image'
import Link from 'next/link'
import { useDemo } from '../ScheduleDemo'
import { useState } from 'react'

const NavigationBar = () => {
    const { openDemo } = useDemo();
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleDemoClick = () => {
        openDemo();
        setIsSheetOpen(false);
    };

    const handleNavLinkClick = () => {
        setIsSheetOpen(false);
    };

    return (
        <div className='w-full flex items-center px-3 sm:px-4 pt-4 justify-center fixed top-0 left-0 z-[200] text-black'>
            <div className={`w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] bg-[#303030]/50 backdrop-blur-[12px] flex items-center justify-between h-[65px] p-2 transition-opacity duration-300 ${isSheetOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Link href={"/"}>
                    <Image src={"/shared/tracer-logo.png"} alt='tracer-logo.png' width={150} height={50} className='w-full shrink-0 max-w-[100px] sm:max-w-[123px]' />
                </Link>

                {/* Desktop Navigation */}
                <div className='h-full hidden 1000:flex items-center justify-center gap-8'>
                    <div className='flex items-center justify-center h-full gap-6 !font-[400] font-britti-sans text-base text-[#FCFCFC]'>
                        <Link href={"/why-monitoring"} className='hover:text-white/60 transition-all'>
                            Why Monitoring
                        </Link>
                        <Link href={"/product"} className='hover:text-white/60 transition-all'>
                            Product
                        </Link>
                        <Link href={"/technology"} className='hover:text-white/60 transition-all'>
                            Technology
                        </Link>
                        <Link href={"/about"} className='hover:text-white/60 transition-all'>
                            About
                        </Link>
                        <Link href={"/resources"} className='hover:text-white/60 transition-all'>
                            Resources
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 h-full">
                        {/* Try for Free button wrapper - Glowing CTA */}
                        <div className="h-full relative group">
                            {/* Outer glow ring - matching hero exactly */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] blur-sm opacity-75 group-hover:opacity-100 animate-glow-pulse transition duration-300"></div>

                            {/* Rainbow gradient border with button inside - matching hero exactly */}
                            <div className="relative h-full bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] p-[2px]">
                                <Link
                                    href="https://sandbox.tracer.cloud/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 h-full font-britti-sans text-base !font-[400] cursor-pointer
                                               bg-[#202020] text-[#FCFCFC] flex items-center justify-center px-8
                                               hover:bg-[#303030] transition-all duration-300
                                               shadow-[0_0_20px_rgba(58,35,237,0.3),0_0_40px_rgba(191,81,152,0.2),0_0_60px_rgba(255,162,49,0.1)]
                                               hover:shadow-[0_0_40px_rgba(58,35,237,0.6),0_0_80px_rgba(191,81,152,0.5),0_0_120px_rgba(255,162,49,0.4)]"
                                >
                                    Try for Free
                                </Link>
                            </div>
                        </div>

                        {/* Get a Demo button */}
                        <button
                            onClick={handleDemoClick}
                            className="h-full font-britti-sans text-base !font-[400] cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-8"
                        >
                            Get a Demo
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <button className='flex 1000:hidden p-1'>
                            <Image src={"/shared/menu-icon.svg"} alt='menu' width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side={"right"} className='w-full bg-[#303030]/90 backdrop-blur-[200px] flex flex-col'>
                        <SheetHeader>
                            <SheetTitle>
                                <Link href={"/"} onClick={handleNavLinkClick}>
                                    <Image src={"/shared/tracer-logo.png"} alt='tracer-logo.png' width={150} height={50} className='w-full shrink-0 max-w-[100px] sm:max-w-[123px]' />
                                </Link>
                            </SheetTitle>
                        </SheetHeader>
                        <div className='flex flex-col flex-grow'></div>
                        <div className='flex flex-col gap-6 sm:gap-8 px-4 pb-8'>
                            <Link href={"/why-monitoring"} className='font-britti-sans text-xl sm:text-2xl font-[400] text-[#FCFCFC] hover:text-white/60 transition-all' onClick={handleNavLinkClick}>
                                Why Monitoring
                            </Link>
                            <Link href={"/product"} className='font-britti-sans text-xl sm:text-2xl font-[400] text-[#FCFCFC] hover:text-white/60 transition-all' onClick={handleNavLinkClick}>
                                Product
                            </Link>
                            <Link href={"/technology"} className='font-britti-sans text-xl sm:text-2xl font-[400] text-[#FCFCFC] hover:text-white/60 transition-all' onClick={handleNavLinkClick}>
                                Technology
                            </Link>
                            <Link href={"/about"} className='font-britti-sans text-xl sm:text-2xl font-[400] text-[#FCFCFC] hover:text-white/60 transition-all' onClick={handleNavLinkClick}>
                                About
                            </Link>
                            <Link href={"/resources"} className='font-britti-sans text-xl sm:text-2xl font-[400] text-[#FCFCFC] hover:text-white/60 transition-all' onClick={handleNavLinkClick}>
                                Resources
                            </Link>
                        </div>
                        <SheetFooter className="flex flex-col gap-4 px-4 pb-4">
                            {/* Mobile Try for Free button - Glowing CTA */}
                            <div className="relative group">
                                {/* Outer glow ring - matching hero exactly */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] blur-sm opacity-75 group-hover:opacity-100 animate-glow-pulse transition duration-300"></div>

                                {/* Rainbow gradient border with button inside - matching hero exactly */}
                                <div className="relative h-[49px] bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] p-[2px]">
                                    <Link
                                        href="https://sandbox.tracer.cloud/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='relative z-10 h-full font-britti-sans !font-[400] cursor-pointer
                                                   bg-[#202020] text-[#FCFCFC] flex items-center justify-center px-8
                                                   hover:bg-[#303030] transition-all duration-300
                                                   shadow-[0_0_20px_rgba(58,35,237,0.3),0_0_40px_rgba(191,81,152,0.2),0_0_60px_rgba(255,162,49,0.1)]
                                                   hover:shadow-[0_0_40px_rgba(58,35,237,0.6),0_0_80px_rgba(191,81,152,0.5),0_0_120px_rgba(255,162,49,0.4)]'
                                        onClick={handleNavLinkClick}
                                    >
                                        Try for Free
                                    </Link>
                                </div>
                            </div>

                            <button
                                onClick={handleDemoClick}
                                className='h-[49px] font-britti-sans !font-[400] cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-8'
                            >
                                Get a Demo
                            </button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

export default NavigationBar;

