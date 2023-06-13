import UsePortableText from './UseRichText';
import ContactForm from '../ContactForm';
import AccordionQA from '../Accordion/Accordion';
import Image from 'next/image';
import { urlFor } from '@/client';

function Content({
	route,
	contactInfo,
}: {
	route: Route;
	contactInfo?: ContactInfo;
}) {
	return (
		<div className="content m-auto text-center z-10">
			{route?.image && (
				<div
					className={`background-image background-image-home w-full text-center -z-10 top-0 absolute
					 overflow-hidden min-h-[900px]`}
				>
					<Image
						src={urlFor(route.image).url()}
						alt="Office image"
						width={2000}
						height={2000}
						loading="lazy"
						className="w-full scale-[4] sm:scale-[3] md:scale-[2.5] lg:scale-[2]"
					/>
				</div>
			)}
			<div
				className={`content-header normal-line-height text-center font-sans md:backdrop-blur-sm max-w-full my-20 mx-2 md:mt-28 text-slate-${
					route?.slug?.current === '/' ? '50' : '800'
				} m-auto`}
			>
				{route?.header && <UsePortableText value={route.header!} />}
			</div>

			<div className="m-auto bg-slate-50 md:mt-32">
				{route?.slug?.current === '/' && (
					<ContactForm contactInfo={contactInfo!} />
				)}
				{route?.slug?.current === 'contact-me' && (
					<ContactForm contactInfo={contactInfo!} message={true} />
				)}
				<div className="text-right m-5 md:m-36 text-slate-900 normal-line-height">
					<UsePortableText value={route?.content} />
				</div>
			</div>

			{route?.qAndA && <AccordionQA qa={route.qAndA} />}
		</div>
	);
}

export default Content;
