'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.webp';
import IconPhone from '@/public/icon-phone.webp';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import useIsScrollTop from '@/hooks/useIsScrollTop';
import ScrollLine from './ScrollLine';
import useGetWidth from '@/hooks/useGetWidth';
import { useEffect, useRef, useState } from 'react';

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

	useEffect(() => {
		if (!mobile) setShow(true);
		else {
			if (show)
				ref.current!.style.height =
					ref.current!.scrollHeight + 5 + 'px';
			else ref.current!.style.height = '3rem';
		}
	}, [mobile, show, routes.length]);

	const showNavBar = () => setShow(() => !show);
	const onNavClick = () => setShow(() => false);

	useEffect(() => {
		const clickListener = (e: MouseEvent) => {
			if (mobile && show) {
				if (!ref.current?.contains(e.target as Node)) {
					onNavClick();
				}
			}
		};

		document.addEventListener('click', clickListener);
		return () => document.removeEventListener('click', clickListener);
	}, [mobile, show]);

	return (
		<header
			className={`fixed z-50 top-0 w-full min-h-[4rem] ${
				!isTop || (show && mobile)
					? 'bg-slate-200/70'
					: 'bg-transparent'
			}`}
		>
			<ScrollLine />
			<nav
				ref={ref}
				className={`flex justify-between w-[90%] lg:w-4/5 items-center m-auto mt-4 transition-all h-16`}
			>
				<Link
					href="/"
					className={`relative min-w-[20%] ${
						mobile && show && 'hidden'
					}`}
				>
					<Image
						src={Logo}
						alt="logo"
						priority
						width={200}
						height={200}
					/>
				</Link>
				<button
					className="flex self-start show-navbar md:hidden order-1"
					onClick={showNavBar}
					title="Navigation"
					type="button"
				>
					<RxHamburgerMenu />
				</button>
				<div
					className={`navbar-links flex flex-col md:flex-row self-start justify-evenly md:min-w-[50%] max-md:basis-3/5 max-md:mb-10 ${
						show ? 'visible' : 'invisible h-0'
					}`}
				>
					{routes.map((route: Route) => (
						<Link
							key={route.slug.current}
							className="text-stone-900 text-xl font-bold"
							href={`/${route.slug.current}`}
							onClick={onNavClick}
						>
							{route.name}
						</Link>
					))}
				</div>

				<div
					className={`header-contacts flex flex-col md:flex-row gap-2 justify-between md:min-w-[20%] mb-1 self-baseline ${
						show ? 'visible' : 'invisible h-0'
					}`}
				>
					<Link
						href="https://www.facebook.com/"
						className="rounded-full"
						target="_blank"
					>
						<BsFacebook size={45} />
					</Link>
					<Link
						href="https://www.linkedin.com/"
						className="rounded-full overflow-hidden"
						target="_blank"
					>
						<BsLinkedin size={45} />
					</Link>
					<Link
						href={`tel:${contact.phone}`}
						target="_blank"
						className="flex flex-row items-center justify-around text-stone-900 whitespace-nowrap"
					>
						<Image src={IconPhone} alt="icon-phone" sizes="45" />
						<span className="font-bold max-lg:hidden m-1">
							{contact.phone}
						</span>
					</Link>
				</div>

				<Link
					href="/"
					onClick={onNavClick}
					className={`absolute bottom-1 ${
						show && mobile ? 'visible' : 'invisible'
					}`}
				>
					<Image
						src={Logo}
						alt="logo"
						priority
						width={200}
						height={200}
					/>
				</Link>
			</nav>
		</header>
	);
}

export default Header;
