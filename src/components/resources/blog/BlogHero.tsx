'use client';

import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import { useState } from 'react';

export default function BlogHero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Only save to Supabase if client is available
    if (supabase) {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email }]);

      if (error) {
        console.error('Supabase insert error:', error.message);
        return;
      }
    } else {
      console.warn('Supabase client not available. Email signup not saved to database.');
    }

    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="w-full pt-16 md:pt-8 lg:pt-24 xl:pt-20 2xl:pt-16">
      <div className="px-4 md:px-8 lg:px-12 w-full">

        {/* Product Label */}
        <p className='font-chakra-petch text-sm font-[400] uppercase text-[#202020] sm:text-base mt-4 md:mt-6 lg:mt-8 xl:mt-6 2xl:mt-4'>
          _TRACER RESOURCES
        </p>

        <div
          className="text-[#202020] font-['Britti_Sans'] font-normal break-words mt-4
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[104px]
                     leading-[0.85] tracking-[-0.02em]"
        >
          Resources
        </div>

        <div className="w-full mt-6 md:mt-8 lg:mt-8 xl:mt-6 2xl:mt-4 flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-8 pb-16 md:pb-20 lg:pb-0">
          {/* Left Content */}
          <div className="flex-1">
            <div
              className="text-[#202020] font-['Britti_Sans'] font-normal break-words max-w-[515px] mb-8
                         text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px]
                         leading-[1.1] tracking-[-0.01em]"
            >
              The latest updates from Tracer. See our bi-weekly roundups for the latest company and product developments.
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                  <div
                    className="flex-1 max-w-[250px] px-5 py-2 bg-[#F5F5F5] outline outline-[0.72px] outline-[#E8E8E8] outline-offset-[-0.72px] flex items-center"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
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
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative flex-shrink-0">
            <Image
              src="/Blog/T-chip.webp"
              alt="Blog hero placeholder"
              width={600}
              height={280}
              className="max-w-[clamp(300px,40vw,600px)] h-auto z-30 translate-y-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
