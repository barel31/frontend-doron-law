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
		else if (show)
			ref.current!.style.height = ref.current!.scrollHeight + 80 + 'px';
		else ref.current!.style.height = '2.5rem';
	}, [mobile, show]);

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

	const showNavBar = () => setShow(() => !show);
	const onNavClick = () => setShow(() => false);

	return (
		<header
			className={`fixed z-50 top-0 w-full min-h-[2.5rem] ${
				!isTop || (show && mobile)
					? 'bg-slate-200/90'
					: 'bg-transparent'
			}`}
		>
			<ScrollLine />
			<nav
				ref={ref}
				className="flex justify-between w-[90%] lg:w-4/5 items-center m-auto mt-3 md:my-3 transition-all h-[2.5rem]"
			>
				<Link
					href="/"
					className={`relative min-w-[20%] self-start ${
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
					className={`navbar-links flex flex-col md:flex-row max-md:self-start justify-evenly md:min-w-[50%] max-md:basis-3/5 ${
						show ? 'visible' : 'invisible'
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
					className={`header-contacts flex flex-col md:flex-row gap-2 justify-between md:min-w-[20%] ${
						show ? 'visible' : 'invisible'
					}`}
				>
					<Link
						href={contact.facebook}
						className="rounded-full"
						target="_blank"
						rel="noindex nofollow"
					>
						<BsFacebook size={45} />
					</Link>
					<Link
						href={contact.linkedin}
						className="rounded-full overflow-hidden"
						rel="noindex nofollow"
					>
						<BsLinkedin size={45} />
					</Link>
					<Link
						href={`tel:${contact.phone}`}
						target="_blank"
						rel="noindex nofollow"
						className="flex flex-row items-center justify-around text-stone-900 whitespace-nowrap"
					>
						<Image src={IconPhone} alt="icon-phone" sizes="45" />
						<span className={`font-bold m-1 ${!mobile && show && 'max-lg:hidden'}`}>
							{contact.phone}
						</span>
					</Link>
				</div>

				<Link
					href="/"
					onClick={onNavClick}
					className={`absolute bottom-1 right-1 md:self-center ${
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
