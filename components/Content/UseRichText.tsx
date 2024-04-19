import { PortableText, PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/client';
import '@/styles/PortableText.module.css';

const components: PortableTextComponents = {
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;

      return (
        <Link
          href={value?.href || ''}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : ''}
          title={children as string}>
          {children}
        </Link>
      );
    },
  },
  block: {
    normal: ({ children }: any) => {
      if (children.length === 1 && children[0] === '') {
        return <br />
      }
      return <p>{children}</p>
    },
    h1: ({ children }) => <h1 className="text-4xl md:text-7xl">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl md:text-6xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl md:text-5xl">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl md:text-4xl">{children}</h4>,
    h5: ({ children }) => <h5 className="text-base md:text-3xl">{children}</h5>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-yellow-500">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="md:mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="md:mt-lg">{children}</ol>,
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  types: {
    image: ({ value }) => {
      const url = urlFor(value.asset).dpr(2).url();

      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[300px] h-[500px] inline-image m-1">
          <Image
            src={url}
            alt="דורון חדד"
            priority
            width={300}
            height={500}
            className={`w-fit h-fit object-left`}
          />
        </a>
      );
    },
  },
};

function UseRichText({ value }: { value: Topography[] }) {
  return <PortableText value={value} components={components} />;
}

export default UseRichText;
