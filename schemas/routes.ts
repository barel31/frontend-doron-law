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
      title: "האם דף הוא זה תת-דף?",
      type: 'boolean',
    }),
    defineField({
      name: 'children',
      title: 'תתי דפים',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'routes' }] }],
      hidden: ({ document }) => Boolean(document && document.isChild),
    }),
    defineField({
      name: 'qAndA',
      title: 'שאלות ותשובות',
      type: 'array',
      of: [
        {
          title: 'שאלה תשובה',
          type: 'object',
          fields: [
            {
              title: 'שאלה',
              name: 'question',
              type: 'string',
            },
            {
              title: 'תשובה',
              name: 'answer',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'תמונה',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'header',
      title: 'כותרת',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'רגיל', value: 'normal' },
            { title: 'בדיקה', value: 'title' },
            { title: 'כותרת 1', value: 'h1' },
            { title: 'כותרת 2', value: 'h2' },
            { title: 'כותרת 3', value: 'h3' },
            { title: 'כותרת 4', value: 'h4' },
            { title: 'כותרת 5', value: 'h5' },
            { title: 'ציטוט', value: 'blockquote' },
          ],
          // lists: [{ title: 'Bullet', value: 'bullet' }],
          // marks: {
          // 	decorators: [
          // 		{ title: 'Strong', value: 'strong' },
          // 		{ title: 'Emphasis', value: 'em' },
          // 	],
          // 	annotations: [
          // 		{
          // 			title: 'URL',
          // 			name: 'link',
          // 			type: 'object',
          // 			fields: [
          // 				{
          // 					title: 'URL',
          // 					name: 'href',
          // 					type: 'url',
          // 				},
          // 			],
          // 		},
          // 	],
          // },
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'תוכן',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            { title: 'רגיל', value: 'normal' },
            { title: 'בדיקה', value: 'title' },
            { title: 'כותרת 1', value: 'h1' },
            { title: 'כותרת 2', value: 'h2' },
            { title: 'כותרת 3', value: 'h3' },
            { title: 'כותרת 4', value: 'h4' },
            { title: 'כותרת 5', value: 'h5' },
            { title: 'ציטוט', value: 'blockquote' },
          ],
          // lists: [{ title: 'Bullet', value: 'bullet' }],
          // marks: {
          // 	decorators: [
          // 		{ title: 'Strong', value: 'strong' },
          // 		{ title: 'Emphasis', value: 'em' },
          // 	],
          // 	annotations: [
          // 		{
          // 			title: 'לינק',
          // 			name: 'link',
          // 			type: 'object',
          // 			fields: [
          // 				{
          // 					title: 'URL',
          // 					name: 'href',
          // 					type: 'url',
          // 				},
          // 			],
          // 		},
          // 	],
          // },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
