import Image from 'next/image'

interface ColorBreakLineProps {
  height?: string;
  className?: string;
  mobileOnly?: boolean;
}

/**
 * ColorBreakLine - A reusable color strip component using footer-b.png
 * @param height - Custom height class (default: h-[12px])
 * @param className - Additional CSS classes
 * @param mobileOnly - Whether to show only on mobile/tablet (default: true)
 */
export default function ColorBreakLine({ 
  height = 'h-[12px]', 
  className = '', 
  mobileOnly = true 
}: ColorBreakLineProps) {
  const visibilityClass = mobileOnly ? 'lg:hidden' : '';
  
  return (
    <div className={`${height} w-full ${visibilityClass} ${className}`}>
      <Image 
        src="/platform/footer-b.png" 
        alt="color-break-line" 
        width={1600} 
        height={60} 
        className="h-full w-full object-fill md:object-cover" 
      />
    </div>
  );
}
