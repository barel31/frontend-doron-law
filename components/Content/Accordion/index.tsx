import AccordionItem from './AccordionItem';

function Accordion({ qa }: { qa: QAndA[] }) {
  return (
    <div>
      {qa.map((qa: QAndA) => (
        <AccordionItem qa={qa} key={qa._key} />
      ))}
    </div>
  );
}

export default Accordion;
