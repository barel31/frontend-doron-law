import AccordionItem from './AccordionItem';

function Accordion({ qa }: { qa: QAndA[] }) {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-4xl text-center mt-10 pb-4 dark:text-slate-300 border-b-2 border-slate-400">
        שאלות נפוצות:
      </h1>
      <div className="mt-8">
        {qa.map((qa: QAndA, i: number) => (
          <AccordionItem index={i} qa={qa} key={qa._key} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
