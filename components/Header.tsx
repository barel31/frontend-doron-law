'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.webp';
import IconPhone from '@/public/icon-phone.webp';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import useIsScrollTop from '@/hooks/useIsScrollTop';
import ScrollLine from './ScrollLine';
import { Navbar } from 'flowbite-react';

function Header({
	routes,
	contact,
}: {
	routes: Route[];
	contact: ContactInfo;
}) {
	const isTop = useIsScrollTop();

	return (
		<header
			className={`fixed z-50 top-0 w-full transition-all delay-150 ${
				!isTop ? 'bg-slate-200/60' : 'bg-transparent'
			}`}
		>
			<ScrollLine />

			<Navbar
				fluid
				rounded
				dir="ltr"
				className="navbar min-h-full top-0 border-none max-w-full"
			>
				<div className="flex">
					<Navbar.Toggle />
					<div className="max-md:hidden header-contacts flex flex-1 justify-evenly">
						<Link
							href={`tel:${contact.phone}`}
							target="_blank"
							className="flex items-center text-stone-900"
						>
							<Image src={IconPhone} alt="icon-phone" />
							<span className='font-bold mx-3'>{contact.phone}</span>
						</Link>
						<Link
							href="https://www.facebook.com/"
							className="rounded-full"
							target="_blank"
						>
							<BsFacebook size={50} />
						</Link>
						<Link
							href="https://www.linkedin.com/"
							className="rounded-full overflow-hidden"
							target="_blank"
						>
							<BsLinkedin size={50} />
						</Link>
					</div>
				</div>
				<Navbar.Collapse>
					{routes.reverse().map((route: Route) => (
						<Link
							key={route.slug.current}
							className="text-stone-900 text-xl font-bold md:hover:overline decoration-lime-500 decoration-[4px] navbar-link"
							href={`/${route.slug.current}`}
							legacyBehavior
						>
							<Navbar.Link className="md:text-2xl cursor-pointer">
								{route.name}
							</Navbar.Link>
						</Link>
					))}
				</Navbar.Collapse>
				<Link href="/" legacyBehavior>
					<Navbar.Brand>
						<Image
							alt="Logo"
							className="cursor-pointer"
							// className="mr-3 h-6 sm:h-9"
							src={Logo}
							width={200}
							height={100}
						/>
					</Navbar.Brand>
				</Link>
			</Navbar>
		</header>
	);
}

export default Header;
