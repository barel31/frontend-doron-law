import Image from 'next/image';
import { urlFor } from '@/lib/client';
import { type PortableTextTypeComponentProps } from 'next-sanity';

function PortableImageBlock({ value }: PortableTextTypeComponentProps<any>) {
  const url = urlFor(value.asset).dpr(2).url();

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={url}
        alt={process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Image description'}
        loading="lazy"
        width={300}
        height={300}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
        className="w-auto h-auto object-center"
      />
    </a>
  );
}

export default PortableImageBlock;
