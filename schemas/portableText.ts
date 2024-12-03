import {defineArrayMember, defineField} from 'sanity'

export default defineField({
  name: 'blockField',
  title: 'block Field',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'רגיל', value: 'normal'},
        {title: 'כותרת 1', value: 'h1'},
        {title: 'כותרת 2', value: 'h2'},
        {title: 'כותרת 3', value: 'h3'},
        {title: 'כותרת 4', value: 'h4'},
        {title: 'כותרת 5', value: 'h5'},
        {title: 'כותרת זהב', value: 'goldH1'},
        {title: 'רגיל זהב', value: 'goldText'},
        {title: 'ציטוט', value: 'blockquote'},
      ],
    }),
    defineArrayMember({
      type: 'image',
    }),
    defineArrayMember({
      type: 'youtube',
    }),
    defineArrayMember({
      type: 'breakTag',
    }),
  ],
})

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
