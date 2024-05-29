import UsePortableText from './UseRichText';
import ContactForm from '../ContactForm';
import ContactMePage from './ContactMePage';
import { cn } from '@/lib/utils';

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
      className={cn(
        'content-body-text text-right mx-6 py-6 xl:m-36 min-h-[60vh] text-slate-900 dark:text-slate-300 normal-line-height',
        {
          'mt-12': route.slug.current === '/',
          'xl:pt-16': route.slug.current === '/',
        }
      )}>
      <UsePortableText value={route?.content} />
    </div>
  </div>
);

export default ContentBody;
