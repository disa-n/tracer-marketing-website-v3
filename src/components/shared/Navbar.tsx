'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import ShinyCTAButton from './ShinyCTAButton';
import { useDemo } from '../ScheduleDemo';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Why Monitoring', href: '/why-monitoring' },
  { label: 'Product', href: '/product' },
  { label: 'Technology', href: '/technology' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
];

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openDemo } = useDemo();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDemoClick = () => {
    openDemo();
    closeMobileMenu();
  };

  const handleNavLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <>
      {/* Navbar */}
      <div className={`
        w-full flex items-center justify-center fixed top-0 left-0 z-[300] text-black transition-all duration-500 ease-in-out
        ${isScrolled ? 'px-3 sm:px-4 pt-4' : 'px-3 sm:px-4 pt-4'}
      `}>
        <div
          className={`
            w-full flex items-center transition-all duration-500 ease-in-out
            ${isScrolled
              ? 'max-w-[1000px] h-[55px] p-2'
              : 'max-w-[1408px] 1600:max-w-[1500px] 1700:max-w-[1600px] 1800:max-w-[1700px] 1900:max-w-[1800px] 1920:max-w-[1900px] h-[65px] p-2'
            }
            ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          `}
          style={{
            background: 'rgba(80, 80, 80, 0.7)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div className={`
            w-full flex items-center transition-all duration-500 ease-in-out
            ${isScrolled ? 'justify-between' : 'justify-between'}
          `}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <Image
                  src={"/shared/tracer-logo.png"}
                  alt='tracer-logo.png'
                  width={150}
                  height={50}
                  className={`
                    w-full shrink-0 transition-all duration-500 ease-in-out
                    ${isScrolled ? 'max-w-[80px] sm:max-w-[100px]' : 'max-w-[100px] sm:max-w-[123px]'}
                  `}
                />
              </Link>
            </div>

            {/* Desktop Navigation - Right Aligned */}
            <div className={`
              h-full hidden 1000:flex items-center justify-end transition-all duration-500 ease-in-out
              ${isScrolled ? 'flex-1' : 'flex-1'}
            `}>
              <div className={`
                flex items-center h-full gap-6 !font-[400] font-britti-sans text-white transition-all duration-500 ease-in-out
                ${isScrolled ? 'text-sm' : 'text-base'}
              `}>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className='hover:text-white/60 transition-all'
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`
              hidden 1000:flex items-center gap-3 h-full flex-shrink-0 transition-all duration-500 ease-in-out
              ${isScrolled ? 'ml-7' : 'ml-8'}
            `}>
              <ShinyCTAButton isScrolled={isScrolled} smallHeight={35} largeHeight={45} />

              {/* Get a Demo button */}
              <button
                onClick={handleDemoClick}
                className={`font-britti-sans font-normal cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black transition-all duration-500 ease-in-out ${isScrolled
                  ? 'h-[33px] text-sm px-4'
                  : 'h-[45px] text-base px-6'
                  }`}
                style={{ fontFamily: 'inherit', lineHeight: '1.2' }}
              >
                Get a Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className='flex 1000:hidden p-1'
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Image src={"/shared/menu-icon.svg"} alt='menu' width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-[200] 1000:hidden"
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <div className="fixed inset-0 z-[300] 1000:hidden">
            <div className="bg-[#303030] w-full h-full flex flex-col">

              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <Link href="/" onClick={handleNavLinkClick}>
                  <Image
                    src="/shared/tracer-logo.png"
                    alt="Tracer Logo"
                    width={100}
                    height={33}
                    className="w-[100px]"
                  />
                </Link>

                <button
                  onClick={closeMobileMenu}
                  className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-6">
                <nav className="space-y-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={handleNavLinkClick}
                      className="block text-white text-2xl font-britti-sans font-[400] hover:text-white/70 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* CTA Buttons */}
              <div className="p-6 space-y-4">
                <div onClick={handleNavLinkClick}>
                  <ShinyCTAButton mobileHeight={51} desktopHeight={51} wide={true} />
                </div>

                <button
                  onClick={handleDemoClick}
                  className="w-full h-[51px] bg-[#E8E8E8] text-black font-britti-sans font-[400] hover:bg-[#D8D8D8] transition-colors"
                >
                  Get a Demo
                </button>
              </div>

            </div>
          </div>
        </>
      )}


    </>
  );
};

export default NavigationBar;

