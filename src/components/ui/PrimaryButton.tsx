import { cn } from "@/lib/utils";

const PrimaryButton = ({ title, className, onClick }: { title: string, className?: string, onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={cn("flex h-[48px] w-full cursor-pointer items-center justify-center bg-[#E8E8E8] px-8 py-3 font-britti-sans text-sm font-normal text-foreground hover:bg-[#E8E8E8]/80 sm:w-auto md:h-[49px] md:text-base", className)}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
