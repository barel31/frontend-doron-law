'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.webp';
import IconPhone from '@/public/icon-phone.webp';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import useIsScrollTop from '@/hooks/useIsScrollTop';
import ScrollLine from './ScrollLine';
import useGetWidth from '@/hooks/useGetWidth';
import { useState } from 'react';

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

	const showNavBar = () => {
		setShow(() => !show);
	};

	if (mobile) {
		return (
			<header
				className={`fixed z-50 top-0 w-full transition-all delay-150 h-24 ${
					!isTop ? 'bg-slate-200/60' : 'bg-transparent'
				}`}
			>
				<ScrollLine />
				<nav className="flex flex-row justify-between w-[90%] lg:w-4/5 items-center m-auto mt-4">
					<Link href="/" className="relative min-w-[20%]">
						<Image
							src={Logo}
							alt="logo"
							priority
							width={200}
							height={200}
						/>
					</Link>
					<button
						className="show-navbar bg-black w-7 h-7"
						onClick={showNavBar}
					></button>
					{show && (
						<>
							<div className="navbar-links flex flex-col justify-evenly min-w-[50%]">
								{routes.map((route: Route) => (
									<Link
										key={route.slug.current}
										className="text-stone-900 text-xl font-bold hover:overline decoration-lime-500 decoration-[4px]"
										href={`/${route.slug.current}`}
									>
										{route.name}
									</Link>
								))}
							</div>

							<div className="header-contacts flex flex-col justify-between min-w-[30%]">
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
									className="flex flex-col items-center justify-around text-stone-900 whitespace-nowrap"
								>
									<Image
										src={IconPhone}
										alt="icon-phone"
										sizes="45"
									/>
									<span className="font-bold max-lg:hidden lg:visible m-1">
										{contact.phone}
									</span>
								</Link>
							</div>
						</>
					)}
				</nav>
			</header>
		);
	}

	return (
		<header
			className={`fixed z-50 top-0 w-full transition-all delay-150 h-24 ${
				!isTop ? 'bg-slate-200/60' : 'bg-transparent'
			}`}
		>
			<ScrollLine />
			<nav className="flex flex-row justify-between w-[90%] lg:w-4/5 items-center m-auto mt-4">
				<Link href="/" className="relative min-w-[20%]">
					<Image
						src={Logo}
						alt="logo"
						priority
						width={200}
						height={200}
					/>
				</Link>

				<div className="navbar-links flex justify-evenly min-w-[50%]">
					{routes.map((route: Route) => (
						<Link
							key={route.slug.current}
							className="text-stone-900 text-xl font-bold hover:overline decoration-lime-500 decoration-[4px]"
							href={`/${route.slug.current}`}
						>
							{route.name}
						</Link>
					))}
				</div>

				<div className="header-contacts flex justify-between min-w-[30%]">
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
						className="flex items-center justify-around text-stone-900 whitespace-nowrap"
					>
						<Image src={IconPhone} alt="icon-phone" sizes="45" />
						<span className="font-bold max-lg:hidden lg:visible m-1">
							{contact.phone}
						</span>
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
