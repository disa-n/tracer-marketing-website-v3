'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { challenges, CoreChallenge } from "./data/CoreChallenges";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Challenge Card Component
const ChallengeCard = ({ challenge, index, shouldAnimate = true }: { challenge: CoreChallenge; index: number; shouldAnimate?: boolean }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  React.useEffect(() => {
    if (!shouldAnimate) {
      // If animations are disabled, set mask to final state (hidden)
      controls.start({ height: '0%' });
      return;
    }

    if (isInView) {
      controls.start({ height: '0%', transition: { duration: 0.8, ease: [0.6, 0, 0.38, 1] } });
    } else {
      controls.set({ height: '85%' });
    }
  }, [isInView, controls, shouldAnimate]);

  const imageDimensions = [
    { w: 477, h: 259 },
    { w: 477, h: 259 },
    { w: 553, h: 229 },
    { w: 477, h: 284 }
  ][index];

  return (
    <div className="md:flex">
      <div className="tracking-[-9px] border border-b-0 border-[#404040] font-chakra-petch text-[40px] md:w-44 md:border-0 md:text-center md:text-[112px] text-[#FCFCFC]">
        <span className="inline-block w-20 border-r border-[#404040] p-2 text-center md:hidden">
          <span className="tracking-[0.03em]">{challenge.number}</span>
        </span>
        <span className={cn("hidden md:inline-block", index === 1 && "mt-20", index === 3 && "mt-20")}>
          {challenge.number}
        </span>
      </div>
      <div className={cn(
        "flex-1 border-x border-b border-t border-[#404040] lg:border-b-0",
        (index === 0 || index === 1 || index === 3) && "lg:border-t-0"
      )}>
        {(index === 1 || index === 3) && <div className="hidden h-20 w-full border-b border-[#404040] lg:block" />}
        <div ref={ref} className="m-4 overflow-hidden border border-[#404040] relative">
          {/* Image container */}
          <div className={`relative overflow-hidden h-[${imageDimensions.h}px]`}>
            <Image
              src={challenge.imageUrl}
              alt={challenge.title}
              width={imageDimensions.w}
              height={imageDimensions.h}
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
              className="block w-full h-full object-cover"
            />

            {/* Mask animation */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 bg-c-black"
              initial={{ height: '85%' }}
              animate={controls}
            />
          </div>
        </div>
        <div className="space-y-2 border-t border-[#404040] px-4 pb-16 pt-4">
          <h2 className="text-[clamp(1.25rem,5vw,2rem)] leading-none text-[#FCFCFC]">
            {challenge.title}
          </h2>
          <p className="text-[#FCFCFC]">{challenge.description}</p>
        </div>
      </div>
    </div>
  );
};

const CoreChallengeSection = () => {
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
    <section className="bg-c-black py-6 overflow-hidden">
      <h2 className="mx-auto mb-4 max-w-[1440px] pl-6 text-[clamp(1.25rem,5vw,2rem)] leading-none lg:pl-6 text-[#FCFCFC]">
        Most organisations face <br className="block lg:hidden" /> the same core challenges
      </h2>
      <div className="relative mx-auto max-w-[1440px] border-[#404040] px-4 lg:border-y lg:border-l 1440:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-0">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={index} shouldAnimate={shouldAnimate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreChallengeSection;
