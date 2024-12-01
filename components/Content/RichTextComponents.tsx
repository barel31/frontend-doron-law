import { type PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import ImageBlock from '../Block/ImageBlock';
import YouTubeBlock from '../Block/YouTubeBlock';

const components: PortableTextComponents = {
  marks: {
    em: ({ children }) => <em className="font-semibold">{children}</em>,
    link: ({ value, children }) => {
      const target = value?.href?.startsWith('http') ? '_blank' : undefined;

      return (
        <Link
          href={value?.href || ''}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : ''}
          className="underline hover:no-underline transition-all"
          title={typeof children === 'string' ? children : undefined}>
          {children}
        </Link>
      );
    },
  },
  block: {
    normal: ({ children }: any) => {
      return children?.length === 1 && children?.at(0) === '' ? (
        <br />
      ) : (
        <p className="text-lg leading-relaxed my-1">{children}</p>
      );
    },
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-6xl font-semibold tracking-tight mt-6 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-5xl font-medium tracking-tight mt-6 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl md:text-4xl font-medium tracking-tight mt-4 mb-3">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base md:text-3xl font-medium tracking-tight mt-3 mb-2">
        {children}
      </h5>
    ),
    goldH1: ({ children }) => (
      <h1
        className="text-4xl md:text-7xl font-bold tracking-tight mt-8 mb-4 gold-effect-text"
        data-heading={children}>
        {children}
      </h1>
    ),
    goldText: ({ children }) => (
      <p
        className="text-lg leading-relaxed my-1 gold-effect-text"
        data-heading={children}>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-x-4 px-4 italic mb-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside ml-4 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside ml-4 mb-4">{children}</ol>
    ),
    checkmarks: ({ children }) => (
      <ol className="list-none ml-4 mb-4">{children}</ol>
    ),
  },
  types: {
    image: ImageBlock,
    youtube: YouTubeBlock,
  },
};

export default components;
