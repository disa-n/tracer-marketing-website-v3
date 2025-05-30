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

const NavigationBar = () => {
    const { openDemo } = useDemo();

    const handleDemoClick = () => {
        openDemo();
    };

    return (
        <div className='w-full flex items-center px-4 pt-4 justify-center fixed top-0 left-0 z-[200] text-black'>
            <div className='w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] bg-[#303030]/50 backdrop-blur-[12px] flex items-center justify-between h-[65px] p-2'>
                <Link href={"/"}>
                    <Image src={"/shared/tracer-logo.png"} alt='tracer-logo.png' width={150} height={50} className='w-full shrink-0 max-w-[123px]' />
                </Link>

                {/* Desktop Navigation */}
                <div className='h-full hidden 800:flex items-center justify-center gap-10'>
                    <div className='flex items-center justify-center h-full gap-8 !font-[400] font-britti-sans text-base text-[#FCFCFC]'>
                        <Link href={"/platform"} className='hover:text-white/60 transition-all'>
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
                    <div className="flex items-center gap-4 h-full">
                        {/* Try for Free button wrapper */}
                        <div className="h-full">
                            <Link
                                href="https://sandbox.tracer.cloud/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-full font-britti-sans text-base !font-[400] cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-8"
                            >
                                Try for Free
                            </Link>
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
                <Sheet>
                    <SheetTrigger asChild>
                        <button className='flex 800:hidden'>
                            <Image src={"/shared/menu.svg"} alt='menu' width={24} height={24} />
                        </button>
                    </SheetTrigger>
                    <SheetContent side={"right"} className='w-full'>
                        <SheetHeader>
                            <SheetTitle>
                                <Image src={"/shared/tracer-logo.png"} alt='tracer-logo.png' width={150} height={50} className='w-full shrink-0 max-w-[123px]' />
                            </SheetTitle>
                        </SheetHeader>
                        <div className='flex flex-col gap-6 px-4 pt-8'>
                            <Link href={"/platform"} className='font-britti-sans text-base font-[400] text-c-black'>
                                Product
                            </Link>
                            <Link href={"/technology"} className='font-britti-sans text-base font-[400] text-c-black'>
                                Technology
                            </Link>
                            <Link href={"/about"} className='font-britti-sans text-base font-[400] text-c-black'>
                                About
                            </Link>
                            <Link href={"/resources"} className='font-britti-sans text-base font-[400] text-c-black'>
                                Resources
                            </Link>
                        </div>
                        <SheetFooter className="flex flex-col gap-4 px-4 pb-4">
                            <Link
                                href="https://sandbox.tracer.cloud/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='h-[49px] font-britti-sans !font-[400] cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-8'
                            >
                                Try for Free
                            </Link>
                            <button
                                onClick={handleDemoClick}
                                className='h-[49px] font-britti-sans !font-[400] cursor-pointer bg-c-black flex items-center justify-center text-off-white px-8'
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

