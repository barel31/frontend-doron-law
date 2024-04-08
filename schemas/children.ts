import { defineType } from 'sanity';

export default defineType({
  name: 'children',
  title: 'תתי דפים',
  type: 'array',
  of: [{ type: 'reference', to: [{ type: 'routes' }] }],
  hidden: ({ document }) => Boolean(document && document.isChild),
});
