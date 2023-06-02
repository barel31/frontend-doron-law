'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.webp';
import IconPhone from '@/public/icon-phone.webp';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import useIsScrollTop from '@/hooks/useIsScrollTop';

const headerBtnStyle =
	'text-stone-900 text-xl font-bold hover:overline decoration-lime-500 decoration-[4px]';

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
			className={`fixed z-50 top-0 w-full transition-all delay-150 h-20 ${
				!isTop ? 'bg-slate-200/60' : 'bg-transparent'
			}`}
		>
			<div className="flex flex-row justify-between w-2/3 items-center m-auto mt-4">
				<Link href="/" className="relative">
					<Image
						src={Logo}
						alt="logo"
						priority
						width={200}
						height={200}
						style={{ width: 'auto' }}
					/>
				</Link>

				{routes.map((route: any) => {
					return (
						<Link
							key={route.slug.current}
							className={headerBtnStyle}
							href={`/${route.slug.current}`}
						>
							{route.name}
						</Link>
					);
				})}

				<div className="header-contacts flex w-1/4 justify-between">
					<Link
						href={`tel:${contact.phone}`}
						target="_blank"
						className="flex items-center justify-between w-2/5 text-stone-900"
					>
						<Image src={IconPhone} alt="icon-phone" />
						{contact.phone}
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
		</header>
	);
}

export default Header;
