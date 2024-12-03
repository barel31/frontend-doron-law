import { defineType } from 'sanity';
import BreakPreview from './BreakPreview';

export default defineType({
  name: 'breakTag',
  type: 'object',
  title: 'Break',
  fields: [
    {
      name: 'style',
      type: 'string',
      options: {
        list: ['break'],
      },
    },
  ],
  components: {
    preview: BreakPreview,
  },
});
