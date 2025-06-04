export default function KenyaGridItem({ date, description, imageSrc, caption, slug }: KenyaGridItemProps) {
  console.log(`Rendering KenyaGridItem with slug: ${slug}`);
  
  return (
    <div className="relative w-full h-[200px] mb-4 overflow-hidden group">
      {/* Background image */}
      <div className="absolute inset-0 bg-black">
        <Image
          src={imageSrc}
          alt={caption}
          fill
          className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
        <div>
          <Link
            href={`/blog/${slug}`}
            className="left-[24px] top-[2px] absolute flex justify-center flex-col text-[#B4B4B4] text-[12.80px] font-normal font-chakra-petch leading-5 hover:text-white transition-colors cursor-pointer"
            onClick={() => console.log(`Clicked link to /blog/${slug}`)}
          >
            Blog post
          </Link>
          <h3 className="text-xl font-semibold mt-6">{caption}</h3>
          <p className="text-sm mt-2">{description}</p>
        </div>
        <div className="text-xs">{date}</div>
      </div>
    </div>
  );
}