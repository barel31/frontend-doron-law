import { notFound } from 'next/navigation';
import { urlFor } from '@/client';
import AccordionQA from './Accordion';
import Carousel from '../Carousel';
import BackgroundImage from './BackgroundImage';
import ContentBody from './ContentBody';
import ContentHeader from './ContentHeader';

function Content({ route, contact }: { route: Route; contact?: ContactInfo }) {
  if (!route) return notFound();

  const slug = route?.slug?.current;

  const sliders = route?.images?.map(image => urlFor(image).dpr(2).url());

  return (
    <div className="content m-auto text-center">
      <BackgroundImage route={route} />
      <ContentHeader route={route} />
      <ContentBody route={route} contact={contact} slug={slug} />
      {route?.qAndA && <AccordionQA qa={route.qAndA} />}
      {sliders && <Carousel images={sliders!} />}
    </div>
  );
}

export default Content;
