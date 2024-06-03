import { cn } from '@/lib/utils';
import SanityImage from './SanityImage';

const BackgroundImage = ({ route }: { route: Route }) =>
  (route?.image && (
    <div
      className={cn(
        'w-full text-center -z-10 top-0 absolute overflow-hidden min-h-[900px] background-image',
        `background-image-${
          route.slug.current === '/' ? 'home' : route.slug.current
        }`
      )}>
      <SanityImage src={route.image} alt={route.slug.current} />
    </div>
  )) ||
  null;

export default BackgroundImage;
