"use client"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className='flex w-full flex-col items-center justify-center bg-[#FCFCFC]'>
            <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <div className="flex w-full flex-col items-end justify-between gap-[48px] sm:gap-[72px] pb-3 pt-[32px] md:flex-row md:items-start md:gap-0 md:pb-[168px]">
                    <div className="grid w-full grid-cols-3 gap-4 sm:gap-8 text-c-black md:w-fit md:grid-cols-[240px_224px_144px_200px] md:gap-0">
                        <div className="col-span-3 md:col-span-1">
                            <Image src={"/shared/tracer-logo-black.png"} alt="tracer-logo-black" width={140} height={30} className="w-full max-w-[100px] sm:max-w-[114px]" />
                        </div>
                        <div>
                            <h4 className="font-chakra-petch text-xs sm:text-sm font-[400] uppercase leading-[1] text-[#868686]">
                                Company
                            </h4>
                            <ul className="mt-3 sm:mt-4 space-y-2 font-britti-sans text-[14px] sm:text-[16px] font-[400] leading-[1.2] text-c-black md:mt-10 md:text-[20px]">
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    <Link href="/about">About</Link>
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    <Link href="/resources">Resources</Link>
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    <Link href="https://jobs.ashbyhq.com/tracer">Careers</Link>
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    <Link href="/resources/biweeklyroundupsoverview">Updates</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-chakra-petch text-xs sm:text-sm font-[400] uppercase leading-[1] text-[#868686]">
                                Product
                            </h4>
                            <ul className="mt-3 sm:mt-4 space-y-2 font-britti-sans text-[14px] sm:text-[16px] font-[400] leading-[1.2] text-c-black md:mt-10 md:text-[20px]">
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    <Link href="/why-monitoring">Monitoring</Link>
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    <Link href="/product">Product</Link>
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    <Link href="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:ml-20">
                            <h4 className="font-chakra-petch text-xs sm:text-sm font-[400] uppercase leading-[1] text-[#868686]">
                                Connect
                            </h4>
                            <ul className="mt-3 sm:mt-4 space-y-2 font-britti-sans text-[14px] sm:text-[16px] font-[400] leading-[1.2] text-c-black md:mt-10 md:text-[20px]">
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    <Link href="https://www.linkedin.com/company/tracercloud" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    <Link href="https://github.com/Tracer-Cloud/tracer-client?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">GitHub</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div onClick={scrollToTop} className="flex shrink-0 cursor-pointer items-center justify-center gap-1 transition-all hover:scale-[1.05] hover:opacity-70">
                        <p className="font-chakra-petch text-xs sm:text-sm font-[400] leading-[1.3] text-c-black">
                            BACK TO TOP
                        </p>
                        <Image src={"/platform/arrow-tt.svg"} alt="arrow-tt" width={10} height={10} className="w-full max-w-[6px] sm:max-w-[7.5px] translate-y-[-1px]" />
                    </div>
                </div>
                <div className="flex w-full items-center justify-start border-y-[1px] border-[#E8E8E8] py-3 md:h-[32px]">
                    <p className="font-britti-sans text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-[400] leading-[1.3] text-[#868686]">
                        2025 The Forge Software Inc. | A US Delaware Corporation, registered at 9 Wall Street, Suite 168 New York, NY 10005 | <Link href="/terms-and-conditions" className="hover:opacity-80 transition-all">Terms & Conditions</Link> | <Link href="/privacy-policy" className="hover:opacity-80 transition-all">Privacy Policy</Link> | <Link href="/cookies-policy" className="hover:opacity-80 transition-all">Cookies Policy</Link>
                    </p>
                </div>
            </div>
            <div className="h-[48px] w-full">
                <Image src={"/platform/footer-b.png"} alt="footer-b" width={1600} height={60} className="h-full w-full object-fill md:object-cover" />
            </div>
        </div>
    )
}

export default Footer
