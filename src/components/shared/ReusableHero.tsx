'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GridLinesLight } from '@/components/shared/GridLines';
import { supabase } from '@/lib/supabaseClient';
import StyledLayoutWrapper from '@/components/shared/StyledLayoutWrapper';

interface ReusableHeroProps {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  showEmailSignup?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imageStyle?: 'monitoring' | 'blog';
  className?: string;
  productLabel?: string;
}

export default function ReusableHero({ title, subtitle, showEmailSignup = false, imageSrc, imageAlt, imageStyle = 'monitoring', className = "", productLabel }: ReusableHeroProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from('email_signups')
      .insert([{ email }]);

    if (error) {
      console.error('Supabase insert error:', error.message);
      return;
    }

    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="relative bg-[#FCFCFC] lg:min-h-screen overflow-hidden">
      <GridLinesLight />
      <div className="flex flex-col lg:flex-row lg:min-h-screen">

        {/* Image Column - Appears first on mobile, right on desktop */}
        {imageSrc && (
          <div className="flex items-center justify-center mt-8 lg:mt-0 lg:flex-1 lg:justify-center lg:order-2">
            {imageStyle === 'monitoring' ? (
              <div className="w-full max-w-xs lg:max-w-[600px] lg:min-w-[500px] xl:max-w-[800px] 2xl:max-w-[900px]">
                <div className="relative w-full aspect-square lg:aspect-[4/3] xl:aspect-[3/2] 2xl:aspect-[5/3]">
                  <Image
                    src={imageSrc}
                    alt={imageAlt || "Hero image"}
                    fill
                    className="object-contain lg:scale-[1.8] lg:-translate-x-8 xl:scale-[3.2] xl:-translate-x-16 2xl:scale-[4.0] 2xl:-translate-x-20"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="relative flex-shrink-0">
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Hero image"}
                  width={800}
                  height={400}
                  className="max-w-[clamp(400px,50vw,800px)] h-auto z-30 translate-y-[40px]"
                />
              </div>
            )}
          </div>
        )}

        {/* Text Content Column - Appears second on mobile, left on desktop */}
        <div className={`relative z-10 flex flex-col justify-center pt-16 pb-8 lg:pt-20 lg:pb-20 lg:max-w-[1400px] lg:w-full lg:order-1 ${className}`}>
          <StyledLayoutWrapper>

          {/* Product Label */}
          {productLabel && (
            <p className='font-chakra-petch text-sm font-[400] uppercase text-[#202020] sm:text-base'>
              {productLabel}
            </p>
          )}

          {/* Main Heading */}
          <h1 className={`font-chakra-petch text-[48px] !font-[400] leading-[0.9] tracking-tighter text-[#202020] sm:text-[70px] 1100:text-[80px] 1300:text-[104px] mb-6 lg:mb-8 ${productLabel ? 'mt-4' : ''}`}>
            {title}
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-britti-sans text-[#202020] leading-[1.4] max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]
                        text-[16px] sm:text-[18px] md:text-xl lg:text-xl xl:text-lg 2xl:text-xl mb-8">
            {subtitle}
          </p>

          {/* Email Signup Form */}
          {showEmailSignup && (
            <>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center">
                    <div
                      className="flex-1 max-w-[250px] px-5 py-2 bg-[#F5F5F5] outline outline-[0.72px] outline-[#E8E8E8] outline-offset-[-0.72px] flex items-center"
                    >
                      <input
                        type="email"
                        placeholder="Enter your e-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-[#202020] font-['Britti_Sans'] text-sm md:text-base"
                      />
                    </div>

                    <button
                      type="submit"
                      className="ml-1 px-5 py-2 bg-[#202020] text-[#FCFCFC] outline outline-[0.72px] outline-[#E8E8E8] outline-offset-[-0.72px] font-['Britti_Sans'] text-sm md:text-base whitespace-nowrap"
                    >
                      Get Updates
                    </button>
                  </div>
                </form>
              ) : (
                <div
                  className="text-[#FB82E9] font-['Britti_Sans'] text-sm md:text-base mt-4"
                >
                  Thanks! You&apos;re subscribed.
                </div>
              )}
            </>
          )}

          </StyledLayoutWrapper>
        </div>

      </div>

      {/* Bottom Rectangles - Only visible in non-stacked views */}
      <div className="hidden lg:block absolute bottom-28 left-0 w-[27%] h-14 bg-[#202020]"></div>
      <div className="hidden lg:block absolute bottom-14 left-0 w-1/3 h-14 bg-[#202020]"></div>
      {/* Full-width bottom line */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-14 bg-[#202020]"></div>
    </section>
  );
}
