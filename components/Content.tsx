'use client';

import { Accordion } from 'flowbite-react';
import UsePortableText from './UseRichText';

function Content({ route }: { route: Route }) {

	return (
		<div className="p-52">
			<UsePortableText value={route.bio} />

			<Accordion collapseAll className='m-20'>
				{route.qAndA?.map((qna: QAndA, i: number) => (
					<Accordion.Panel key={i}>
						<Accordion.Title>{qna.question}</Accordion.Title>
						<Accordion.Content>{qna.answer}</Accordion.Content>
					</Accordion.Panel>
				))}
			</Accordion>
		</div>
	);
}

export default Content;
