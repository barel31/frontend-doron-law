import React from 'react';
import { FaMobileAlt, FaPrint } from 'react-icons/fa';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import Link from 'next/link';

const footerHeaderStyle =
	'underline underline-offset-8 m-10 decoration-lime-500 justify-start';

function Footer({
	routes,
	contact,
}: {
	routes: Route[];
	contact: ContactInfo;
}) {
	return (
		<footer className="bg-stone-800 w-full min-h-44 bottom-0 text-gray-300">
			<div className="m-auto flex flex-row w-4/6 justify-between">
				<ul className="flex flex-col">
					<h4 className={footerHeaderStyle}>יצירת קשר</h4>

					<li className="flex items-center justify-start">
						<FaMobileAlt />
						<span className="mr-5">נייד: {contact.mobile}</span>
					</li>
					<li className="flex items-center justify-start">
						<AiFillPhone />
						<span className="mr-5">טל: {contact.phone}</span>
					</li>
					<li className="flex items-center justify-start">
						<FaPrint />
						<span className="mr-5">פקס: {contact.fax}</span>
					</li>
					<li className="flex items-center justify-start">
						<AiOutlineMail />
						<span className="mr-5">{contact.email}</span>
					</li>
					<li className="flex items-center justify-start">
						<BsFillPersonVcardFill />
						<span className="mr-5">{contact.address}</span>
					</li>
				</ul>
				<div className="flex flex-col">
					<h4 className={footerHeaderStyle}>ניווט באתר</h4>

                    {routes.map((route: Route) => (
                        <Link href={route.slug.current} className='flex items-center justify-start hover:text-lime-200'>
                            {route.name}
                        </Link>
                    ))}
				</div>
			</div>
			<p className="text-center mt-10">
				© All rights reserved to{' '}
				<Link href="https://www.linkedin.com/in/barel-shraga/">
					barel31
				</Link>{' '}
				©
			</p>
		</footer>
	);
}

export default Footer;
