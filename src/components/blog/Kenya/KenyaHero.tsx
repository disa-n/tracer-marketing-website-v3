import Image from 'next/image';

export default function KenyaHero() {
  return (
    <section className="w-full bg-[#202020] pt-[73px] pb-8 relative overflow-hidden">
      <div className="max-w-[1408px] mx-auto px-4 relative">
        {/* Hero Content - Positioned at top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start min-h-[500px]">
          {/* Left Column - Text Content */}
          <div className="space-y-6 pt-14">
            {/* Main Title */}
            <div className="w-full">
              <h1 className="text-neutral-50 text-5xl lg:text-6xl font-normal font-chakra-petch leading-tight">
                Tracer<br />
                Kenya Hackathon &apos;25<br />
                Jun 2 - Jun 6
              </h1>
            </div>

            {/* Description Text */}
            <div className="w-full max-w-[570px]">
              <p className="text-zinc-500 text-lg font-normal font-britti-sans leading-snug">
                We flew to Kenya for a week-long hackathon to accelerate Tracer&apos;s growth. The goal? Drive verified user activations through a Reddit launch. Follow our journey below. </p>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full">
            <Image
              src="/Blog/Space_Drone.webp"
              alt="Kenya Hackathon 2025"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
