'use client';

import './accordion.css';

function Accordion({ qa }: { qa: QAndA[] }) {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.currentTarget.classList.toggle('active');
		const panel = e.currentTarget.nextElementSibling! as HTMLElement;

		if (panel.style.maxHeight) {
			panel.style.maxHeight = '';
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	};

	return (
		<>
			{qa.map((qa: QAndA, i: number) => (
				<div key={i}>
					<button className="accordion" onClick={handleClick}>
						{qa.question}
					</button>
					<div className="panel">
						<p>{qa.answer}</p>
					</div>
				</div>
			))}
		</>
	);
}

export default Accordion;
