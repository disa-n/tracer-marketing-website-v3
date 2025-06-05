'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import PrimaryButton from "../ui/PrimaryButton";

const HowTracerWorks = () => {
  // Create ref for the section to detect when it's in view
  const sectionRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Effect to handle window resize and determine if animations should be enabled
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Disable animations on mobile devices (width <= 768px) or when window is 50% or less of screen width
      const isMobile = width <= 768;
      const isNarrowWindow = width <= (window.screen.width * 0.5);
      setShouldAnimate(!isMobile && !isNarrowWindow);
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FCFCFC]">
      <div className="relative overflow-x-hidden border-b border-grey-100">
        <div className="container_fluid relative flex flex-col bg-[url(/home/bg-lines.svg)] bg-contain bg-center bg-repeat-y pb-7 md:pb-[72px]">
          <h2 className="sr-only">How Tracer Works</h2>
          {shouldAnimate ? (
            <motion.div
              className="relative mt-24 font-chakra-petch text-5xl font-normal leading-none tracking-[-0.04em] text-[#202020] md:mt-10 md:text-7xl md:leading-[0.8em] lg:text-[120px]"
              initial={{ y: 30 }} // Start from below and pan up (no opacity change)
              whileInView={{
                y: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.6, 0, 0.38, 1]
                }
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="hidden md:block">
                <span>How Tracer</span>
                <motion.span
                  className="absolute right-0 top-[calc(100%+36px)]"
                  initial={{ y: 30 }}
                  whileInView={{
                    y: 0,
                    transition: {
                      duration: 1.5,
                      delay: 0.3, // Slight delay for staggered effect
                      ease: [0.6, 0, 0.38, 1]
                    }
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  Works
                </motion.span>
              </div>
              <div className="block md:hidden">
                <motion.span
                  initial={{ y: 30 }}
                  whileInView={{
                    y: 0,
                    transition: {
                      duration: 1.5,
                      ease: [0.6, 0, 0.38, 1]
                    }
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  How Tracer Works
                </motion.span>
              </div>
            </motion.div>
          ) : (
            <div className="relative mt-24 font-chakra-petch text-5xl font-normal leading-none tracking-[-0.04em] text-[#202020] md:mt-10 md:text-7xl md:leading-[0.8em] lg:text-[120px]">
              <div className="hidden md:block">
                <span>How Tracer</span>
                <span className="absolute right-0 top-[calc(100%+36px)]">
                  Works
                </span>
              </div>
              <div className="block md:hidden">
                <span>How Tracer Works</span>
              </div>
            </div>
          )}
          <div className="mt-6 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end">
            {shouldAnimate ? (
              <motion.div
                className="w-full md:h-auto lg:w-[589px] overflow-hidden"
                initial={{ x: "-25%" }}
                whileInView={{
                  x: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.6, 0, 0.38, 1]
                  }
                }}
                viewport={{ once: false, amount: 0.1 }}
              >
                <Image
                  src={"/home/computing-system-image.webp"}
                  alt="Computing System Image"
                  width={589}
                  height={493}
                  priority={false}
                  className="w-full md:h-auto"
                />
              </motion.div>
            ) : (
              <div className="w-full md:h-auto lg:w-[589px] overflow-hidden">
                <Image
                  src={"/home/computing-system-image.webp"}
                  alt="Computing System Image"
                  width={589}
                  height={493}
                  priority={false}
                  className="w-full md:h-auto"
                />
              </div>
            )}
            {shouldAnimate ? (
              <motion.div
                className="flex flex-col gap-4 lg:max-w-[400px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.2,
                    delay: 0.5, // Adjusted delay to match the image animation
                    ease: [0.6, 0, 0.38, 1]
                  }
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <h4 className="font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] lg:text-4xl xl:text-5xl">
                  Built for the most complex computing systems
                </h4>
                <p className="font-britti-sans text-base font-normal leading-none tracking-[-0.02em] text-[#202020] lg:text-lg xl:text-xl">
                  Tracer uses eBPF-powered operating-system (OS) level extraction
                  technologies to reach actionable insights. What others canʼt
                  see, we extract, transform, and explain.
                </p>
                <div className="mt-4 xl:mt-6">
                  <Link href={"/technology"} className="block mx-4 sm:mx-0 sm:w-auto">
                    <PrimaryButton
                      title="See our Technology"
                      className="bg-[#E8E8E8] text-[#202020] border-none hover:bg-[#e0e0e0] whitespace-nowrap w-full sm:w-auto"
                    />
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4 lg:max-w-[400px]">
                <h4 className="font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] lg:text-4xl xl:text-5xl">
                  Built for the most complex computing systems
                </h4>
                <p className="font-britti-sans text-base font-normal leading-none tracking-[-0.02em] text-[#202020] lg:text-lg xl:text-xl">
                  Tracer uses eBPF-powered operating-system (OS) level extraction
                  technologies to reach actionable insights. What others canʼt
                  see, we extract, transform, and explain.
                </p>
                <div className="mt-4 xl:mt-6">
                  <Link href={"/technology"} className="block mx-4 sm:mx-0 sm:w-auto">
                    <PrimaryButton
                      title="See our Technology"
                      className="bg-[#E8E8E8] text-[#202020] border-none hover:bg-[#e0e0e0] whitespace-nowrap w-full sm:w-auto"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Mobile rectangle */}
        {shouldAnimate ? (
          <motion.div
            className="absolute -top-px right-0 h-11 bg-[#202020] origin-right md:hidden z-0"
            initial={{ width: "45%" }}
            whileInView={{
              width: "37%",
              transition: {
                duration: 1.5, // Match image animation duration
                ease: [0.6, 0, 0.38, 1]
              }
            }}
            viewport={{ once: false, amount: 0.1 }}
          />
        ) : (
          <div
            className="absolute -top-px right-0 h-11 bg-[#202020] origin-right md:hidden z-0"
            style={{ width: "37%" }}
          />
        )}

        {/* Medium screens rectangle */}
        {shouldAnimate ? (
          <motion.div
            className="absolute -top-px right-0 hidden md:block md:h-24 bg-[#202020] origin-right lg:hidden"
            initial={{ width: "45%" }}
            whileInView={{
              width: "33.913%",
              transition: {
                duration: 1.5, // Match image animation duration
                ease: [0.6, 0, 0.38, 1]
              }
            }}
            viewport={{ once: false, amount: 0.1 }}
          />
        ) : (
          <div
            className="absolute -top-px right-0 hidden md:block md:h-24 bg-[#202020] origin-right lg:hidden"
            style={{ width: "33.913%" }}
          />
        )}

        {/* Large screens rectangle */}
        {shouldAnimate ? (
          <motion.div
            className="absolute -top-px right-0 hidden lg:block lg:h-[134px] bg-[#202020] origin-right"
            initial={{ width: "45%" }}
            whileInView={{
              width: "37%",
              transition: {
                duration: 1.5, // Match image animation duration
                ease: [0.6, 0, 0.38, 1]
              }
            }}
            viewport={{ once: false, amount: 0.1 }}
          />
        ) : (
          <div
            className="absolute -top-px right-0 hidden lg:block lg:h-[134px] bg-[#202020] origin-right"
            style={{ width: "37%" }}
          />
        )}
      </div>
    </section>
  );
};
export default HowTracerWorks;
