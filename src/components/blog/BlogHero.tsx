'use client';

import { useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';

export default function BlogHero() {
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
    <div className="w-full pt-32 md:pt-10">
      {/* Main Title */}
      <div
        className="w-full text-[#202020] font-['Britti_Sans'] font-normal break-words ml-4 mt-10
                   text-[clamp(48px,12vw,104px)] leading-[0.85] tracking-[-0.02em]"
      >
        Resources
      </div>

      {/* Hero Section with Subscription */}
      <div
        style={{
          width: '100%',
          height: '350px',
          minHeight: '350px',
          position: 'relative',
          top: 40,
          overflow: 'hidden',
          zIndex: 0
        }}
      >
        {/* Description Text */}
        <div
          className="absolute left-4 top-[34px] text-[#202020] font-['Britti_Sans'] font-normal break-words
                     w-[calc(100%-32px)] max-w-[515px]
                     text-[clamp(24px,5vw,40px)] leading-[1.1] tracking-[-0.01em]"
        >
          The latest updates from Tracer. See our changelog for more product updates.
        </div>

        {/* Subscription Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div
              className="absolute left-4 top-[180px] flex justify-between items-center"
              style={{
                width: 'min(calc(100vw - 180px), 250px)'
              }}
            >
              <div
                className="w-full"
                style={{
                  paddingTop: 7.24,
                  paddingBottom: 7.24,
                  paddingLeft: 20,
                  paddingRight: 60,
                  background: '#F5F5F5',
                  overflow: 'hidden',
                  outline: '0.72px #E8E8E8 solid',
                  outlineOffset: '-0.72px',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 7.24,
                  display: 'inline-flex'
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    height: 28,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#202020',
                    fontSize: 'clamp(14px, 3vw, 17.5px)',
                    fontFamily: 'Britti Sans',
                    fontWeight: '400',
                    lineHeight: '27.52px'
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="absolute top-[180px] cursor-pointer"
              style={{
                paddingLeft: 'clamp(20px, 4vw, 30px)',
                paddingRight: 'clamp(20px, 4vw, 30px)',
                paddingTop: 7.24,
                paddingBottom: 7.24,
                left: 'min(calc(100vw - 140px), 266px)',
                background: '#202020',
                overflow: 'hidden',
                outline: '0.72px #E8E8E8 solid',
                outlineOffset: '-0.72px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 7.24,
                display: 'inline-flex',
                border: 'none'
              }}
            >
              <div
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 5.79,
                  display: 'flex'
                }}
              >
                <div
                  style={{
                    color: '#FCFCFC',
                    fontSize: 'clamp(14px, 3vw, 17.5px)',
                    fontFamily: 'Britti Sans',
                    fontWeight: '400',
                    lineHeight: '27.52px',
                    wordWrap: 'break-word'
                  }}
                >
                  Get Updates
                </div>
              </div>
            </button>
          </form>
        ) : (
          <div
            style={{
              left: 16,
              top: 180,
              position: 'absolute',
              color: '#FB82E9',
              fontSize: 'clamp(14px, 3vw, 17.5px)',
              fontFamily: 'Britti Sans',
              fontWeight: '400'
            }}
          >
            Thanks! You&apos;re subscribed.
          </div>
        )}

        {/* Placeholder Image - Hidden on mobile, responsive on larger screens */}
        <div className="hidden lg:block">
          <Image
            style={{
              right: 'clamp(20px, 5vw, 100px)',
              top: -10,
              position: 'absolute',
              zIndex: 10
            }}
            src="/Blog/T-chip.webp"
            alt="Blog hero placeholder"
            width={600}
            height={280}
            className="max-w-[clamp(300px, 40vw, 600px)] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
