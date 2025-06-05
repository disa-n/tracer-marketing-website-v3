import Image from 'next/image';

type BlogPreviewCardProps = {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
};

export default function BlogPreviewCard({
  title,
  description,
  date,
  category,
  image,
}: BlogPreviewCardProps) {
  // Check if this is one of the Kenya day posts (1-3)
  const isKenyaDayPost = title.toLowerCase().includes('day one') || 
                         title.toLowerCase().includes('day two') || 
                         title.toLowerCase().includes('day three');
  const imagePosition = isKenyaDayPost ? 'object-right' : 'object-center';

  return (
    <div className="bg-[#171717] border border-[#242424] rounded-lg overflow-hidden hover:border-[#303030] transition-colors">
      <div className="relative h-48 w-full">
        <Image
          src={image || "https://placehold.co/400x240"}
          alt={title}
          fill
          className={`object-cover ${imagePosition}`}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-chakra-petch text-xs uppercase text-[#FCFCFC] opacity-70">
            {category}
          </span>
          <span className="font-chakra-petch text-xs uppercase text-[#FCFCFC] opacity-70">
            {date}
          </span>
        </div>
        <h3 className="font-chakra-petch text-lg font-medium text-[#FCFCFC] mb-2">
          {title}
        </h3>
        <p className="font-britti-sans text-sm text-[#FCFCFC] opacity-80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
