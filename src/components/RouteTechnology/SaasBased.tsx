import Image from 'next/image'
import FeatureCard from '@/components/ui/FeatureCard'
import ColorBreakLine from '@/components/ui/ColorBreakLine'
import { MapPin, BookCheck, PackageOpen, LockKeyhole } from 'lucide-react'

function SaasBased() {
    return (
        <div className="bg-[#FCFCFC] text-[#202020] relative">
            {/* Color strip at top - mobile only (below 640px) */}
            <ColorBreakLine mobileOnly={false} className="sm:hidden" />
            <div className="flex flex-col-reverse md:flex-row justify-between">
                <h2 className="font-britti-sans text-[32px] md:text-[56px] max-w-3xl tracking-tight leading-tight pt-9 pb-5 pl-4 font-normal">
                    Your data stays in your hands
                </h2>
                <div className="hidden md:flex flex-col items-end">
                    <div className="w-[133px] md:w-96 h-[55px] md:h-[100px] bg-[#1F1F1F]"></div>
                    <div className="w-[110px] md:w-80 h-[45px] md:h-[54px] bg-[#1F1F1F]"></div>
                </div>
            </div>
            {/* Mobile: Simple stacked layout */}
            <div className="mt-8 mb-16 lg:hidden space-y-8 px-6">
                <div className="border border-[#E8E8E8] p-6">
                    <FeatureCard
                        icon={<MapPin className="w-[40px] h-[40px] text-[#202020]" strokeWidth={1} />}
                        title="Local by design"
                        description="Unlike SaaS-based solutions, Tracer runs within your environment and never exports your data."
                    />
                </div>

                <div className="border border-[#E8E8E8] p-6">
                    <FeatureCard
                        icon={<BookCheck className="w-[40px] h-[40px] text-[#202020]" strokeWidth={1} />}
                        title="Designed for regulated industries"
                        description="Engineered with US DoD, HIPAA, GxP, and GDPR-compliant technologies from the ground up"
                    />
                </div>

                {/* Compliance logos under regulated industries card */}
                <div className="px-6">
                    <div className="grid grid-cols-3 gap-8">
                        <div className="border border-[#E8E8E8] h-20 flex justify-center items-center">
                            <Image
                                src="/technology/hipaa.png"
                                alt="HIPAA"
                                width={82}
                                height={42}
                                className="w-[82px] h-[42px]"
                            />
                        </div>
                        <div className="border border-[#E8E8E8] h-20 flex justify-center items-center">
                            <Image
                                src="/technology/gdpr.png"
                                alt="GDPR"
                                width={48}
                                height={48}
                                className="w-[48px] h-[48px]"
                            />
                        </div>
                        <div className="border border-[#E8E8E8] h-20 flex justify-center items-center">
                            <Image
                                src="/technology/dod.png"
                                alt="DOD"
                                width={48}
                                height={48}
                                className="w-[48px] h-[48px]"
                            />
                        </div>
                    </div>
                </div>

                <div className="border border-[#E8E8E8] p-6">
                    <FeatureCard
                        icon={<PackageOpen className="w-[40px] h-[40px] text-[#202020]" strokeWidth={1} />}
                        title="Open Source"
                        description="Transparency and extensibility at every layer"
                    />
                </div>

                <div className="border border-[#E8E8E8] p-6">
                    <FeatureCard
                        icon={<LockKeyhole className="w-[40px] h-[40px] text-[#202020]" strokeWidth={1} />}
                        title="Engineered in Rust"
                        description="The safest, most performant systems language ever built"
                    />
                </div>
            </div>

            {/* Desktop: Complex grid layout with aligned columns */}
            <div className="hidden lg:block mt-20">
                {/* Row 1: Local by design */}
                <div className="border-t border-b border-[#E8E8E8] h-20 flex flex-row justify-start items-center px-6">
                    <div className="border-l border-r h-20 border-[#E8E8E8] flex-1 flex items-center">
                        <FeatureCard
                            icon={<MapPin className="w-[40px] h-[40px] text-[#202020]" strokeWidth={1} />}
                            title="Local by design"
                            description="Unlike SaaS-based solutions, Tracer runs within your environment and never exports your data."
                            className="py-0"
                        />
                    </div>
                    <div className="w-20 border-r border-[#E8E8E8] h-20"></div>
                    <div className="w-40 border-r border-[#E8E8E8] h-20"></div>
                    <div className="flex-1 border-r border-[#E8E8E8] h-20"></div>
                </div>

                {/* Row 2: Regulated industries */}
                <div className="border-b border-[#E8E8E8] h-20 flex flex-row justify-start items-center px-6">
                    <div className="border-l border-r h-20 border-[#E8E8E8] flex-1">
                        {/* Empty spacer section */}
                    </div>
                    <div className="w-20 border-r border-[#E8E8E8] h-20"></div>
                    <div className="w-40 border-r border-[#E8E8E8] h-20"></div>
                    <div className="flex-1 border-r border-[#E8E8E8] h-20 flex items-center">
                        <FeatureCard
                            icon={<BookCheck className="w-[40px] h-[40px] text-[#202020]" strokeWidth={1} />}
                            title="Designed for regulated industries"
                            description="Engineered with US DoD, HIPAA, GxP, and GDPR-compliant technologies from the ground up"
                            className="py-0"
                        />
                    </div>
                </div>

                {/* Row 3: Open Source + Compliance logos */}
                <div className="border-b border-[#E8E8E8] h-20 flex flex-row justify-start items-center px-6">
                    <div className="border-l border-r h-20 border-[#E8E8E8] flex-1 flex items-center">
                        <div className="w-20 border-r border-[#E8E8E8] h-20"></div>
                        <div className="flex-1 h-20">
                            <FeatureCard
                                icon={<PackageOpen className="w-[40px] h-[40px] text-[#202020]" strokeWidth={1} />}
                                title="Open Source"
                                description="Transparency and extensibility at every layer"
                                className="h-20 border-r border-l border-[#E8E8E8] py-0 px-4"
                            />
                        </div>
                    </div>
                    <div className="w-20 border-r border-[#E8E8E8] h-20"></div>
                    <div className="w-40 border-r border-[#E8E8E8] h-20"></div>
                    <div className="flex-1 border-r border-[#E8E8E8] h-20 flex items-center">
                        <div className="w-24 border-l border-r border-[#E8E8E8] h-20 flex justify-center items-center">
                            <Image
                                src="/technology/hipaa.png"
                                alt="HIPAA"
                                width={82}
                                height={42}
                                className="w-[82px] h-[42px]"
                            />
                        </div>
                        <div className="w-24 border-r border-[#E8E8E8] h-20 flex justify-center items-center">
                            <Image
                                src="/technology/gdpr.png"
                                alt="GDPR"
                                width={48}
                                height={48}
                                className="w-[48px] h-[48px]"
                            />
                        </div>
                        <div className="w-24 border-r border-[#E8E8E8] h-20 flex justify-center items-center">
                            <Image
                                src="/technology/dod.png"
                                alt="DOD"
                                width={48}
                                height={48}
                                className="w-[48px] h-[48px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Row 4: Engineered in Rust */}
                <div className="border-b border-[#E8E8E8] h-20 flex flex-row justify-start items-center px-6">
                    <div className="border-l h-20 border-[#E8E8E8] w-32 xl:w-220 flex items-center">
                        {/* Empty spacer section with additional vertical line */}
                        <div className="border-r border-[#E8E8E8] h-20 w-24 xl:w-198"></div>
                    </div>
                    <div className="flex-1 border-r border-[#E8E8E8] xl:border-r-0 h-20 flex items-center">
                        <FeatureCard
                            icon={<LockKeyhole className="w-[40px] h-[40px] text-[#202020]" strokeWidth={1} />}
                            title="Engineered in Rust"
                            description="The safest, most performant systems language ever built"
                            className="py-0"
                        />
                    </div>
                    <div className="hidden xl:block w-20 border-r border-[#E8E8E8] h-20"></div>
                </div>
            </div>

            {/* Horizontal gridline to mark section end */}
            <div className="border-b border-[#E8E8E8] w-full"></div>
        </div>
    )
}

export default SaasBased