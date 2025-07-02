import { cn } from "@/lib/utils";
import React from "react";

interface DemoButtonProps {
  /** Button text content */
  text?: string;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Mobile height in pixels */
  mobileHeight?: number;
  /** Desktop height in pixels */
  desktopHeight?: number;
  /** Text size classes for responsive typography */
  textSizeClasses?: string;
  /** Width classes for responsive sizing */
  widthClasses?: string;
  /** Whether to render as a link */
  href?: string;
  /** Whether the button should be full width on mobile */
  mobileFullWidth?: boolean;
}

const DemoButton = ({
  text = "Get a Demo",
  className = "",
  onClick,
  mobileHeight = 44,
  desktopHeight = 51,
  textSizeClasses = "text-sm 300:text-sm 400:text-base sm:text-lg",
  widthClasses = "w-[48%] sm:w-auto",
  href = "/product",
  mobileFullWidth = false
}: DemoButtonProps) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center",
    "text-[#FCFCFC] font-britti-sans !font-[400]",
    "transition-all duration-200",
    "demo-button-height",
    "px-4 300:px-5 400:px-6 sm:px-8",
    textSizeClasses,
    mobileFullWidth ? "w-full sm:w-auto" : widthClasses,
    className
  );

  const style = {
    '--mobile-height': `${mobileHeight}px`,
    '--desktop-height': `${desktopHeight}px`,
    background: 'linear-gradient(to bottom, #2D2D2D 0%, #202020 100%)',
    boxShadow: 'inset 0 0 0 0.5px #343434',
  } as React.CSSProperties;

  if (href && !onClick) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={style}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      style={style}
    >
      {text}
    </button>
  );
};

export default DemoButton;
