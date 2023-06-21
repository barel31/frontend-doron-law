'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Theme from './Theme';

import Logo from '@/public/logo.webp';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaPhoneSquareAlt } from 'react-icons/fa';

import useGetWidth from '@/hooks/useGetWidth';
import useIsScrollTop from '@/hooks/useIsScrollTop';
import { useParams } from 'next/navigation';

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
			ref.current!.style.height = '3rem';
		}

		const clickListener = (e: MouseEvent) => {
			if (mobile && show && !ref.current?.contains(e.target as Node)) {
				onNavClick();
			}
		};

		document.addEventListener('click', clickListener);
		return () => document.removeEventListener('click', clickListener);
	}, [mobile, show]);

	const showNavBar = () => setShow(() => !show);
	const onNavClick = () => setShow(() => false);

	return (
		<header
			className={`fixed z-10 top-0 w-full min-h-[3rem] ${
				!isTop || (show && mobile)
					? 'bg-slate-200/90 dark:bg-slate-600/90'
					: 'bg-transparent'
			}`}
		>
			<nav
				ref={ref}
				className="flex justify-between w-[90%] lg:w-4/5 items-center m-auto mt-3 md:my-3 transition-[height] h-[3rem]"
			>
				<Link
					href="/"
					className={`relative min-w-[20%] self-center ${
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
						(mobile && show) || !mobile ? 'visible' : 'invisible'
					}`}
				>
					{routes.map((route: Route) => (
						<Link
							key={route.slug.current}
							className={`text-slate-800 dark:text-slate-200 text-xl font-bold transition-colors px-2 py-1 rounded-md ${
								params.slug === route.slug.current ||
								(!params.slug && route.slug.current === '/')
									? 'bg-slate-300 dark:bg-slate-500 shadow-md'
									: 'hover:overline hover:scale-105'
							}`}
							href={`/${route.slug.current}`}
							onClick={onNavClick}
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
					>
						<BsFacebook size={45} className="rounded-full" />
					</Link>
					<Link
						href={contact.linkedin}
						target="_blank"
						rel="noindex nofollow"
					>
						<BsLinkedin size={45} className="rounded-full" />
					</Link>
					<a
						href={`tel:${contact.phone}`}
						target="_blank"
						rel="noindex nofollow"
						className="flex flex-row items-center justify-around whitespace-nowrap"
					>
						<FaPhoneSquareAlt size="45" className="rounded-full" />
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
				>
					<Image src={Logo} alt="logo" className="w-2/3" />
				</Link>
			</nav>
		</header>
	);
}

export default Header;
