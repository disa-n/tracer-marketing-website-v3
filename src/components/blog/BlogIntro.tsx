import React from 'react';

export default function BlogIntro() {
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      <div className="text-[#202020] font-britti-sans font-normal leading-[46px] break-words text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Tracer Blog
      </div>
      <div className="text-[#202020] text-[18px] font-britti-sans font-normal leading-[20px] break-words text-lg sm:text-xl">
        Insights, announcements, and technical deep-dives from the Tracer team. Stay up to date on platform updates, real-world use cases, and best practices in high-performance compute and observability.
      </div>
    </div>
  );
}