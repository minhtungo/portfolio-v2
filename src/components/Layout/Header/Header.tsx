import { Inter } from '@next/font/google';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from '@/components/common/Link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { Icon, Logo } from '@/components';
import { FadeContainer, FromLeftVariant } from '@/lib/FramerMotionVariants';
import DropdownMenu from './DropdownMenu';
import HamBurger from './Hamburger';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

const inter = Inter({ subsets: ['latin'] });

const navigationRoutes: string[] = [
  'home',
  'about',
  'journey',
  'projects',
  'uses',
  'contact',
];

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [navOpen, setNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [mounted]);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    return (
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={22}
        moonColor='#FFD700'
        sunColor='#e6c300'
      />
    );
  };

  const control = useAnimation();

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const addShadowToNavbar = useCallback(() => {
    if (window.pageYOffset > 10) {
      navRef.current!.classList.add(
        ...[
          'shadow',
          'backdrop-blur-xl',
          'bg-card-background-light',
          'dark:bg-card-background-dark',
          'border-b',
          'border-gray-200',
          'dark:border-transparent-white',
        ]
      );
      control.start('visible');
    } else {
      navRef.current!.classList.remove(
        ...[
          'shadow',
          'backdrop-blur-xl',
          'bg-card-background-light',
          'dark:bg-card-background-dark',
          'border-b',
          'border-gray-200',
          'dark:border-transparent-white',
        ]
      );
      control.start('hidden');
    }
  }, [control]);

  useEffect(() => {
    window.addEventListener('scroll', addShadowToNavbar);
    return () => {
      window.removeEventListener('scroll', addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  // to lock the scroll when mobile is open
  const lockScroll = () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('lock-scroll');
  };

  const handleClick = () => {
    lockScroll();
    setNavOpen(!navOpen);
  };

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <header
      className={`${inter.className} fixed top-0 left-0 right-0 z-50 w-full backdrop-filter`}
      ref={navRef}
    >
      <div className='flex items-center justify-between py-2 px-4 lg:px-6 xl:px-12'>
        <HamBurger open={navOpen} handleClick={handleClick} />
        <AnimatePresence>
          {navOpen && (
            <MobileMenu links={navigationRoutes} handleClick={handleClick} />
          )}
        </AnimatePresence>
        <Link
          href='/'
          className='mr-3'
          aria-label='Link to Home Page'
          animation={false}
        >
          <motion.div
            initial='hidden'
            animate='visible'
            variants={FromLeftVariant}
          >
            <Logo className='hidden text-lg font-semibold lg:inline-flex' />
          </motion.div>
        </Link>
        {/* Top Nav list */}
        <motion.nav className='z-10 hidden lg:inset-0 lg:flex lg:justify-center'>
          <motion.ul
            initial='hidden'
            animate='visible'
            variants={FadeContainer}
            className='flex items-center lg:gap-2'
          >
            {navigationRoutes.map((link, index) => {
              return (
                <li key={index}>
                  <NavItem href={`${link}`} text={link} />
                </li>
              );
            })}
          </motion.ul>
        </motion.nav>
        <div className='flex items-center space-x-4'>
          <motion.div className='hidden items-center space-x-4 text-gray-600 dark:text-gray-300 lg:flex'>
            <Icon>
              <Link
                href='https://github.com/minhtungo'
                className='hover:text-blue-500'
                animation={false}
              >
                <FiGithub className='h-5 w-5' />
              </Link>
            </Icon>

            <Icon>
              <Link
                href='https://www.linkedin.com/in/minhtungo/'
                className='hover:text-blue-500'
                animation={false}
              >
                <FiLinkedin className='h-5 w-5' />
              </Link>
            </Icon>
          </motion.div>
          <div className='flex items-center space-x-3'>
            <Icon>
              {/* DarkMode Container */}
              {renderThemeChanger()}
            </Icon>
            <DropdownMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;