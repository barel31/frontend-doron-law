'use client';

import Image from 'next/image';
import ContactForm from './ContactForm';
import GoogleMapsEmbed from './GoogleMapsEmbed';
import MapLocation from '@/public/assets/map-location.webp';
import Email from '@/public/assets/email.webp';
import Phone from '@/public/assets/phone.webp';
import Telephone from '@/public/assets/telephone.webp';
import useGetWidth from '@/hooks/useGetWidth';
import Link from 'next/link';

function ContactMePage({ contact }: { contact: ContactInfo }) {
	const width = useGetWidth();

	return (
		<div className="m-auto flex flex-col lg:flex-row justify-between lg:gap-5 xl:w-3/4 lg:m-5 xl:m-auto">
			<div className="lg:w-1/3">
				<h1 className="text-2xl/relaxed text-slate-800 dark:text-slate-300">
					תופס יצירת קשר
				</h1>
				<div className="rounded-md">
					<ContactForm contact={contact!} message={true} />
				</div>
			</div>
			<div className="lg:w-1/3">
				<h1 className="text-2xl/relaxed text-slate-800 dark:text-slate-300">
					פרטי יצירת קשר
				</h1>
				<div className="bg-slate-300">
					<div className="grid grid-cols-2 grid-rows-2 gap-[1px]">
						<div className="bg-slate-50 dark:bg-slate-700 dark:text-slate-50 p-5 lg:p-10 flex flex-col items-center justify-center min-w-52 min-h-52">
							<Image
								src={MapLocation}
								alt="location"
								width={50}
							/>
							<span>{contact?.address}</span>
						</div>

						<Link
							href={`tel:${contact?.mobile}`}
							className="bg-slate-50 dark:bg-slate-700 dark:text-slate-50 p-5 lg:p-10 flex flex-col items-center justify-center min-w-52 min-h-52"
						>
							<Image
								src={Phone}
								alt="phone"
								width={50}
								color="white"
							/>
							<span>{contact?.mobile}</span>
						</Link>
						<Link
							href={`mailto:${contact?.email}`}
							className="bg-slate-50 dark:bg-slate-700 dark:text-slate-50 p-5 lg:p-10 flex flex-col items-center justify-center min-w-52 min-h-52"
						>
							<Image src={Email} alt="email" width={50} />
							<span>{contact?.email}</span>
						</Link>
						<Link
							href={`tel:${contact?.phone}`}
							className="bg-slate-50 dark:bg-slate-700 dark:text-slate-50 p-5 lg:p-10 flex flex-col items-center justify-center min-w-52 min-h-52"
						>
							<Image src={Telephone} alt="telephone" width={50} />
							<span>{contact?.phone}</span>
						</Link>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-2xl/relaxed text-slate-800 dark:text-slate-300">
					מפה
				</h1>
				<div>
					<GoogleMapsEmbed
						address={contact?.address}
						width={width < 1024 ? width / 1.05 : width / 3}
						height={width < 1024 ? width / 1.5 : 350}
					/>
				</div>
			</div>
		</div>
	);
}

export default ContactMePage;
