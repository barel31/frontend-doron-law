import Image from 'next/image';
import UsePortableText from './UseRichText';
import ContactMePage from './ContactMePage';
import ContactForm from '../ContactForm';
import AccordionQA from '../Accordion';
import { urlFor } from '@/client';

function Content({ route, contact }: { route: Route; contact?: ContactInfo }) {
	const slug = route?.slug?.current;

	return (
		<div className="content m-auto text-center">
			{route?.image && (
				<div
					className={`w-full text-center -z-10 top-0 absolute overflow-hidden min-h-[900px] background-image background-image-${
						route.slug.current === '/' ? 'home' : route.slug.current
					}`}
				>
					<Image
						src={urlFor(route.image).url()}
						alt="Office image"
						width={2000}
						height={2000}
						loading="lazy"
						// className="w-full scale-[4] sm:scale-[3] md:scale-[2.5] lg:scale-[2] background-image"
						className="w-full background-image"
					/>
				</div>
			)}
			<div className="text-slate-800 backdrop-brightness-150 dark:backdrop-saturate-0 dark:backdrop-brightness-50 dark:text-slate-300 content-header normal-line-height text-center font-sans max-w-full my-20 mx-2 md:mt-28">
				{route?.header && <UsePortableText value={route.header!} />}
			</div>

			<div className="m-auto bg-slate-50 dark:bg-slate-700 md:mt-32">
				{slug === '/' ? (
					<div className="w-full">
						<ContactForm contact={contact!} />
					</div>
				) : (
					slug === 'contact-me' && (
						<ContactMePage contact={contact!} />
					)
				)}

				<div className="text-right m-5 md:m-36 text-slate-900 dark:text-slate-300 normal-line-height">
					<UsePortableText value={route?.content} />
				</div>
			</div>

			{route?.qAndA && <AccordionQA qa={route.qAndA} />}
		</div>
	);
}

export default Content;
