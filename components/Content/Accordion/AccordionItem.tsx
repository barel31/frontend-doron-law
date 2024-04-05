'use client';

import { useState } from 'react';

function AccordionItem({ qa }: { qa: QAndA }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const panel = e.currentTarget.nextElementSibling! as HTMLElement;
    setOpen(() => !open);

    if (panel.style.maxHeight) {
      panel.style.maxHeight = '';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  };

  return (
    <div>
      <button
        className={`dark:text-slate-300 p-5 w-full transition-all duration-[400ms] dark:bg-slate-600 hover:bg-slate-500 ${
          open ? 'bg-slate-400 dark:!bg-slate-500' : 'bg-slate-300'
        }`}
        onClick={handleClick}
        type="button"
        title={qa.question}>
        {qa.question}
      </button>
      <div className="dark:text-slate-300 bg-slate-300 dark:bg-slate-700 max-h-0 px-5 overflow-hidden transition-all duration-200 ease-out">
        <p>{qa.answer}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
