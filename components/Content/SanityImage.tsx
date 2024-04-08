import { urlFor } from '@/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

function SanityImage({
  url,
  width = 2000,
  height = 2000,
  name,
  className,
}: {
  url: SanityImageSource;
  name: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={urlFor(url).dpr(2).quality(80).url()}
      alt={name}
      width={width}
      height={height}
      priority
      className={`w-full h-[90vh] background-image object-cover ${
        className || ''
      }`}
    />
  );
}

export default SanityImage;
