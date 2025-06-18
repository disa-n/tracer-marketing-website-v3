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
 * - Applies px-4 md:px-8 lg:px-12 for consistent horizontal padding
 * - Uses w-full (no mx-auto, no max-w constraints)
 * - Does not constrain or center content
 * 
 * Usage:
 * - Use for text-based content that should align with the navigation bar
 * - Apply to hero text, feature sections, body text
 * - Do NOT use for image containers or full-width background elements
 */
export default function StyledLayoutWrapper({ 
  children, 
  className = '' 
}: StyledLayoutWrapperProps) {
  return (
    <div className={`w-full px-4 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
