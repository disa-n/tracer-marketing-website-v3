'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';


// Animation configuration
const animationConfig = { delay: 0.001, duration: 1.8, ease: [0.6, 0, 0.38, 1] };

// Animation variants
const headingVariant: Variants = {
  hidden: { x: -50, y: -50 },
  visible: { x: 0, y: 0, transition: animationConfig },
};

const subheadingVariant = headingVariant;
const paragraphVariant = headingVariant;

// Slide diagonally from top-left into place - responsive positioning
const imageVariant: Variants = {
  hidden: { x: -200, y: -250 },
  visible: {
    x: 0,
    y: 0, // Keep image within section bounds
    transition: { ...animationConfig, duration: 2.2 }
  },
};



export default function HeroSection() {
  const [animate, setAnimate] = useState(false);
  const [refreshKey, setRefreshKey] = useState(Date.now());
  const [windowWidth, setWindowWidth] = useState(0);

  // This effect runs on component mount and handles the animation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    setAnimate(true);

    // This is the key part: add an event listener for page visibility changes
    // This will detect when the user refreshes the page or returns to it
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Reset animation state
        setAnimate(false);
        // Force remount by changing the key
        setRefreshKey(Date.now());
        // Small timeout to ensure animation reset
        setTimeout(() => setAnimate(true), 50);
      }
    };

    // Add event listener for page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Also handle page refresh using beforeunload
    const handleBeforeUnload = () => {
      setAnimate(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Window resize effect for responsive gridlines
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    // Set initial width
    checkScreenSize();

    // Update width on resize
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const shouldShowGridlines = windowWidth > 768; // Hide gridlines on mobile/small screens

  return (
    <section
      key={refreshKey}
      className="h-[640px] bg-black text-white lg:h-[800px]"
    >
      <motion.div
      >

        {/* HEADINGS */}
        <motion.h1
          variants={headingVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="relative z-10 font-chakra-petch text-[clamp(3.5rem,8vw,7rem)] font-medium leading-none
                     pt-[120px] px-6
                     md:pt-[140px] md:px-8 md:leading-normal
                     lg:absolute lg:left-8 lg:top-[25%] lg:font-normal lg:-tracking-[6px]
                     xl:top-[20%] xl:-tracking-[8px]
                     2xl:top-[15%] 2xl:-tracking-[9px]"
        >
          Accelerating
        </motion.h1>

        <motion.h2
          variants={subheadingVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="relative z-10 font-chakra-petch text-[clamp(3.5rem,8vw,7rem)] font-medium leading-none
                     pt-6 pl-8 pr-6
                     md:pt-8 md:pl-12 md:pr-8
                     lg:absolute lg:bottom-[25%] lg:right-8 lg:text-right lg:font-normal lg:leading-[104px] lg:-tracking-[6px] lg:pl-0 lg:pr-0
                     xl:bottom-[20%] xl:-tracking-[8px]
                     2xl:bottom-[35%] 2xl:-tracking-[9px]"
        >
          the New Dawn <br className="hidden md:block" /> of AI in Science
        </motion.h2>

        <motion.div
          variants={paragraphVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="relative z-10 font-chakra-petch text-base
                     px-6 pt-8
                     md:px-8 md:pt-12
                     lg:absolute lg:bottom-[8%] lg:left-8 lg:pt-0
                     2xl:bottom-[30%]"
        >
          <p className="text-sm md:text-base md:max-w-[453px] lg:max-w-[500px]">
            Tracer combines cutting-edge technological advances with the deep
            understanding of scientific industries to give insights into
            enterprises&apos; digital and AI acceleration.
          </p>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="absolute left-0 top-[20px] z-[7] w-full h-[80%] sm:h-[85%] md:h-[90%] lg:h-full lg:top-[60px] xl:top-[-60px] 2xl:top-[-80px] overflow-hidden"
        >
          <Image
            src="/home/hero.png"
            alt="hero"
            width={1416}
            height={808}
            className="h-full w-full scale-[1.2] sm:scale-[1.1] md:scale-[0.95] lg:scale-95 xl:scale-90 object-contain object-center"
          />
        </motion.div>

{/* Static Vertical Gridlines - Hidden on mobile/small screens */}
{shouldShowGridlines && (
  <>
    <div
      className="absolute bg-[#404040] h-[120vh] md:h-[140vh] lg:h-[160vh] xl:h-[180vh]"
      style={{
        width: 1,
        left: 250,
        top: 0,
        zIndex: 0, // lower than your animated elements
      }}
    />
    <div
      className="absolute bg-[#404040] h-[120vh] md:h-[140vh] lg:h-[160vh] xl:h-[180vh]"
      style={{
        width: 1,
        left: 570,
        top: 0,
        zIndex: 0,
      }}
    />
    <div
      className="absolute bg-[#404040] h-[640px] lg:h-[800px]"
      style={{
        width: 1,
        left: 890,
        top: 0,
        zIndex: 6,
      }}
    />
    <div
      className="absolute bg-[#404040] h-[640px] lg:h-[800px]"
      style={{
        width: 1,
        left: 1210,
        top: 0,
        zIndex: 6,
      }}
    />
  </>
)}


      </motion.div>
    </section>
  );
}
