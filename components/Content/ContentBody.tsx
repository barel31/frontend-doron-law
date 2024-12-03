import UsePortableText from './UseRichText';
import AccordionQA from './Accordion';
import ContactMePage from './ContactMePage';
import ContactForm from '../ContactForm';
import Carousel from '../Carousel';
import { cn } from '@/lib/utils';
import { urlFor } from '@/lib/client';
import Cards from '../Cards';
import HomePageRecommendations from './HomePageRecommendations';

interface Props {
  route: Route;
  contact?: ContactInfo;
  slug: string;
  recommendations?: Route;
  isHomePage?: boolean;
}

const ContentBody = ({
  route,
  contact,
  slug,
  recommendations,
  isHomePage,
}: Props) => {
  const sliders = route?.images?.map(image => urlFor(image).dpr(2).url());

  const isContactPage = slug === 'contact-me' || slug === 'contact';

  return (
    <div className="content-body m-auto bg-neutral-50 dark:bg-slate-700">
      {isHomePage ? (
        <div className="w-full">
          <ContactForm contact={contact!} />
        </div>
      ) : isContactPage ? (
        <ContactMePage contact={contact!} />
      ) : null}

      <div className="content-body-text text-right mx-4 py-6 xl:mx-36 min-h-[60vh] text-slate-900 dark:text-slate-300 normal-line-height">
        <UsePortableText value={route?.content} />
        {route?.qAndA && <AccordionQA qa={route.qAndA} />}
        {sliders && <Carousel images={sliders!} />}
        {route?.cards && <Cards cards={route.cards} />}
        {recommendations?.cards && (
          <HomePageRecommendations cards={recommendations.cards} />
        )}
      </div>
    </div>
  );
};

export default ContentBody;
