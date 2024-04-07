'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import Logo from '@/public/assets/logo.webp';
import { SolarHamburgerMenuBold } from '@/utils/icons';

import HeaderContact from './HeaderContact';
import RouteLink from './RouteLink';
import ScrollLine from '../ScrollLine';
import useIsScrollTop from '@/hooks/useIsScrollTop';
import useWindowWidth from '@/hooks/useWindowWidth';

function Header({
  routes,
  contact,
}: {
  routes: Route[];
  contact: ContactInfo;
}) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isTop = useIsScrollTop();
  const isMobile = useWindowWidth(768) <= 768;
  const params = useParams();

  const toggleNavBar = () => setShow((prevShow) => !prevShow);
  const hideNavBar = () => setShow(false);
  const getLogoWidth = () =>
    isTop ? (isMobile ? '185' : '220') : isMobile ? '120' : '150';

  const adjustStyles = useCallback(() => {
    if (show && isMobile) {
      document.body.style.overflow = 'hidden';
      ref.current!.style.height = `${ref.current!.scrollHeight + 100}px`;
    } else {
      document.body.style.overflow = 'visible';
      ref.current!.style.height = isTop ? '4rem' : '2.5rem';
    }
  }, [isMobile, show, isTop, ref]);

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
        className="flex justify-between lg:w-4/5 items-center m-auto my-1 md:my-3 h-[2.5rem] transition-[height]">
        <Link
          href="/"
          className={`min-w-[20%] self-center ${isMobile && show && 'hidden'}`}
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
          className={`navbar-links flex flex-col md:flex-row max-md:self-start justify-evenly md:min-w-[50%] max-md:basis-3/5 max-md:mt-3 ${
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
