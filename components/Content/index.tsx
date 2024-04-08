import UsePortableText from './UseRichText';
import ContactMePage from './ContactMePage';
import SanityImage from './SanityImage';
import ContactForm from '../ContactForm';
import AccordionQA from './Accordion';
import Carousel from './Carousel';
import { urlFor } from '@/client';

const BackgroundImage = ({ route }: { route: Route }) =>
  (route?.image && (
    <div
      className={`w-full text-center -z-10 top-0 absolute overflow-hidden min-h-[900px] background-image background-image-${
        route.slug.current === '/' ? 'home' : route.slug.current
      }`}>
      <SanityImage src={route.image} alt={route.slug.current} />
    </div>
  )) ||
  null;

const Header = ({ route }: { route: Route }) => (
  <div className="text-slate-800 backdrop-brightness-150 dark:backdrop-saturate-0 dark:backdrop-brightness-50 dark:text-slate-300 content-header normal-line-height text-center font-sans max-w-full my-20 mx-2 md:mt-28">
    {route?.header && <UsePortableText value={route.header!} />}
  </div>
);

const ContentBody = ({
  route,
  contact,
  slug,
}: {
  route: Route;
  contact?: ContactInfo;
  slug: string;
}) => (
  <div className="m-auto bg-slate-50 dark:bg-slate-700 md:mt-32 pb-20">
    {slug === '/' ? (
      <div className="w-full">
        <ContactForm contact={contact!} />
      </div>
    ) : (
      slug === 'contact-me' && <ContactMePage contact={contact!} />
    )}

    <div className="text-right m-5 md:m-36 text-slate-900 dark:text-slate-300 normal-line-height">
      <UsePortableText value={route?.content} />
    </div>
  </div>
);

function Content({ route, contact }: { route: Route; contact?: ContactInfo }) {
  const slug = route?.slug?.current;

  const sliders = route.images?.map((image) => urlFor(image).dpr(2).url());

  return (
    <div className="content m-auto text-center">
      <BackgroundImage route={route} />
      <Header route={route} />
      <ContentBody route={route} contact={contact} slug={slug} />
      {route?.qAndA && <AccordionQA qa={route.qAndA} />}
      {route.images && <Carousel images={sliders!} />}
    </div>
  );
}

export default Content;
