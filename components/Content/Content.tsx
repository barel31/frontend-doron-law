import Image from 'next/image';
import UsePortableText from './UseRichText';
import ContactForm from '../ContactForm';
import AccordionQA from '../Accordion/Accordion';
import { urlFor } from '@/client';
import ContactMePage from '../ContactMePage';


function Content({ route, contact }: { route: Route; contact?: ContactInfo }) {
	const slug = route?.slug?.current;

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
					slug === '/' ? '50' : '800'
				} m-auto`}
			>
				{route?.header && <UsePortableText value={route.header!} />}
			</div>

			<div className="m-auto bg-slate-50 md:mt-32">
				{slug === '/' && (
					<div className="w-full">
						<ContactForm contact={contact!} />
					</div>
				)}
				{slug === 'contact-me' && (
					<ContactMePage contact={contact!} />
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
