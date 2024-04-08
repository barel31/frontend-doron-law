import { defineField } from 'sanity';

export default defineField({
  name: 'secondsImages',
  title: 'תמונות משניות',
  type: 'array',
  of: [
    {
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
});
