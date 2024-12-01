import { urlFor } from '@/lib/client';
import { cn } from '@/lib/utils';
import { type SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

function SanityImage({
  src,
  width = 2000,
  height = 2000,
  alt,
  className,
}: {
  src: SanityImageSource;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={urlFor(src).dpr(2).quality(100).url()}
      alt={alt}
      width={width}
      height={height}
      priority
      className={cn('w-full h-[90vh] background-image object-cover', className)}
    />
  );
}

export default SanityImage;
