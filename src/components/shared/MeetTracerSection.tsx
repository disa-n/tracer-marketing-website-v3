import Image from 'next/image';

const MeetTracerSection = () => {
  return (
    <section className="bg-[#202020] relative overflow-hidden">
      {/* Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden sm:block overflow-hidden">
        <div className="w-full h-full flex justify-between">
          <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#404040]" />
          <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#404040]" />
          <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#404040]" />
          <div className="w-0 h-full opacity-50 outline outline-[0.25px] outline-offset-[-0.125px] outline-[#404040]" />
        </div>
      </div>

      <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center px-4 md:px-8 lg:px-12">

        {/* Jet Image - Background */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src="/home/T-Asset-Jet-v2.webp"
            alt="Tracer Jet"
            width={1000}
            height={500}
            className="w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px] h-auto object-contain opacity-90"
            priority
          />
        </div>

        {/* Text Content - One Line */}
        <div className="relative z-10 flex items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {/* Meet Tracer */}
          <h2 className="font-britti-sans text-white text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] font-normal leading-[0.9] tracking-tighter whitespace-nowrap">
            Meet Tracer
          </h2>

          {/* Tracer Logo */}
          <div className="flex items-center">
            <Image
              src="/home/Tracer-White-Transparent.svg"
              alt="Tracer Logo"
              width={200}
              height={67}
              className="w-[33px] md:w-[50px] lg:w-[85px] xl:w-[100px] h-auto"
            />
          </div>

          {/* The Solution */}
          <h2 className="font-britti-sans text-white text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] font-normal leading-[0.9] tracking-tighter whitespace-nowrap">
            The Solution
          </h2>
        </div>

      </div>
    </section>
  );
};

export default MeetTracerSection;
