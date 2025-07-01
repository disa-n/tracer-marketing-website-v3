"use client"
import Image from 'next/image'

const ComingSoon = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#FCFCFC] overflow-hidden">
      {/* Responsive styles for the robot image */}
      <style jsx>{`
        .robot-image {
          position: absolute;
          z-index: 5;
        }

        /* Mobile */
        @media (max-width: 639px) {
          .robot-image {
            right: -50px;
            top: 330px;
            width: 400px;
            height: 480px;
          }
        }

        /* Small tablets */
        @media (min-width: 640px) and (max-width: 767px) {
          .robot-image {
            right: -80px;
            top: 330px;
            width: 420px;
            height: 500px;
          }
        }

        /* Medium tablets */
        @media (min-width: 768px) and (max-width: 1023px) {
          .robot-image {
            right: -120px;
            top: 280px;
            width: 650px;
            height: 700px;
          }
        }

        /* Large screens */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .robot-image {
            right: -200px;
            top: 230px;
            width: 900px;
            height: 950px;
          }
        }

        /* Extra large screens */
        @media (min-width: 1280px) {
          .robot-image {
            right: -280px;
            top: 180px;
            width: 1100px;
            height: 1150px;
          }
        }
      `}</style>

      {/* Background container with max-width constraint */}
      <div className="relative mx-auto max-w-[1440px] w-full min-h-screen">



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
        <div className="robot-image">
          <Image
            src="/Coming soon/T-Asset-Robot.svg"
            alt="Tracer Asset Robot"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
