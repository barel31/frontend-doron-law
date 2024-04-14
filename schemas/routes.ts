import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'routes',
  title: 'דפים',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'שם',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'כתובת הדף (באנגלית בלבד ללא רווחים)',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'isChild',
      title: 'האם דף זה הוא תת-דף?',
      type: 'boolean',
    }),
    defineField({
      name: 'children',
      title: 'תתי דפים',
      type: 'children',
    }),
    defineField({
      name: 'qAndA',
      title: 'שאלות ותשובות',
      type: 'qAndAItem',
    }),
    defineField({
      name: 'image',
      title: 'תמונה ראשית',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'תמונות משניות',
      type: 'secondsImages',
    }),
    defineField({
      name: 'header',
      title: 'כותרת',
      type: 'blockField',
    }),
    defineField({
      name: 'content',
      title: 'תוכן',
      type: 'blockField',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'keywords',
      title: 'מילות מפתח',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
