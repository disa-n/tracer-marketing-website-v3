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
          <div className="mb-4 lg:mb-6 ml-8 md:ml-16 lg:ml-24 max-w-fit">
            <h1 className="text-c-black font-britti-sans font-[400] text-[32px] leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[64px] lg:leading-[64px] text-left">
              Coming Soon...
            </h1>
          </div>

          {/* Subheading */}
          <div className="max-w-[800px] ml-8 md:ml-16 lg:ml-24">
            <p className="text-c-black font-britti-sans font-[400] text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] lg:text-[24px] lg:leading-[28px] whitespace-nowrap text-left">
              The page you&apos;re looking for is under construction
            </p>
          </div>
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
