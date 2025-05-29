import Image from 'next/image';

const ComingSoon = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#FCFCFC] overflow-hidden">
      {/* Background container with max-width constraint */}
      <div className="relative mx-auto max-w-[1440px] w-full min-h-screen">

        {/* Vertical Gridlines */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {[12, 37, 62, 87].map((percent, index) => (
            <div
              key={index}
              className="absolute top-0 h-full w-[0.5px] bg-[#E8E8E8]"
              style={{ left: `${percent}%`, transform: 'translateX(-50%)' }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 md:px-16 lg:px-[65px]">

          {/* Main Heading */}
          <div className="mb-4 lg:mb-6">
            <h1 className="text-c-black font-britti-sans font-[400] text-[48px] leading-[48px] md:text-[72px] md:leading-[72px] lg:text-[104px] lg:leading-[104px]">
              Coming Soon...
            </h1>
          </div>

          {/* Subheading */}
          <div className="max-w-[800px]">
            <p className="text-c-black font-britti-sans font-[400] text-[20px] leading-[24px] md:text-[28px] md:leading-[32px] lg:text-[40px] lg:leading-[38px] whitespace-nowrap">
              The page you&apos;re looking for is under construction
            </p>
          </div>
        </div>

        {/* Tracer Logo - positioned at bottom center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <Image
            src="/shared/tracer-logo-black.png"
            alt="Tracer Logo"
            width={123}
            height={29}
            className="w-full max-w-[123px] h-auto"
          />
        </div>

        {/* T-Asset Robot Image - Responsive */}
        <div className="absolute
          right-[50px] bottom-0 w-[250px] h-[300px]
          sm:right-[50px] sm:bottom-0 sm:w-[250px] sm:h-[300px]
          md:right-[0px] md:bottom-0 md:w-[400px] md:h-[450px]
          lg:right-[-50px] lg:bottom-0 lg:w-[550px] lg:h-[600px]
          xl:right-[-100px] xl:bottom-0 xl:w-[750px] xl:h-[800px]">
          <Image
            src="/Coming soon/T-Asset-Robot.svg"
            alt="Tracer Asset Robot"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
