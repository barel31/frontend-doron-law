import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cardItem',
  title: 'כרטיס',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          title: 'כותרת',
          name: 'title',
          type: 'string',
        }),
        defineField({
          title: 'תוכן',
          name: 'content',
          type: 'string',
        }),
        defineField({
          title: 'קישור',
          name: 'link',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'תמונה',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    },
  ],
});
