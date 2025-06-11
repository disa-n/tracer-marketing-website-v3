import React from 'react';

export default function GridLines() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
      <div className="w-full h-full max-w-[1600px] mx-auto flex justify-between">
        <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#404040]" />
        <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#404040]" />
        <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#404040]" />
        <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#404040]" />
      </div>
    </div>
  );
}
