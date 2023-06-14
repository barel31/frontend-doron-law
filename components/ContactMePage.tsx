import Image from 'next/image';
import ContactForm from './ContactForm';
import GoogleMapsEmbed from './GoogleMapsEmbed';
import MapLocation from '@/public/assets/map-location.webp';
import Email from '@/public/assets/email.webp';
import Phone from '@/public/assets/icon-phone.webp';
import Telephone from '@/public/assets/telephone.webp';

function ContactMePage({ contact }: { contact: ContactInfo }) {
	return (
		<div className="flex md:flex-row justify-evenly">
			<div className="max-w-[50vw]">
				<h1 className="text-2xl">תופס יצירת קשר</h1>
				<ContactForm contact={contact!} message={true} />
			</div>
			<div>
				<h1 className="text-2xl">פרטי יצירת קשר</h1>
				<div className="grid grid-cols-2 grid-rows-2 gap-10 justify-items-center">
					<div>
						<Image src={MapLocation} alt="location" width={50} />
						<span>{contact?.address}</span>
					</div>
					<div>
						<Image src={Phone} alt="phone" width={50} height={50} />
						<span>{contact?.mobile}</span>
					</div>
					<div>
						<Image src={Email} alt="email" width={50} height={50} />
						<span>{contact?.email}</span>
					</div>
					<div>
						<Image
							src={Telephone}
							alt="telephone"
							width={50}
							height={50}
						/>
						<span>{contact?.phone}</span>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-2xl">מפה</h1>
				<GoogleMapsEmbed />
			</div>
		</div>
	);
}

export default ContactMePage;
