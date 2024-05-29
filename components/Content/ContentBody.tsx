import UsePortableText from './UseRichText';
import ContactForm from '../ContactForm';
import ContactMePage from './ContactMePage';

const ContentBody = ({
  route,
  contact,
  slug,
}: {
  route: Route;
  contact?: ContactInfo;
  slug: string;
}) => (
  <div className="content-body m-auto bg-slate-50 dark:bg-slate-700">
    {slug === '/' ? (
      <div className="w-full">
        <ContactForm contact={contact!} />
      </div>
    ) : (
      slug === 'contact-me' && <ContactMePage contact={contact!} />
    )}

    <div
      className={`content-body-text text-right mx-6 py-6 xl:m-36 min-h-[60vh] text-slate-900 dark:text-slate-300 normal-line-height ${
        route.slug.current === '/' ? 'mt-12' : 'xl:pt-16'
      }`}>
      <UsePortableText value={route?.content} />
    </div>
  </div>
);

export default ContentBody;
