import React from 'react';

export default function GridLines() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
      <div className="w-full h-full max-w-[1800px] mx-auto grid grid-cols-4 px-6 900:px-8">
        <div className="flex justify-center">
          <div className="border-l border-[#303030] h-full opacity-50" style={{ width: '1px' }} />
        </div>
        <div className="flex justify-center">
          <div className="border-l border-[#303030] h-full opacity-50" style={{ width: '1px' }} />
        </div>
        <div className="flex justify-center">
          <div className="border-l border-[#303030] h-full opacity-50" style={{ width: '1px' }} />
        </div>
        <div className="flex justify-center">
          <div className="border-l border-[#303030] h-full opacity-50" style={{ width: '1px' }} />
        </div>
      </div>
    </div>
  );
}

export function GridLinesLight() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
      <div className="w-full h-full max-w-[1800px] mx-auto grid grid-cols-4 px-6 900:px-8">
        <div className="flex justify-center">
          <div className="border-l border-[#F0F0F0] h-full opacity-60" style={{ width: '1px' }} />
        </div>
        <div className="flex justify-center">
          <div className="border-l border-[#F0F0F0] h-full opacity-60" style={{ width: '1px' }} />
        </div>
        <div className="flex justify-center">
          <div className="border-l border-[#F0F0F0] h-full opacity-60" style={{ width: '1px' }} />
        </div>
        <div className="flex justify-center">
          <div className="border-l border-[#F0F0F0] h-full opacity-60" style={{ width: '1px' }} />
        </div>
      </div>
    </div>
  );
}


