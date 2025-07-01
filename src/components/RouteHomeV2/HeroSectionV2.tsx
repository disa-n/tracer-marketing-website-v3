'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GridLines from '@/components/shared/GridLines';
import ShinyCTAButton from '@/components/shared/ShinyCTAButton';
import { SearchX, Wrench, ShieldOff, Siren } from 'lucide-react';

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
    <section className="relative bg-[#141414] min-h-screen 300:min-h-[70vh] 400:min-h-[65vh] xs:min-h-[60vh] sm:min-h-[55vh] lg:min-h-screen overflow-hidden lg:overflow-visible">
      <GridLines />
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 900:px-8 pb-0 300:pb-0 400:pb-0 xs:pb-0 sm:pb-0 lg:pb-0">

        <div className="flex flex-col lg:flex-row min-h-screen 300:min-h-[85vh] 400:min-h-[80vh] xs:min-h-[75vh] sm:min-h-[70vh] lg:min-h-screen" style={{ minHeight: '750px' }}>
          {/* Content - Center-aligned on mobile, left-aligned on desktop */}
          <div className="relative z-10 text-center lg:text-left -mt-20 300:-mt-24 400:-mt-28 xs:-mt-20 sm:-mt-16 lg:mt-0 pt-0 pb-0 300:pb-0 400:pb-0 xs:pb-0 sm:pb-0 lg:pt-16 lg:pb-12 xl:pt-20 xl:pb-14 2xl:pt-24 2xl:pb-16 flex flex-col justify-center min-h-screen 300:min-h-[85vh] 400:min-h-[80vh] xs:min-h-[75vh] sm:min-h-[70vh] lg:min-h-screen lg:flex-1 lg:max-w-[60%]">

            {/* Mobile Hero Image - Above title, centered on screen - Only shows on smallest mobile screens */}
            <div className="block sm:hidden -mb-2 300:-mb-3 400:-mb-3 xs:-mb-3 sm:-mb-2 mt-32 300:mt-28 400:mt-24 xs:mt-20 sm:mt-24 relative flex justify-center overflow-hidden">
              <motion.div
                className="relative w-[min(600px,100vw)] 300:w-[min(650px,100vw)] 400:w-[min(700px,100vw)] xs:w-[min(750px,100vw)] h-[320px] 300:h-[340px] 400:h-[360px] xs:h-[380px] -translate-y-[20px]"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  rotate: [0, 1.5, 0]
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <Image
                  src="/home/T-Asset-Spacecraft_7 1.webp"
                  alt="Spacecraft representing advanced monitoring technology"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Medium Mobile Hero Image - Above title, centered on screen - Shows on larger mobile screens */}
            <div className="hidden sm:block lg:hidden -mb-4 sm:-mb-6 md:-mb-8 mt-24 sm:mt-20 md:mt-16 relative flex justify-center">
              <motion.div
                className="relative w-[800px] sm:w-[900px] md:w-[1000px] h-[400px] sm:h-[450px] md:h-[500px] -translate-y-[20px]"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  rotate: [0, 1.5, 0]
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <Image
                  src="/home/T-Asset-Spacecraft_7 1.webp"
                  alt="Spacecraft representing advanced monitoring technology"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Main Heading with Typewriter Effect on Last Line */}
            <h1 className="font-chakra-petch text-[40px] 350:text-[44px] 400:text-[48px] xs:text-[52px] sm:text-[56px] md:text-[68px] lg:text-[70px] 1100:text-[80px] 1300:text-[104px] !font-[400] leading-[0.9] tracking-tighter text-white mb-3 300:mb-3 400:mb-4 xs:mb-3 sm:mb-4 lg:mb-4 whitespace-nowrap -mt-8 300:-mt-12 400:-mt-16 xs:-mt-12 sm:mt-8 md:mt-16 lg:mt-0">
              Next-Gen Monitoring<br />
              <div className="flex justify-center lg:justify-start">
                <span className="relative inline-block whitespace-nowrap min-w-[180px] 300:min-w-[200px] 400:min-w-[220px] xs:min-w-[240px] sm:min-w-[280px] md:min-w-[480px] lg:min-w-[520px] xl:min-w-[620px] text-center lg:text-left min-h-[1.2em]">
                  <span className="text-white">
                    {displayedText || '\u00A0'}
                    {!isComplete && startTyping && (
                      <span className={`inline-block w-[3px] 400:w-[4px] h-[0.8em] bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
                    )}
                  </span>
                </span>
              </div>
            </h1>

            {/* Supporting Text */}
            <p className="font-britti-sans text-[16px] 300:text-[16px] 400:text-[16px] xs:text-[16px] sm:text-[16px] md:text-xl font-[400] text-[#CCCCCC] leading-[1.4] max-w-[320px] 300:max-w-[380px] 400:max-w-[420px] xs:max-w-[500px] sm:max-w-[480px] md:max-w-[630px] mb-6 300:mb-7 400:mb-8 xs:mb-5 sm:mb-6 lg:mb-6 px-2 -mt-1 300:-mt-2 400:-mt-2 xs:-mt-2 sm:-mt-3 lg:-mt-3 text-center lg:text-left mx-auto lg:mx-0">
              Accelerate bioinformatics with real-time pipeline insights.
              <br className="block" />
              Built for precision, scale, and HPC-native environments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-2 300:gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-12 300:mb-4 400:mb-2 xs:mb-1 sm:mb-0 lg:mb-16 px-2">
              <div className="w-[48%] sm:w-auto mobile-full-width-cta">
                <ShinyCTAButton
                  mobileHeight={48}
                  desktopHeight={55}
                  textSizeClasses="text-sm 300:text-sm 400:text-base sm:text-lg"
                />
              </div>

              <a
                href="/product"
                className="inline-flex items-center justify-center w-[48%] sm:w-auto px-4 300:px-5 400:px-6 sm:px-8
                         bg-[#E8E8E8] text-black font-britti-sans text-sm 300:text-sm 400:text-base sm:text-lg !font-[400]
                         hover:bg-[#D8D8D8] transition-colors duration-200 demo-button-height"
                style={{
                  '--mobile-height': '44px',
                  '--desktop-height': '51px',
                } as React.CSSProperties}
              >
                Get a Demo
              </a>
            </div>

          </div>

          {/* Image Column - Desktop and larger screens only */}
          <div className="hidden lg:flex lg:absolute lg:right-0 lg:top-0 lg:w-full lg:h-full lg:items-center lg:justify-end lg:pointer-events-none lg:z-0">
            <motion.div
              className="relative lg:w-[1800px] xl:w-[2100px] 2xl:w-[2400px] lg:h-[2200px] xl:h-[2500px] 2xl:h-[2800px] lg:translate-x-[150px] lg:translate-y-[100px] xl:translate-x-[200px] xl:translate-y-[120px] 2xl:translate-x-[250px] 2xl:translate-y-[150px]"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <Image
                src="/home/T-Asset-Spacecraft_7 1.webp"
                alt="Spacecraft representing advanced monitoring technology"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>


    </section>
  );
}
