import Image from 'next/image';

type KenyaGridItemProps = {
  date: string;
  description: string;
  imageSrc?: string;
  caption?: string;
};



function KenyaGridItem({ date, description, imageSrc, caption }: KenyaGridItemProps) {
  return (
    <div className="w-full h-80 relative bg-[#202020] border-t border-b border-[#303030]">
      {/* Left Section */}
      <div className="w-[514px] left-0 top-[34px] absolute">
        {/* Date */}
        <div className="text-white text-[13.20px] font-normal font-chakra-petch uppercase leading-5 tracking-[1.60px] mb-4">
          {date}
        </div>

        {/* Description Text */}
        <div className="text-[#888888] text-[18.36px] font-normal font-britti-sans mb-8 leading-relaxed">
          {description}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mt-16">
          {/* Watch Video Button */}
          <div className="flex items-center">
            <div className="w-4 h-[18px] mr-6 flex items-center justify-center">
              <Image
                src="/Blog/play.svg"
                alt="Play"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
            <div className="text-[#898989] text-[12.80px] font-normal font-chakra-petch leading-5">
              Watch video
            </div>
          </div>

          {/* X Space Button */}
          <div className="flex items-center">
            <div className="w-4 h-[18px] mr-6 flex items-center justify-center">
              <Image
                src="/Blog/mic.svg"
                alt="Microphone"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
            <div className="text-[#898989] text-[12.80px] font-normal font-chakra-petch leading-5">
              X Space
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Image Container */}
      <div className="w-[741.35px] h-[260px] left-[667px] top-[34px] absolute bg-[#171717] overflow-hidden rounded border border-[#242424]">
        <div className="w-full h-full relative">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={caption || 'Hackathon image'}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717] to-transparent" style={{ background: 'linear-gradient(90deg, #171717 0%, #171717 20%, rgba(0, 0, 0, 0) 75%)' }} />
        </div>

        {/* Caption Section */}
        <div className="w-[369.68px] h-[52px] left-[2px] top-[158px] absolute">
          <div className="w-[305.68px] h-6 left-[32px] top-[24px] absolute">
            <div className="left-[24px] top-[2px] absolute flex justify-center flex-col text-[#B4B4B4] text-[12.80px] font-normal font-chakra-petch leading-5">
              Blog post
            </div>
            <div className="w-4 h-6 left-0 top-0 absolute overflow-hidden">
              <div className="w-3 h-3 left-[2px] top-[6px] absolute border border-white" />
              <div className="w-[9.33px] h-[9.33px] left-[5.33px] top-[5.34px] absolute border border-white" />
            </div>
          </div>
          <div className="left-[32px] top-[156px] absolute flex justify-center flex-col text-[#B4B4B4] text-[16.70px] font-normal font-azeret-mono leading-7">
            {caption || 'Placeholder Caption'}
          </div>
        </div>
      </div>
    </div>
  );
}

type KenyaGridProps = {
  items?: KenyaGridItemProps[];
};

export default function KenyaGrid({ items }: KenyaGridProps) {
  const defaultItems: KenyaGridItemProps[] = [
    {
      date: "Mon, 02 June",
      description: "Placeholder Description Text",
      imageSrc: "/Blog/globe-preview-image.webp",
      caption: "Supabase UI Library"
    },
    {
      date: "Tue, 03 June",
      description: "Placeholder Description Text",
      imageSrc: "/Blog/Tues-cubes.webp",
      caption: "Backend Development"
    },
    {
      date: "Wed, 04 June",
      description: "Placeholder Description Text",
      imageSrc: "/Blog/Weds-plane.webp",
      caption: "Frontend & Design"
    },
    {
      date: "Thu, 05 June",
      description: "Placeholder Description Text",
      imageSrc: "/Blog/Thurs-superconductor.webp",
      caption: "Integration & Testing"
    },
    {
      date: "Fri, 06 June",
      description: "Placeholder Description Text",
      imageSrc: "/Blog/Fri-wheel.webp",
      caption: "Launch Day"
    }
  ];

  const gridItems = items || defaultItems;

  return (
    <div className="w-full max-w-[1408px] mx-auto px-4">
      {gridItems.map((item, index) => (
        <KenyaGridItem
          key={index}
          date={item.date}
          description={item.description}
          imageSrc={item.imageSrc}
          caption={item.caption}
        />
      ))}
    </div>
  );
}
