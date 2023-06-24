import {
	BiLinkedin,
	Fa6SolidAddressCard,
	IcBaselinePhoneEnabled,
	IcOutlineLocalPrintshop,
	MaterialSymbolsMailOutline,
	OcticonDeviceMobile,
	UiwFacebook,
} from '@/utils/icons';
import Link from 'next/link';

const year = new Date().getFullYear();

function Footer({
	routes,
	contact,
}: {
	routes: Route[];
	contact: ContactInfo;
}) {
	return (
		<footer className="bg-stone-300 dark:bg-stone-800 w-full min-h-44 bottom-0 text-gray-800 dark:text-gray-300">
			<div className="m-10 flex flex-col md:flex-row justify-around text-lg">
				<div>
					<ul className="flex flex-col max-md:items-start">
						<h4 className="underline underline-offset-8 m-4 decoration-lime-500 justify-start">
							יצירת קשר
						</h4>
						<li className="flex items-center justify-start">
							<OcticonDeviceMobile className="w-4" />
							<span className="mr-5">נייד: {contact.mobile}</span>
						</li>
						<li className="flex items-center justify-start">
							<IcBaselinePhoneEnabled className="w-4" />
							<span className="mr-5">טל: {contact.phone}</span>
						</li>
						<li className="flex items-center justify-start">
							<IcOutlineLocalPrintshop className="w-4" />
							<span className="mr-5">פקס: {contact.fax}</span>
						</li>
						<li className="flex items-center justify-start">
							<MaterialSymbolsMailOutline className="w-4" />
							<span className="mr-5">{contact.email}</span>
						</li>
						<li className="flex items-center justify-start">
							<Fa6SolidAddressCard className="w-4" />
							<span className="mr-5">{contact.address}</span>
						</li>
					</ul>
					<div className="flex gap-2 items-baseline mt-5">
						{contact.facebook && (
							<Link
								href={contact.facebook}
								target="_blank"
								rel="noindex nofollow"
								title="Facebook"
							>
								<UiwFacebook className="w-[35px]" />
							</Link>
						)}

						{contact.linkedin && (
							<Link
								href={contact.linkedin}
								target="_blank"
								rel="noindex nofollow"
								title="Linkedin"
							>
								<BiLinkedin className="w-[35px]" />
							</Link>
						)}
					</div>
				</div>

				<div className="flex flex-col items-start md:items-center">
					<h4 className="underline underline-offset-8 m-4 decoration-lime-500 justify-start">
						ניווט באתר
					</h4>
					{routes.map((route: Route) => (
						<Link
							key={route.slug.current}
							href={route.slug.current}
							className="flex items-center justify-start hover:font-bold"
							title={route.name}
						>
							{route.name}
						</Link>
					))}
				</div>
			</div>

			<div className="text-center p-10">
				<p>
					Copyright © {year} - All right reserved by{' '}
					{contact.nameEnglish}
				</p>
				<p>
					Build by{' '}
					<Link
						href="https://www.linkedin.com/in/barel-shraga/"
						target="_blank"
						rel="noindex nofollow"
						title="barel31 linkedin"
					>
						barel31
					</Link>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
