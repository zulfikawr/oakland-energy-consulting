'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const isLightBg =
    pathname === '/about-us' ||
    pathname === '/contact-us' ||
    pathname === '/privacy-policy' ||
    pathname === '/terms-conditions';

  const textColor = isLightBg ? 'text-darkest' : 'text-lightest';
  const menuBgColor = isLightBg ? 'bg-lightest' : 'bg-darkest';

  const textColorReversed = isLightBg ? 'text-lightest' : 'text-darkest';
  const menuBgColorReversed = isLightBg ? 'bg-darkest' : 'bg-lightest';

  return (
    <header className='absolute top-0 right-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-16'>
      <Link href='/'>
        <Image
          src={
            isLightBg ? '/images/logo-full-dark.png' : '/images/logo-full.png'
          }
          alt='Logo'
          width={180}
          height={40}
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className='hidden items-center gap-8 md:flex'>
        <Link
          href='/about-us'
          className={`${textColor} text-body hover:opacity-80`}
        >
          About us
        </Link>
        <Link
          href='/services'
          className={`${textColor} text-body hover:opacity-80`}
        >
          Services
        </Link>
        <Link
          href='/portfolio'
          className={`${textColor} text-body hover:opacity-80`}
        >
          Portfolio
        </Link>
        <Link
          href='/contact-us'
          className={`${isLightBg ? 'bg-darkest' : 'bg-lightest/20 backdrop-blur-sm'} text-lightest text-body rounded-full px-4 py-2 hover:opacity-90`}
        >
          Contact us
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`rounded-full p-2 md:hidden ${menuBgColorReversed}`}
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu className={`h-6 w-6 ${textColorReversed}`} />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Overlay Background */}
        <div
          className={`absolute inset-0 ${menuBgColor}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className='relative h-full w-full'>
          {/* Logo and Close Button */}
          <div className='flex items-center justify-between px-6 pt-6'>
            <Link href='/' onClick={() => setIsMenuOpen(false)}>
              <Image
                src={
                  isLightBg
                    ? '/images/logo-full-dark.png'
                    : '/images/logo-full.png'
                }
                alt='Logo'
                width={180}
                height={40}
              />
            </Link>
            <button
              className={`bg-dark rounded-full p-2 ${menuBgColorReversed}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <X className={`h-6 w-6 ${textColorReversed}`} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className='flex h-[calc(100%-80px)] flex-col items-center justify-center gap-8'>
            <Link
              href='/'
              className={`text-body ${textColor} transition-opacity hover:opacity-80`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/about-us'
              className={`text-body ${textColor} transition-opacity hover:opacity-80`}
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href='/services'
              className={`text-body ${textColor} transition-opacity hover:opacity-80`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/portfolio'
              className={`text-body ${textColor} transition-opacity hover:opacity-80`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href='/contact-us'
              className={`${isLightBg ? 'bg-darkest' : 'bg-lightest/20 backdrop-blur-sm'} text-lightest text-body mt-4 rounded-full px-8 py-3 hover:opacity-90`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
