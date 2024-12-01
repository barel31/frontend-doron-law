import Image from 'next/image';
import { urlFor } from '@/lib/client';
import { type PortableTextTypeComponentProps } from 'next-sanity';

export default ({ value }: PortableTextTypeComponentProps<any>) => {
  const url = urlFor(value.asset).dpr(2).url();

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={url}
        alt={process.env.NEXT_PUBLIC_SITE_DESCRIPTION!}
        priority
        width={300}
        height={300}
        className="w-fit h-fit object-left text-transparent"
      />
    </a>
  );
};
