'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/assets/logo.webp';
import useGetWidth from '@/hooks/useGetWidth';
import useIsScrollTop from '@/hooks/useIsScrollTop';
import { useParams } from 'next/navigation';
import { SolarHamburgerMenuBold } from '@/utils/icons';
import ScrollLine from '../ScrollLine';
import HeaderContact from './HeaderContact';
import RouteLink from './RouteLink';

function Header({
  routes,
  contact,
}: {
  routes: Route[];
  contact: ContactInfo;
}) {
  const isTop = useIsScrollTop();
  const width = useGetWidth();
  const mobile = width <= 768;
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const params = useParams();

  const toggleNavBar = () => setShow((prevShow) => !prevShow);
  const hideNavBar = () => setShow(false);
  const getLogoWidth = () =>
    isTop ? (mobile ? '185' : '220') : mobile ? '120' : '150';

  useEffect(() => {
    const adjustStyles = () => {
      if (show && mobile) {
        document.body.style.overflow = 'hidden';
        ref.current!.style.height = `${ref.current!.scrollHeight + 80}px`;
      } else {
        document.body.style.overflow = 'visible';
        ref.current!.style.height = isTop ? '4rem' : '2.5rem';
      }
    };

    const clickListener = (e: MouseEvent) => {
      if (mobile && show && !ref.current?.contains(e.target as Node)) {
        hideNavBar();
      }
    };

    adjustStyles();
    document.addEventListener('click', clickListener);
    return () => document.removeEventListener('click', clickListener);
  }, [mobile, show, isTop]);

  return (
    <header className="fixed z-10 top-0 w-full min-h-[2.5rem] bg-slate-200/90 dark:bg-slate-600/90">
      <ScrollLine />
      <nav
        ref={ref}
        className="flex justify-between w-[90%] lg:w-4/5 items-center m-auto my-1 md:my-3 h-[2.5rem] transition-[height]">
        <Link
          href="/"
          className={`min-w-[20%] self-center ${mobile && show && 'hidden'}`}
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
            (mobile && show) || !mobile ? 'visible' : 'invisible'
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
        <HeaderContact contact={contact} mobile={mobile} show={show} />
        <Link
          href="/"
          onClick={hideNavBar}
          className={`absolute bottom-1 right-1 md:self-center ${
            show && mobile ? 'visible' : 'invisible'
          }`}
          title="תפריט">
          <Image
            src={Logo}
            alt="Logo"
            className="w-full bg-slate-50/70 rounded-sm"
          />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
