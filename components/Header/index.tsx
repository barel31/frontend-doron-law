'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Theme from './Theme';

import Logo from '@/public/assets/logo.webp';
import useGetWidth from '@/hooks/useGetWidth';
import useIsScrollTop from '@/hooks/useIsScrollTop';
import { useParams } from 'next/navigation';
import {
	BiLinkedin,
	ElPhoneAlt,
	BiFacebook,
	SolarHamburgerMenuBold,
} from '@/utils/icons';
import ScrollLine from '../ScrollLine';

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

	useEffect(() => {
		if (show && mobile) {
			document.body.style.overflow = 'hidden';
			ref.current!.style.height = ref.current!.scrollHeight + 80 + 'px';
		} else {
			document.body.style.overflow = 'visible';
			ref.current!.style.height = isTop ? '4rem' : '2.5rem';
		}

		const clickListener = (e: MouseEvent) => {
			if (mobile && show && !ref.current?.contains(e.target as Node)) {
				onNavClick();
			}
		};

		document.addEventListener('click', clickListener);
		return () => document.removeEventListener('click', clickListener);
	}, [mobile, show, isTop]);

	const showNavBar = () => setShow(() => !show);
	const onNavClick = () => setShow(() => false);

	const logoWidth = isTop ? (mobile ? '185' : '220') : mobile ? '120' : '150';

	return (
		<header className="fixed z-10 top-0 w-full min-h-[2.5rem] bg-slate-200/90 dark:bg-slate-600/90">
			<ScrollLine />

			<nav
				ref={ref}
				className="flex justify-between w-[90%] lg:w-4/5 items-center m-auto my-1 md:my-3 h-[2.5rem] transition-[height]"
			>
				<Link
					href="/"
					className={`min-w-[20%] self-center ${
						mobile && show && 'hidden'
					}`}
					title="בית"
				>
					<Image
						src={Logo}
						alt="Logo"
						priority
						width={logoWidth}
						height={logoWidth}
						className={`self-start bg-slate-50/70 rounded-sm transition-all w-[${logoWidth}px] h-auto`}
					/>
				</Link>
				<button
					className={`self-start md:hidden order-1 transition-all ${
						isTop && 'mt-3'
					}`}
					onClick={showNavBar}
					title="Navigation"
					type="button"
				>
					<SolarHamburgerMenuBold className="w-10 m-auto" />
				</button>
				<div
					className={`navbar-links flex flex-col md:flex-row max-md:self-start justify-evenly md:min-w-[50%] max-md:basis-3/5 max-md:mt-3 ${
						(mobile && show) || !mobile ? 'visible' : 'invisible'
					}`}
				>
					{routes.map((route: Route) => (
						<Link
							key={route.slug.current}
							className={`text-slate-800 dark:text-slate-200 text-xl font-bold transition-colors px-2 py-1 rounded-md w-max ${
								params.slug === route.slug.current ||
								(!params.slug && route.slug.current === '/')
									? 'bg-slate-300 dark:bg-slate-500 shadow-md overline scale-105'
									: 'hover:overline hover:scale-105'
							}`}
							href={`/${route.slug.current}`}
							onClick={onNavClick}
							title={route.name}
						>
							{route.name}
						</Link>
					))}
				</div>
				<div
					className={`header-contacts flex flex-col md:flex-row gap-2 justify-between md:min-w-[20%] ${
						(mobile && show) || !mobile ? 'visible' : 'invisible'
					}`}
				>
					<Link
						href={contact.facebook}
						target="_blank"
						rel="noindex nofollow"
						title="Facebook"
						className="hover:text-blue-800 !duration-0"
					>
						<BiFacebook className="w-[45px] rounded-full" />
					</Link>
					<Link
						href={contact.linkedin}
						target="_blank"
						rel="noindex nofollow"
						title="Linkedin"
						className="hover:text-blue-800"
					>
						<BiLinkedin className="w-[45px] rounded-full" />
					</Link>
					<a
						href={`tel:${contact.phone}`}
						target="_blank"
						rel="noindex nofollow"
						className="flex flex-row items-center justify-around whitespace-nowrap hover:text-white dark:hover:text-zinc-900"
						title="טלפון"
					>
						<ElPhoneAlt className="w-[45px]" />
						<span className="font-bold m-1 max-lg:hidden">
							{contact.phone}
						</span>
					</a>
					<Theme show={show} mobile={mobile} />
				</div>
				<Link
					href="/"
					onClick={onNavClick}
					className={`absolute bottom-1 right-1 md:self-center ${
						show && mobile ? 'visible' : 'invisible'
					}`}
					title="תפריט"
				>
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
