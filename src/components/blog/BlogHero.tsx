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
        style={{
          width: '100%',
          color: '#202020',
          fontSize: 104,
          fontFamily: 'Britti Sans',
          fontWeight: '400',
          lineHeight: '88px',
          wordWrap: 'break-word',
          marginLeft: 16,
          marginTop: 40
        }}
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
          style={{
            width: 515,
            left: 16,
            top: 54,
            position: 'absolute',
            color: '#202020',
            fontSize: 40,
            fontFamily: 'Britti Sans',
            fontWeight: '400',
            lineHeight: '40px',
            wordWrap: 'break-word'
          }}
        >
          The latest updates from Tracer. See our changelog for more product updates.
        </div>

        {/* Subscription Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div
              style={{
                width: 335,
                left: 16,
                top: 220,
                position: 'absolute',
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'inline-flex'
              }}
            >
              <div
                style={{
                  width: 335,
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
              style={{
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 7.24,
                paddingBottom: 7.24,
                left: 350,
                top: 220,
                position: 'absolute',
                background: '#202020',
                overflow: 'hidden',
                outline: '0.72px #E8E8E8 solid',
                outlineOffset: '-0.72px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 7.24,
                display: 'inline-flex',
                border: 'none',
                cursor: 'pointer'
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