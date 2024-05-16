'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import Logo from '@/public/logo.webp';
import { SolarHamburgerMenuBold } from '@/utils/icons';

import HeaderContact from './HeaderContact';
import RouteLink from './RouteLink';
import ScrollLine from '../ScrollLine';
import useIsScrollTop from '@/hooks/useIsScrollTop';
import useWindowWidth from '@/hooks/useWindowWidth';

type HeaderProps = {
  routes: Route[];
  contact: ContactInfo;
};

function Header({ routes, contact }: HeaderProps) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isTop = useIsScrollTop();
  const isMobile = useWindowWidth(768) <= 768;
  const params = useParams();

  const toggleNavBar = () => setShow(prevShow => !prevShow);
  const hideNavBar = () => setShow(false);
  const getLogoWidth = () =>
    isTop ? (isMobile ? '185' : '220') : isMobile ? '120' : '160';

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
          className={`min-w-[15%] self-center ${isMobile && show && 'hidden'}`}
          title="בית">
          <Image
            src={Logo}
            alt="Logo"
            priority
            width={getLogoWidth()}
            height={getLogoWidth()}
            className={`self-start bg-slate-50/70 rounded-sm transition-all w-[${getLogoWidth()}px] h-auto`}
          />
        </Link>
        <button
          className={`self-start md:hidden order-1 transition-all ${
            isTop && 'mt-3'
          }`}
          onClick={toggleNavBar}
          title="Navigation"
          type="button">
          <SolarHamburgerMenuBold className="w-10 m-auto" />
        </button>
        <div
          className={`navbar-links self-center mx-2 flex flex-col md:flex-row max-md:self-start justify-between md:min-w-[70%] max-md:basis-2/5 max-md:mt-3 ${
            (isMobile && show) || !isMobile ? 'visible' : 'invisible'
          }`}>
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
        <HeaderContact contact={contact} isMobile={isMobile} show={show} />
      </nav>
    </header>
  );
}

export default Header;
