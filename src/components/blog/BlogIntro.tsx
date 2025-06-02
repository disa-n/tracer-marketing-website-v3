export default function BlogIntro() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-10 pt-16 pl-4">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="self-stretch text-[#202020] text-[48px] font-normal leading-[46px] break-words" style={{ fontFamily: 'Britti Sans' }}>
          Tracer Blog
        </div>
        <div className="self-stretch text-[#202020] text-[18px] font-normal leading-[20px] break-words" style={{ fontFamily: 'Britti Sans' }}>
          Insights, announcements, and technical deep-dives from the Tracer team. Stay up to date on platform updates, real-world use cases, and best practices in high-performance compute and observability.
        </div>
      </div>
    </div>
  );
}
