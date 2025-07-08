'use client';

import { EmailSignup } from '@/components/ui/forms/EmailSignup';
import { GridLinesLight } from '@/components/ui/layout/GridLines';
import Link from 'next/link';
import React from 'react';

interface ButtonGroupItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface EmailUpdatesSectionProps {
  title?: string;
  subtitle?: string;
  buttonGroupItems?: ButtonGroupItem[];
  className?: string;
}

const defaultButtonItems: ButtonGroupItem[] = [
  {
    id: 'updates',
    title: 'Product Updates',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12" />
      </svg>
    ),
    href: '/updates'
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/newsletter'
  },
  {
    id: 'blog',
    title: 'Blog Posts',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    href: '/resources'
  }
];

export default function EmailUpdatesSection({
  title = "Stay Updated with Tracer",
  subtitle = "Get the latest updates on AI observability, product releases, and industry insights delivered to your inbox.",
  buttonGroupItems = defaultButtonItems,
  className = ""
}: EmailUpdatesSectionProps) {
  return (
    <section className={`relative bg-[#FCFCFC] py-16 md:py-24 ${className}`}>
      {/* Background Grid Lines */}
      <GridLinesLight />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-britti-sans text-[#202020] font-normal text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
            {title}
          </h2>
          
          {/* Subtitle */}
          <p className="font-britti-sans text-[#666666] text-lg md:text-xl leading-relaxed mb-12">
            {subtitle}
          </p>
          
          {/* Email Signup */}
          <div className="mb-12">
            <EmailSignup
              title=""
              placeholder="Enter your email address"
              buttonText="Subscribe"
              className="max-w-md mx-auto bg-white border-[#E8E8E8] shadow-sm"
            />
          </div>
          
          {/* Button Group */}
          {buttonGroupItems && buttonGroupItems.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {buttonGroupItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white border border-[#E8E8E8] text-[#202020] font-britti-sans text-sm md:text-base hover:bg-[#F8F8F8] hover:border-[#D0D0D0] transition-all duration-200 group"
                >
                  <span className="text-[#666666] group-hover:text-[#202020] transition-colors">
                    {item.icon}
                  </span>
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
