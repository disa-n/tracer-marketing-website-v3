'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
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

const DynamicNavbar: React.FC = () => {
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

  const handleDemoClick = () => {
    openDemo();
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
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
            background: 'rgba(0, 0, 0, 0.8)',
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
              ${isScrolled ? 'ml-6' : 'ml-8'}
            `}>
              <ShinyCTAButton isScrolled={isScrolled} />

              {/* Get a Demo button */}
              <button
                onClick={handleDemoClick}
                className={`font-britti-sans !font-[400] cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black transition-all duration-500 ease-in-out ${
                  isScrolled
                    ? 'h-[31px] text-sm px-4'
                    : 'h-[41px] text-base px-6'
                }`}
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[250] 1000:hidden">
          <div
            className="absolute inset-0 bg-[#303030]/90 backdrop-blur-[200px]"
            onClick={toggleMobileMenu}
          />

          <div className="absolute top-0 right-0 w-full bg-[#303030]/90 backdrop-blur-[200px] flex flex-col min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Link href={"/"} onClick={handleNavLinkClick}>
                <Image src={"/shared/tracer-logo.png"} alt='tracer-logo.png' width={150} height={50} className='w-full shrink-0 max-w-[100px] sm:max-w-[123px]' />
              </Link>
              <button onClick={toggleMobileMenu} className="p-2">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Spacer */}
            <div className='flex flex-col flex-grow'></div>

            {/* Navigation Links */}
            <div className='flex flex-col gap-6 sm:gap-8 px-4 pb-8'>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className='font-britti-sans text-xl sm:text-2xl font-[400] text-[#FCFCFC] hover:text-white/60 transition-all'
                  onClick={handleNavLinkClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Footer with CTA Buttons */}
            <div className="flex flex-col gap-4 px-4 pb-4">
              <div onClick={handleNavLinkClick}>
                <ShinyCTAButton />
              </div>

              <button
                onClick={handleDemoClick}
                className='h-[49px] font-britti-sans !font-[400] cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-8'
              >
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content jump */}
      <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'h-16' : 'h-[85px]'}`} />
    </>
  );
};

export default DynamicNavbar;
