'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BlogHero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submission
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="w-full pt-32 md:pt-10">
      {/* Main Title */}
      <div
        className="w-full text-[#202020] font-['Britti_Sans'] font-normal break-words ml-4 mt-10
                   text-[72px] leading-[68px] sm:text-[84px] sm:leading-[78px] md:text-[94px] md:leading-[84px] lg:text-[104px] lg:leading-[88px]"
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
          className="absolute left-4 top-[54px] text-[#202020] font-['Britti_Sans'] font-normal break-words
                     w-[calc(100%-32px)] max-w-[515px]
                     text-[30px] leading-[32px] sm:text-[34px] sm:leading-[36px] md:text-[37px] md:leading-[38px] lg:text-[40px] lg:leading-[40px]"
        >
          The latest updates from Tracer. See our changelog for more product updates.
        </div>

        {/* Subscription Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div
              className="absolute left-4 top-[220px] flex justify-between items-center"
              style={{
                width: 'min(250px, calc(100vw - 180px))'
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
                    fontSize: 17.50,
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
              className="absolute top-[220px] cursor-pointer"
              style={{
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 7.24,
                paddingBottom: 7.24,
                left: 'min(266px, calc(100vw - 148px))',
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
                    fontSize: 17.50,
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
              color: '#22c55e',
              fontSize: 17.50,
              fontFamily: 'Britti Sans',
              fontWeight: '400'
            }}
          >
            Thanks! You&apos;re subscribed.
          </div>
        )}

        {/* Placeholder Image */}
        <Image
          style={{
            left: 613,
            top: 56,
            position: 'absolute',
            zIndex: 1
          }}
          src="/Blog/T-chip.webp"
          alt="Blog hero placeholder"
          width={600}
          height={280}
        />
      </div>
    </div>
  );
}