import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  message = "Loading...", 
  className = "" 
}: LoadingSpinnerProps) {
  return (
    <main className={`w-full min-h-screen pt-20 bg-[#FCFCFC] relative ${className}`}>
      <div className="px-4 md:px-8 max-w-7xl xxl:max-w-none xxl:px-16 mx-auto relative z-10">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-[#202020] font-britti-sans">{message}</div>
        </div>
      </div>
    </main>
  );
}
