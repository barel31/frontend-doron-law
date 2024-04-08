import { defineField } from 'sanity';

export default defineField({
  name: 'blockField',
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
    { type: 'image' },
  ],
});
