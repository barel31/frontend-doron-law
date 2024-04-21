import UsePortableText from './UseRichText';
import ContactMePage from './ContactMePage';
import SanityImage from './SanityImage';
import ContactForm from '../ContactForm';
import AccordionQA from './Accordion';
import Carousel from '../Carousel';
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
  <div className="content-header mx-auto text-center p-5 mt-32 mb-12 m-5 w-fit rounded-lg text-slate-900 dark:text-slate-200 bg-slate-300 dark:bg-slate-800 bg-opacity-70 dark:bg-opacity-70 backdrop-brightness-110 dark:backdrop-brightness-50 dark:backdrop-saturate-0 normal-line-height font-sans">
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

function Content({ route, contact }: { route: Route; contact?: ContactInfo }) {
  const slug = route?.slug?.current;

  const sliders = route?.images?.map((image) => urlFor(image).dpr(2).url());

  return (
    <div className="content m-auto text-center">
      <BackgroundImage route={route} />
      <Header route={route} />
      <ContentBody route={route} contact={contact} slug={slug} />
      {route?.qAndA && <AccordionQA qa={route.qAndA} />}
      {sliders && <Carousel images={sliders!} />}
    </div>
  );
}

export default Content;
