'use client';

import { IconChevronDown, IconChevronUp } from '@/lib/icons'; // Ensure correct import path to your local icons
import { cn } from '@/lib/utils';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function AccordionItem({ qa, index }: { qa: QAndA; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden mb-4 bg-gray-200 dark:bg-slate-800">
      <button
        className={cn(
          'flex justify-between items-center dark:text-slate-300 text-left p-5 w-full transition-all duration-400',
          {
            'bg-slate-400 dark:bg-slate-600': open,
            'hover:bg-slate-300 dark:hover:bg-slate-700': !open,
          }
        )}
        onClick={handleClick}
        type="button"
        title={qa.question}>
        <div className="flex items-center space-x-3">
          <span className="font-bold pl-2">{index + 1}.</span>
          <span>{qa.question}</span>
        </div>
        <div className="text-xl">
          {open ? <IconChevronUp className="w-5" /> : <IconChevronDown className="w-5" />}
        </div>
      </button>

      <motion.div
        ref={contentRef}
        initial={{ height: 0 }}
        animate={{ height: open ? contentRef.current?.scrollHeight : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="dark:text-slate-300 bg-gradient-to-r from-slate-300 to-slate-200 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800 px-5 py-4">
          <p>{qa.answer}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AccordionItem;
