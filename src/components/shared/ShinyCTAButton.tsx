export default function ShinyCTAButton({
  mobileHeight,
  desktopHeight,
  smallHeight,
  largeHeight,
  isScrolled,
  wide = false,
  textSizeClasses = "text-base sm:text-lg"
}: {
  mobileHeight?: number;
  desktopHeight?: number;
  smallHeight?: number;
  largeHeight?: number;
  isScrolled?: boolean;
  wide?: boolean;
  textSizeClasses?: string;
}) {
  // Use responsive heights if provided, otherwise fall back to mobile/desktop heights
  const height = isScrolled !== undefined
    ? (isScrolled ? smallHeight || 31 : largeHeight || 41)
    : undefined;

  return (
    <a
      href="https://sandbox.tracer.cloud/"
      target="_blank"
      rel="noopener noreferrer"
      className={`shiny-cta flex items-center justify-center transition-all duration-500 ease-in-out ${wide ? 'sctebig' : 'sctesmall'} ${isScrolled !== undefined
        ? (isScrolled
          ? 'text-sm px-4 h-[35px]'
          : 'text-base px-6 h-[45px]')
        : `px-6 sm:px-8 ${textSizeClasses}`
        }`}
      style={{
        '--mobile-height': height ? `${height}px` : `${mobileHeight}px`,
        '--desktop-height': height ? `${height}px` : `${desktopHeight}px`,
      } as React.CSSProperties}
    >
      <span>Try for Free</span>
    </a>
  )
}
