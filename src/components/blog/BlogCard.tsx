import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag?: string;
  ogImage?: string;
  author?: string | string[];
};

export default function BlogCard({
  slug,
  title,
  description,
  date,
  tag = 'general',
  ogImage = '/placeholder-icon.svg',
  author,
}: BlogCardProps) {
  const authors =
    typeof author === "string"
      ? author.split(/,\s*and\s*|,\s*|\s+and\s+/).map((a) => a.trim())
      : Array.isArray(author)
      ? author
      : [];

  return (
    <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col min-h-[500px] z-[2] bg-[#FCFCFC]">
        <div className="relative h-56 w-full">
          <Image
            src={ogImage || "https://placehold.co/400x224"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-4 px-4 pb-8 flex-1 flex flex-col">
          <div className="flex items-center mb-4">
            <span className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#202020]">
              {tag}
            </span>
            <span className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#202020] ml-auto">{date}</span>
          </div>
          <Link href={`/blog/${slug}`}>
            <h2 className="text-xl font-semibold mb-1 hover:text-gray-700 transition-colors cursor-pointer">{title}</h2>
          </Link>
          <p className="text-gray-600 mb-8 flex-1">{description}</p>
          {slug === 'kenta-hackathon' ? (
            <Link href="/blog/KenyaPage" className="mt-auto">
              <div className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#202020] hover:text-[#404040] transition-colors cursor-pointer">
                FOLLOW THE JOURNEY →
              </div>
            </Link>
          ) : authors.length > 0 ? (
            <div className="flex items-center mt-auto">
              <div className="flex -space-x-2">
                {authors.map((a, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium border-2 border-white"
                    title={a}
                  >
                    {a.charAt(0)}
                  </div>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">{authors.join(", ")}</span>
            </div>
          ) : null}
        </div>
      </div>
  );
}
