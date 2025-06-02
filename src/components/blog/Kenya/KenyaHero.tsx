import Image from 'next/image';

export default function KenyaHero() {
  return (
    <section className="w-full bg-[#202020] pt-[73px] pb-8 relative overflow-hidden">
      <div className="max-w-[1408px] mx-auto px-4 relative">
        {/* Hero Content - Positioned at top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start min-h-[500px]">
          {/* Left Column - Text Content */}
          <div className="space-y-6 pt-4">
            {/* Main Title */}
            <div className="w-full">
              <h1 className="text-neutral-50 text-5xl lg:text-6xl font-normal font-chakra-petch leading-tight">
                Tracer<br />
                Kenya Hackathon &apos;25<br />
                Jun 2 - Jun 6
              </h1>
            </div>

            {/* Description Text */}
            <div className="w-full max-w-[400px]">
              <p className="text-zinc-500 text-lg font-normal font-britti-sans leading-relaxed">
                Tracer combines cutting-edge technological advances with the deep understanding of scientific industries to give insights into enterprises&apos; digital and AI acceleration.
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full">
            <Image
              src="https://placehold.co/1496x997"
              alt="Kenya Hackathon 2025"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
