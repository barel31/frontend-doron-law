import UsePortableText from './UseRichText';
import ContactForm from './ContactForm';
import AccordionQA from './AccordionQA';

function Content({
	route,
	contactInfo,
}: {
	route: Route;
	contactInfo?: ContactInfo;
}) {
	return (
		<div className="content m-auto text-center z-10">
			<div className="content-header text-right font-sans backdrop-blur-sm min-w-max mt-24 text-slate-50 w-min m-auto">
				{route?.header && <UsePortableText value={route.header!} />}
			</div>

			<div className="m-auto bg-slate-50">
				{route?.slug?.current === '/' && (
					<ContactForm contactInfo={contactInfo!} />
				)}
				<div className="text-right m-36 text-slate-900">
					<UsePortableText value={route?.content} />
				</div>
			</div>

			{route?.qAndA && <AccordionQA qa={route.qAndA} />}
		</div>
	);
}

export default Content;
