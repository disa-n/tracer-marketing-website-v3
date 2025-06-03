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
    <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col min-h-[550px] z-[2] bg-[#FCFCFC]">
        <div className="relative h-56 w-full">
          <Image
            src={ogImage || "https://placehold.co/400x224"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-6 px-6 pb-6 flex-1 flex flex-col">
          <div className="flex items-center mb-6">
            <span className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#202020]">
              {tag}
            </span>
            <span className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#202020] ml-auto">{date}</span>
          </div>
          <Link href={slug === 'kenya-hackathon' ? '/blog/KenyaPage' : `/blog/${slug}`}>
            <h2 className="font-britti-sans text-xl font-medium mb-4 text-[#202020] hover:text-gray-700 transition-colors cursor-pointer">{title}</h2>
          </Link>
          <p className="font-britti-sans text-gray-600 mb-6 flex-1 leading-snug">{description}</p>
          {slug === 'kenya-hackathon' ? (
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
