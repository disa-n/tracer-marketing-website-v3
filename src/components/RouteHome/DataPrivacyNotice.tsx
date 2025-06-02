"use client";

import { cloudFeatures } from "./data/cloudFeaturesData";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DataPrivacyNotice = () => {
  // Window width state for responsive animation control
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Animation controls
  const textElementsControls = useAnimation();
  const featuresControls = useAnimation();

  // Refs for detecting when elements come into view
  const textElementsRef = useRef(null);
  const featuresRef = useRef(null);

  // InView hooks - reset when elements go out of view
  const textElementsInView = useInView(textElementsRef, { amount: 0.01 });
  const featuresInView = useInView(featuresRef, { amount: 0.01 });

  // Effect to handle window resize and determine if animations should be enabled
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const screenWidth = window.screen.width;
      // Disable animations when window is 50% or less of screen width
      setShouldAnimate(width > screenWidth * 0.5);
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Control text elements animation - staggered fade-in with upward motion
  useEffect(() => {
    if (!shouldAnimate) {
      // If animations are disabled, set elements to their final state
      textElementsControls.start({ y: 0, opacity: 1 });
      return;
    }

    if (textElementsInView) {
      textElementsControls.start(i => ({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: i * 0.2, // Stagger each element by 0.2 seconds
          ease: [0.25, 0.1, 0.25, 1]
        }
      }));
    } else {
      // Reset animation when completely out of view
      textElementsControls.start({ y: 30, opacity: 0 });
    }
  }, [textElementsInView, textElementsControls, shouldAnimate]);

  // Control features animation - staggered fade-in with upward motion
  useEffect(() => {
    if (!shouldAnimate) {
      // If animations are disabled, set elements to their final state
      featuresControls.start({ y: 0, opacity: 1 });
      return;
    }

    if (featuresInView) {
      featuresControls.start(i => ({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: i * 0.2, // Stagger each feature card
          ease: [0.25, 0.1, 0.25, 1]
        }
      }));
    } else {
      // Reset animation when completely out of view
      featuresControls.start({ y: 30, opacity: 0 });
    }
  }, [featuresInView, featuresControls, shouldAnimate]);

  return (
    <section className="bg-[#202020] px-4">
      <div className="container_fluid">
        <div className="py-4 md:py-[88px]">
          <div className="flex flex-col xl:flex-row xl:gap-12">
            {shouldAnimate ? (
              <motion.h3
                ref={textElementsRef}
                custom={0}
                initial={{ y: 30, opacity: 0 }}
                animate={textElementsControls}
                className="font-chakra-petch text-[40px] leading-[40px] whitespace-nowrap md:text-[112px] md:leading-[104px] text-foreground"
                style={{ letterSpacing: "-0.09em" }}
              >
                Your data
              </motion.h3>
            ) : (
              <h3
                ref={textElementsRef}
                className="font-chakra-petch text-[40px] leading-[40px] whitespace-nowrap md:text-[112px] md:leading-[104px] text-foreground"
                style={{ letterSpacing: "-0.09em" }}
              >
                Your data
              </h3>
            )}
            <div>
              <div>
                <div className="hidden md:block">
                  {shouldAnimate ? (
                    <>
                      <motion.h3
                        custom={1}
                        initial={{ y: 30, opacity: 0 }}
                        animate={textElementsControls}
                        className="font-chakra-petch mt-[-20px] text-[112px] font-normal leading-[104px] text-foreground xl:mt-0"
                        style={{ letterSpacing: "-0.09em" }}
                      >
                        never leaves
                      </motion.h3>
                      <motion.h3
                        custom={2}
                        initial={{ y: 30, opacity: 0 }}
                        animate={textElementsControls}
                        className="font-chakra-petch mt-[-24px] text-[112px] font-normal leading-[104px] tracking-[-9%] text-foreground"
                        style={{ letterSpacing: "-0.09em" }}
                      >
                        your systems
                      </motion.h3>
                    </>
                  ) : (
                    <>
                      <h3
                        className="font-chakra-petch mt-[-20px] text-[112px] font-normal leading-[104px] text-foreground xl:mt-0"
                        style={{ letterSpacing: "-0.09em" }}
                      >
                        never leaves
                      </h3>
                      <h3
                        className="font-chakra-petch mt-[-24px] text-[112px] font-normal leading-[104px] tracking-[-9%] text-foreground"
                        style={{ letterSpacing: "-0.09em" }}
                      >
                        your systems
                      </h3>
                    </>
                  )}
                </div>
                <div className="md:hidden">
                  {shouldAnimate ? (
                    <>
                      <motion.h3
                        custom={1}
                        initial={{ y: 30, opacity: 0 }}
                        animate={textElementsControls}
                        className="font-chakra-petch text-[40px] font-normal leading-[40px] text-foreground"
                        style={{ letterSpacing: "-0.09em" }}
                      >
                        never leaves
                      </motion.h3>
                      <motion.h3
                        custom={2}
                        initial={{ y: 30, opacity: 0 }}
                        animate={textElementsControls}
                        className="font-chakra-petch text-[40px] font-normal leading-[40px] text-foreground"
                        style={{ letterSpacing: "-0.09em" }}
                      >
                        your systems
                      </motion.h3>
                    </>
                  ) : (
                    <>
                      <h3
                        className="font-chakra-petch text-[40px] font-normal leading-[40px] text-foreground"
                        style={{ letterSpacing: "-0.09em" }}
                      >
                        never leaves
                      </h3>
                      <h3
                        className="font-chakra-petch text-[40px] font-normal leading-[40px] text-foreground"
                        style={{ letterSpacing: "-0.09em" }}
                      >
                        your systems
                      </h3>
                    </>
                  )}
                </div>
                {shouldAnimate ? (
                  <motion.p
                    custom={3}
                    initial={{ y: 30, opacity: 0 }}
                    animate={textElementsControls}
                    className="mt-4 max-w-[453px] font-britti-sans text-base font-normal leading-[16px] text-foreground md:text-xl md:leading-[22px] md:tracking-[2%]"
                  >
                    We don’t want to just pass your security checks; Tracer is
                    built with security-by-design
                  </motion.p>
                ) : (
                  <p
                    className="mt-4 max-w-[453px] font-britti-sans text-base font-normal leading-[16px] text-foreground md:text-xl md:leading-[22px] md:tracking-[2%]"
                  >
                    We don&apos;t want to just pass your security checks; Tracer is
                    built with security-by-design
                  </p>
                )}

                {shouldAnimate ? (
                  <motion.div
                    ref={featuresRef}
                    className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2"
                  >
                    {cloudFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.id}
                        custom={index}
                        initial={{ y: 30, opacity: 0 }}
                        animate={featuresControls}
                        className="space-y-8 border border-[#404040] p-4"
                      >
                        <div className="flex items-center md:justify-end">
                          <Image
                            src={feature.icon}
                            alt={`${feature.title.toLowerCase()}-img`}
                            width={48}
                            height={48}
                            className="object-contain md:h-[72px] md:w-[72px]"
                            priority
                          />
                        </div>
                        <div className="space-y-2">
                          <h5
                            className="font-britti-sans text-xl font-normal leading-[20px] text-foreground md:text-[32px] md:leading-[30px]"
                            style={{ letterSpacing: "-0.01em" }}
                          >
                            {feature.title}
                          </h5>
                          <p className="font-britti-sans text-sm font-normal leading-[17px] text-foreground md:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div
                    ref={featuresRef}
                    className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2"
                  >
                    {cloudFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className="space-y-8 border border-[#404040] p-4"
                      >
                        <div className="flex items-center md:justify-end">
                          <Image
                            src={feature.icon}
                            alt={`${feature.title.toLowerCase()}-img`}
                            width={48}
                            height={48}
                            className="object-contain md:h-[72px] md:w-[72px]"
                            priority
                          />
                        </div>
                        <div className="space-y-2">
                          <h5
                            className="font-britti-sans text-xl font-normal leading-[20px] text-foreground md:text-[32px] md:leading-[30px]"
                            style={{ letterSpacing: "-0.01em" }}
                          >
                            {feature.title}
                          </h5>
                          <p className="font-britti-sans text-sm font-normal leading-[17px] text-foreground md:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacyNotice;
