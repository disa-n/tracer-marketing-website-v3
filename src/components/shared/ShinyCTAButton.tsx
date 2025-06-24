import { useEffect, useState } from "react"

export default function ShinyCTAButton() {
  const [angle, setAngle] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360)
    }, 16)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className="relative group">
      {/* Outer glow ring - follows the sweep */}
      <div
        className="absolute -inset-0.5 blur-sm opacity-75 group-hover:opacity-100 transition duration-300"
        style={{
          background: `conic-gradient(from ${angle}deg, transparent 0%, transparent 5%, rgba(58,35,237,0.6) 10%, rgba(191,81,152,0.7) 20%, rgba(255,162,49,0.6) 30%, transparent 40%, transparent 100%)`
        }}
      ></div>

      <a
        href="https://sandbox.tracer.cloud/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden border-2 border-transparent px-6 h-[40px] sm:px-8 sm:h-[49px] text-sm sm:text-base font-medium text-white shadow-inner outline-offset-4 inline-flex items-center justify-center cursor-pointer"
        style={{
          background:
            `linear-gradient(#202020, #202020) padding-box, ` +
            `conic-gradient(from ${angle}deg, transparent 0%, transparent 5%, #3A23ED 10%, #BF5198 20%, #FFA231 30%, transparent 40%, transparent 100%) border-box`,
          boxShadow: "inset 0 0 0 1px #1a1818",
          fontFamily: "'Britti Sans', sans-serif",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Cursor-following glow effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none opacity-60 transition-opacity duration-300"
          style={{
            left: mousePosition.x - 40,
            top: mousePosition.y - 40,
            width: 80,
            height: 80,
            background: `radial-gradient(circle, rgba(58,35,237,0.6) 0%, rgba(191,81,152,0.4) 40%, rgba(255,162,49,0.2) 70%, transparent 100%)`,
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
        />
      )}

      <span className="relative z-10 font-britti-sans !font-[400]">Try for Free</span>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundSize: "4px 4px",
          backgroundRepeat: "space",
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 0.5px, transparent 0)",
          maskImage:
            `conic-gradient(from ${angle + 45}deg, black, transparent 10% 90%, black)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `conic-gradient(from ${angle}deg, transparent, rgba(58,35,237,0.8) 2%, rgba(191,81,152,0.8) 8%, rgba(255,162,49,0.8) 14%, transparent 25%)`,
        }}
      />
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </a>
    </div>
  )
}
