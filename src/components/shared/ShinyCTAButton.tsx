export default function ShinyCTAButton({ mobileHeight, desktopHeight, wide = false }: { mobileHeight: number; desktopHeight: number; wide?: boolean }) {
  return (
    <a
      href="https://sandbox.tracer.cloud/"
      target="_blank"
      rel="noopener noreferrer"
      className={`shiny-cta px-6 sm:px-8 text-sm sm:text-base flex items-center justify-center ${wide ? 'sctebig' : 'sctesmall'}`}
      style={{
        '--mobile-height': `${mobileHeight}px`,
        '--desktop-height': `${desktopHeight}px`,
      } as React.CSSProperties}
    >
      <span>Try for Free</span>
    </a>
  )
}
