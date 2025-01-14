'use client';

import { FadeContainer, PopUp } from '@/lib/motion';
import { motion } from 'framer-motion';

import Container from '@/components/common/Container';
import ThemeToggle from '@/components/ThemeToggle';
import { buttonVariants } from '@/components/ui/button';
import { useScroll } from '@/hooks/useScroll';
import { RESUME_HREF } from '@/lib/constants';
import { HEADER_LINKS } from '@/lib/routes';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';

const Header = () => {
  const { scrolling } = useScroll();
  const pathname = usePathname();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent',
        scrolling && 'shadow-sm bg-background/60 backdrop-blur border-border'
      )}
    >
      <Container className='flex items-center justify-between h-14'>
        <Link href='/' aria-label='Link to Home Page' className='select-none mr-4'>
          <Logo />
        </Link>
        <nav className='z-10'>
          <motion.ul
            initial='hidden'
            animate='visible'
            variants={FadeContainer}
            className='flex items-center md:gap-x-2'
          >
            {HEADER_LINKS.map(({ href, label }) => {
              return (
                <motion.li className='hidden md:flex' key={`${label}-nav-item`} variants={PopUp}>
                  <Link
                    href={href}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      }),
                      'hover:text-primary hover:bg-transparent',
                      pathname === href && 'text-primary'
                    )}
                  >
                    {label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
        <div className='flex items-center gap-x-3 ml-auto'>
          <ThemeToggle />
          <a
            className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'hidden md:inline-flex')}
            href={RESUME_HREF}
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
          <Link
            className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'hidden md:inline-flex')}
            href='/contact'
          >
            Say Hello
          </Link>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};
export default Header;
