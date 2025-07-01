'use client';

import { useEffect, useState } from 'react';
import { motion, Variants, type Transition } from 'framer-motion';
import Image from 'next/image';

// Animation configuration
const animationConfig: Transition = { delay: 0.001, duration: 1.8, ease: "easeOut" };

const headingVariant: Variants = {
  hidden: { x: -50, y: -50 },
  visible: { x: 0, y: 0, transition: animationConfig },
};
const subheadingVariant = headingVariant;
const paragraphVariant = headingVariant;

const imageVariant: Variants = {
  hidden: { x: -200, y: -250 },
  visible: { x: 0, y: 0, transition: { ...animationConfig, duration: 2.2 } },
};

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);
  const [refreshKey, setRefreshKey] = useState(Date.now());
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setAnimate(true);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setAnimate(false);
        setRefreshKey(Date.now());
        setTimeout(() => setAnimate(true), 50);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', () => setAnimate(false));

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', () => { });
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldShowGridlines = windowWidth > 768;

  return (
    <section key={refreshKey} className="h-[640px] lg:h-[800px] text-white" style={{ backgroundColor: '#202020' }}>
      <motion.div
        className="relative flex h-full flex-col items-center justify-center overflow-hidden lg:block mx-auto max-w-[1440px] w-full"
      >
        {/* HEADINGS */}
        <motion.h1
          variants={headingVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="relative z-10 font-chakra-petch text-[clamp(3.5rem,10vw,8.5rem)] font-medium leading-[0.9] pt-[120px] pl-8 pr-6
                     md:-translate-y-1/2 md:leading-[0.95] md:pt-0 md:px-4
                     lg:absolute lg:left-4 lg:top-[60%] xl:top-[30%] 2xl:top-[25%] lg:font-normal lg:-tracking-[9px] lg:leading-[0.9]"
        >
          The First Pipeline<br />Monitoring System
        </motion.h1>

        <motion.h2
          variants={subheadingVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="relative z-10 font-chakra-petch text-[clamp(2.8rem,8vw,6.8rem)] font-medium leading-none pt-4 pl-8
                     md:-translate-y-1/2 md:pt-0 md:pl-0
                     lg:absolute lg:bottom-0 xl:bottom-[120px] 2xl:bottom-[180px] lg:right-4 lg:text-right lg:font-normal lg:leading-[104px] lg:-tracking-[10px]"
        >
          That Lives in the OS
        </motion.h2>

        <motion.div
          variants={paragraphVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="relative z-10 font-chakra-petch text-base px-6 pt-8 md:px-2 md:pt-0 lg:absolute lg:bottom-40 xl:bottom-[160px] 2xl:bottom-[220px] lg:left-8"
        >
          <p className="mt-4 text-sm md:max-w-[453px] md:text-base">
            Tracer combines cutting-edge technological advances with the deep
            understanding of scientific industries to give insights into
            enterprises&apos; digital and AI acceleration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 md:max-w-[453px]">
            <a
              href="https://sandbox.tracer.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 text-black font-medium hover:bg-gray-300 transition-colors text-sm md:text-base text-center"
            >
              Start For Free
            </a>
            <a
              href="/product"
              className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors text-sm md:text-base flex items-center justify-center gap-2"
            >
              Learn More
              <span className="text-lg">→</span>
            </a>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="absolute left-0 top-[20px] z-[7] w-full h-[80%] sm:h-[85%] md:h-[90%] lg:h-full lg:top-[60px] xl:top-[-60px] 2xl:top-[0px] overflow-hidden"
        >
          <Image
            src="/home/hero.png"
            alt="hero"
            width={1416}
            height={808}
            className="h-full w-full scale-[1.2] sm:scale-[1.1] md:scale-[0.95] lg:scale-95 xl:scale-90 object-contain object-center"
          />
        </motion.div>


      </motion.div>
    </section>
  );
}