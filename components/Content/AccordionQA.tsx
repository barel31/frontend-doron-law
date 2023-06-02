'use client';

import { Accordion } from 'flowbite-react';

function AccordionQA({ qa }: { qa: QAndA[] }) {
	return (
		<Accordion collapseAll className="m-20">
			{qa.map((qa: QAndA, i: number) => (
				<Accordion.Panel key={i}>
					<Accordion.Title>{qa.question}</Accordion.Title>
					<Accordion.Content>{qa.answer}</Accordion.Content>
				</Accordion.Panel>
			))}
		</Accordion>
	);
}

export default AccordionQA;
