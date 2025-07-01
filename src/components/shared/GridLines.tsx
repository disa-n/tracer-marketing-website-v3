import React from 'react';

export default function GridLines() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
      <div className="w-full h-full max-w-[1600px] mx-auto flex justify-between">
        <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#303030]" />
        <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#303030]" />
        <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#303030]" />
        <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#303030]" />
      </div>
    </div>
  );
}

export function GridLinesLight() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
      <div className="w-full h-full max-w-[1600px] mx-auto grid grid-cols-4 px-6 900:px-8">
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


