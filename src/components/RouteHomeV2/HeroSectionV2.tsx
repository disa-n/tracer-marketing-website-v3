'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GridLinesHero } from '@/components/shared/GridLines';
import ShinyCTAButton from '@/components/shared/ShinyCTAButton';

export default function HeroSectionV2() {
  const [displayedText, setDisplayedText] = useState('That Lives in the OS');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [isComplete, setIsComplete] = useState(true);
  const [startTyping, setStartTyping] = useState(false);
  const [startPulse, setStartPulse] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopTextVariations = [
    'That Lives in the OS',
    'Making Costs Visible',
    'That Sees Every Tool',
    'Optimised for HPC',
    'Mapping Job Spend',
    'Breaking Down Runs'
  ];

  const mobileTextVariations = [
    'That Lives in the OS',
    'Making Costs Visible',
    'That Sees Every Tool',
    'Optimised for HPC',
    'Mapping Job Spend',
    'Breaking Down Runs'
  ];

  const textVariations = isMobile ? mobileTextVariations : desktopTextVariations;

  // Start cycling after a delay (first text is already shown)
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
      setIsErasing(true); // Start by erasing the initial text
    }, 3000); // 3 second delay before starting to cycle

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    const currentText = textVariations[currentTextIndex];

    if (isErasing) {
      // Erasing text
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, 50); // Erasing speed (faster than typing)
        return () => clearTimeout(timer);
      } else {
        // Finished erasing, move to next text (start from index 1 after initial)
        setIsErasing(false);
        setCurrentTextIndex(prev => {
          const nextIndex = prev + 1;
          return nextIndex >= textVariations.length ? 1 : nextIndex; // Skip back to index 1, not 0
        });
        setCurrentCharIndex(0);
      }
    } else {
      // Typing text
      if (currentCharIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + currentText[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, 80); // Typing speed
        return () => clearTimeout(timer);
      } else {
        // Finished typing current text
        setIsComplete(true);
        // Wait before starting to erase
        const timer = setTimeout(() => {
          setIsComplete(false);
          setStartPulse(false);
          setIsErasing(true);
        }, 3000); // Display complete text for 3 seconds
        return () => clearTimeout(timer);
      }
    }
  }, [currentCharIndex, startTyping, currentTextIndex, isErasing, displayedText, textVariations]);

  // Start pulse animation after typewriter completes each text
  useEffect(() => {
    if (isComplete && !isErasing) {
      const timer = setTimeout(() => {
        setStartPulse(true);
      }, 500); // Start pulse shortly after completion

      return () => clearTimeout(timer);
    }
  }, [isComplete, isErasing]);

  // Cursor blinking effect - show when typing or erasing
  useEffect(() => {
    if (startTyping && !isComplete) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    } else {
      setShowCursor(false);
    }
  }, [startTyping, isComplete]);
  return (
    <section className="relative bg-[#FCFCFC] overflow-hidden min-h-screen">
      <GridLinesHero />
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 900:px-8">

        <div className="flex flex-col lg:flex-row lg:min-h-screen">
          {/* Left-aligned Content */}
          <div className="relative z-10 text-left pt-4 pb-6 xs:pt-8 xs:pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 xl:pt-20 xl:pb-14 2xl:pt-24 2xl:pb-16 flex flex-col justify-center min-h-screen lg:flex-1 lg:max-w-[60%]">

            {/* Main Heading with Typewriter Effect on Last Line */}
            <h1 className="font-chakra-petch text-[36px] xs:text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] 1100:text-[80px] 1300:text-[104px] !font-[400] leading-[0.9] tracking-tighter text-[#202020] mb-4 xs:mb-3 sm:mb-4 lg:mb-4 whitespace-nowrap">
              Next-Gen Monitoring<br />
              <div className="flex justify-start">
                <span className="relative inline-block whitespace-nowrap min-w-[180px] xs:min-w-[240px] sm:min-w-[320px] md:min-w-[420px] lg:min-w-[520px] xl:min-w-[620px] text-left min-h-[1.2em]">
                  <span className="bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] bg-clip-text text-transparent">
                    {displayedText || '\u00A0'}
                    {!isComplete && startTyping && (
                      <span className={`inline-block w-[3px] h-[0.8em] bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
                    )}
                  </span>
                  {startPulse && (
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-[#3A23ED] via-[#BF5198] to-[#FFA231] bg-clip-text text-transparent"
                      style={{
                        filter: 'brightness(2.5) saturate(0.3)',
                        maskImage: 'linear-gradient(90deg, transparent 0%, transparent 35%, white 50%, transparent 65%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, transparent 35%, white 50%, transparent 65%, transparent 100%)',
                        maskSize: '300% 100%',
                        WebkitMaskSize: '300% 100%',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        animation: 'gradient-sweep-lr 4s ease-in-out infinite'
                      }}
                    >
                      {displayedText}
                    </span>
                  )}
                </span>
              </div>
            </h1>

            {/* Supporting Text */}
            <p className="font-britti-sans text-sm xs:text-sm sm:text-sm md:text-base font-[400] text-[#888888] leading-[1.4] max-w-[280px] xs:max-w-[320px] sm:max-w-[480px] md:max-w-[630px] mb-8 xs:mb-5 sm:mb-6 lg:mb-6 px-2 -mt-2 xs:-mt-2 sm:-mt-3 lg:-mt-3">
              Accelerate bioinformatics with real-time pipeline insights.<br />
              Built for precision, scale, and HPC-native environments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start mb-4 xs:mb-5 sm:mb-6 px-2">
              <div className="w-full sm:w-auto mobile-full-width-cta">
                <ShinyCTAButton mobileHeight={40} desktopHeight={51} />
              </div>

              <a
                href="/product"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 h-[40px] sm:px-8 sm:h-[49px]
                         bg-[#202020] text-[#FCFCFC] font-britti-sans text-sm sm:text-base !font-[400]
                         hover:bg-[#303030] transition-colors duration-200"
              >
                Get a Demo
              </a>
            </div>

          </div>

          {/* Image Column - Desktop and larger screens only */}
          <div className="hidden lg:flex lg:absolute lg:right-0 lg:top-0 lg:w-full lg:h-full lg:items-center lg:justify-end lg:pointer-events-none lg:z-0">
            <div className="relative lg:w-[1800px] xl:w-[2100px] 2xl:w-[2400px] lg:h-[1800px] xl:h-[2100px] 2xl:h-[2400px] lg:translate-x-[450px] lg:translate-y-[150px] xl:translate-x-[550px] xl:translate-y-[170px] 2xl:translate-x-[650px] 2xl:translate-y-[200px]">
              <Image
                src="/home/spaceship-shuttle.webp"
                alt="Spaceship shuttle representing advanced monitoring technology"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Dark grey box - positioned in lower section */}
          <div className="absolute bottom-0 left-0 w-[75%] lg:w-[45%] h-[60px] sm:h-[75px] lg:h-[100px] bg-[#141414] z-5"></div>

        </div>
      </div>
    </section>
  );
}
