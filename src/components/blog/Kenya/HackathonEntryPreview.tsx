import Image from 'next/image';

type HackathonEntryPreviewProps = {
  day: string;
  date: string;
  title: string;
  videoThumbnail: string;
  watchVideoLabel: string;
  xSpaceLabel: string;
};

export default function HackathonEntryPreview({
  day,
  date,
  title,
  videoThumbnail,
  watchVideoLabel,
  xSpaceLabel,
}: HackathonEntryPreviewProps) {
  return (
    <div className="w-full border-b border-[#303030] pb-8 last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left: Day and Date */}
        <div className="space-y-2">
          <h3 className="font-chakra-petch text-2xl font-medium text-[#FCFCFC]">
            {day}
          </h3>
          <p className="font-chakra-petch text-sm uppercase text-[#FCFCFC] opacity-70">
            {date}
          </p>
        </div>

        {/* Center: Video Thumbnail and Title */}
        <div className="space-y-4">
          <div className="relative w-full h-40 bg-[#171717] border border-[#242424] rounded-lg overflow-hidden">
            <Image
              src={videoThumbnail || "https://placehold.co/320x180"}
              alt={`${day} ${title}`}
              fill
              className="object-cover"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          <h4 className="font-britti-sans text-lg font-medium text-[#FCFCFC]">
            {title}
          </h4>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <button className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#FCFCFC] border border-[#303030] px-4 py-2 rounded hover:bg-[#303030] transition-colors">
            {watchVideoLabel}
          </button>
          <button className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#FCFCFC] border border-[#303030] px-4 py-2 rounded hover:bg-[#303030] transition-colors">
            {xSpaceLabel}
          </button>
        </div>
      </div>
    </div>
  );
}