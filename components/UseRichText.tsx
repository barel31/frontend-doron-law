'use client';

import { PortableText, PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
	marks: {
		// Ex. 1: custom renderer for the em / italics decorator
		em: ({ children }) => (
			<em className="text-gray-600 font-semibold">{children}</em>
		),

		// Ex. 2: rendering a custom `link` annotation
		link: ({ value, children }) => {
			const target = (value?.href || '').startsWith('http')
				? '_blank'
				: undefined;
			return (
				<a
					href={value?.href}
					target={target}
					rel={target === '_blank' ? 'noindex nofollow' : ''}>
					{children}
				</a>
			);
		},
	},
	block: {
		// Ex. 1: customizing common block types
		h1: ({ children }) => <h1 className="text-6xl">{children}</h1>,
		h2: ({ children }) => <h2 className="text-5xl">{children}</h2>,
		h3: ({ children }) => <h3 className="text-4xl">{children}</h3>,
		h4: ({ children }) => <h4 className="text-3xl">{children}</h4>,
		h5: ({ children }) => <h5 className="text-2xl">{children}</h5>,
		blockquote: ({ children }) => (
			<blockquote className="border-l-purple-500">{children}</blockquote>
		),
		listItem: ({ children }) => (
			<ol>
				<li>{children}</li>
			</ol>
		),
	},
	list: {
		// Ex. 1: customizing common list types
		bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
		number: ({ children }) => <ol className="mt-lg">{children}</ol>,

		// Ex. 2: rendering custom lists
		checkmarks: ({ children }) => (
			<ol className="m-auto text-lg">{children}</ol>
		),
	},
};

function UseRichText({ value }: { value: Topography[] }) {
	console.log(value);

	return <PortableText value={value} components={components} />;
}

export default UseRichText;
