import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'פרטי קשר',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'שם',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'מספר טלפון',
      type: 'string',
    }),
    defineField({
      name: 'mobile',
      title: 'מספר טלפון נייד',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'דואר אלקטרוני',
      type: 'string',
    }),
    defineField({
      name: 'fax',
      title: 'פקס',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'כתובת',
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
    defineField({
      name: 'bio',
      title: 'ביוגרפיה',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Title', value: 'title'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
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
})
