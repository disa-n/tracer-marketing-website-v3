import React from 'react';

interface StyledLayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * StyledLayoutWrapper - A reusable layout wrapper component that ensures consistent
 * alignment between navigation bar and text content across all pages.
 *
 * Features:
 * - Applies responsive max-width constraints matching the navbar
 * - Centers content with mx-auto
 * - Applies px-4 md:px-8 lg:px-12 for consistent horizontal padding
 * - Responsive max-width: 1408px -> 1500px -> 1600px -> 1700px -> 1800px -> 1900px
 *
 * Usage:
 * - Use for text-based content that should align with the navigation bar
 * - Apply to hero text, feature sections, body text
 * - Ensures consistent width across all sections
 */
export default function StyledLayoutWrapper({
  children,
  className = ''
}: StyledLayoutWrapperProps) {
  return (
    <div className={`w-full max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] mx-auto px-4 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
