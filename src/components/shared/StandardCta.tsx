"use client"

import Image from "next/image";
import { useDemo } from "../ScheduleDemo";

interface StandardCtaProps {
  imageSrc?: string;
  imageAlt?: string;
  mobileImageSrc?: string;
  showOverlay?: boolean;
  overlayWidth?: string;
  overlayHeight?: string;
  overlayMobileHeight?: string;
}

const StandardCta = ({ 
  imageSrc = "/home/demo-home-car.png",
  imageAlt = "demo-car",
  mobileImageSrc,
  showOverlay = true,
  overlayWidth = "31%",
  overlayHeight = "45px",
  overlayMobileHeight = "54px"
}: StandardCtaProps) => {
  const { openDemo } = useDemo();

  return (
    <section className="bg-[#FCFCFC]">
      <div className="mx-auto w-full">
        <div className="pt-6 sm:pt-16">
          <div className="px-4 md:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end sm:gap-2 xl:gap-0">
              <div className="space-y-2 md:space-y-4">
                <span className="font-chakra-petch text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base font-normal uppercase leading-[19px] tracking-[-1%] text-[#202020]">
                  get a personalised demo
                </span>
                <h3 className="font-britti-sans text-[32px] sm:text-[32px] md:text-[56px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] font-normal leading-[30px] tracking-[-2%] text-[#202020] lg:leading-[56px]">
                  Ready to see Tracer in action?
                </h3>
              </div>
              <div className="flex sm:justify-end">
                <button
                  onClick={openDemo}
                  className="flex h-[48px] w-full shrink-0 cursor-pointer items-center justify-center bg-[#E8E8E8] px-8 py-3 font-britti-sans text-sm font-normal text-[#202020] hover:bg-[#E8E8E8]/80 sm:w-auto md:h-[49px] md:text-base"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-8 h-[200px] w-full xl:h-[316px]">
        {mobileImageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover hidden md:block"
              priority
            />
            <Image
              src={mobileImageSrc}
              alt={imageAlt}
              fill
              className="object-cover block md:hidden"
              priority
            />
          </>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        )}
        {showOverlay && (
          <div className={`absolute right-0 top-0 h-[${overlayHeight}] w-[${overlayWidth}] bg-[#FCFCFC] md:h-[${overlayMobileHeight}]`}></div>
        )}
      </div>
    </section>
  );
};

export default StandardCta;
