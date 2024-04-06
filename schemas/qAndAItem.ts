import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'qAndAItem',
  title: 'שאלה תשובה',
  type: 'object',
  fields: [
    defineField({
      title: 'שאלה',
      name: 'question',
      type: 'string',
    }),
    defineField({
      title: 'תשובה',
      name: 'answer',
      type: 'string',
    }),
  ],
});
