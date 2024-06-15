'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import Logo from '@/public/logo.webp';
import { SolarHamburgerMenuBold } from '@/lib/icons';

import NavbarContact from './NavbarContact';
import RouteLink from './RouteLink';
import ScrollLine from '../ScrollLine';
import useIsScrollTop from '@/hooks/useIsScrollTop';
import useWindowWidth from '@/hooks/useWindowWidth';
import { cn } from '@/lib/utils';

type NavbarProps = {
  routes: Route[];
  contact: ContactInfo;
};

function Navbar({ routes, contact }: NavbarProps) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isTop = useIsScrollTop();
  const isMobile = useWindowWidth(768) <= 768;
  const params = useParams();

  const toggleNavBar = () => setShow(prevShow => !prevShow);
  const hideNavBar = () => setShow(false);

  const logoWidth = useMemo(
    () => (isTop ? (isMobile ? '185' : '220') : isMobile ? '120' : '160'),
    [isTop, isMobile]
  );

  const isDropdownOpen = useMemo(
    () =>
      routes.some(route => route.isChild && route.slug.current === params.slug),
    [routes, params]
  );

  const adjustStyles = useCallback(() => {
    if (show && isMobile) {
      document.body.style.overflow = 'hidden';
      const padding =
        ref.current!.scrollHeight + (isDropdownOpen ? 0 : 150) + 'px';
      ref.current!.style.height = padding;
    } else {
      document.body.style.overflow = 'visible';
      ref.current!.style.height = isTop ? '4rem' : '2.5rem';
    }
  }, [isMobile, show, isTop, ref, isDropdownOpen]);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (isMobile && show && !ref.current?.contains(e.target as Node)) {
        hideNavBar();
      }
    },
    [isMobile, show, ref]
  );

  useEffect(() => {
    adjustStyles();
    document.addEventListener('click', clickListener);
    return () => document.removeEventListener('click', clickListener);
  }, [adjustStyles, clickListener]);

  return (
    <header className="fixed z-10 top-0 w-full min-h-[2.5rem] bg-slate-200/90 dark:bg-slate-600/90">
      <ScrollLine />
      <nav
        ref={ref}
        className="mx-auto max-2xl:pl-2 max-md:m-3 flex justify-between items-center m-auto my-1 md:my-3 min-h-[2.5rem] h-fit transition-[height] max-w-[2000px]">
        <Link
          href="/"
          className={cn('min-w-[15%] self-center', {
            hidden: isMobile && show,
          })}
          title="בית">
          <Image
            src={Logo}
            alt="Logo"
            priority
            width={logoWidth}
            height={logoWidth}
            className={cn(
              'self-start bg-slate-50/70 rounded-sm transition-all h-auto',
              { width: logoWidth }
            )}
          />
        </Link>
        <button
          className={cn('self-start md:hidden order-1 transition-all', {
            'mt-3': isTop,
          })}
          onClick={toggleNavBar}
          title="Navigation"
          type="button">
          <SolarHamburgerMenuBold className="w-10 m-auto" />
        </button>
        <div
          className={cn(
            'navbar-links self-center flex flex-col md:flex-row max-md:self-start justify-between md:min-w-[70%] max-md:basis-2/5 max-md:mt-3 invisible',
            { visible: (isMobile && show) || !isMobile }
          )}>
          {routes.map((route: Route) =>
            route.isChild ? null : (
              <RouteLink
                route={route}
                onNavClick={hideNavBar}
                params={params}
                key={route._id}
              />
            )
          )}
        </div>
        <NavbarContact contact={contact} isMobile={isMobile} show={show} />
      </nav>
    </header>
  );
}

export default Navbar;
