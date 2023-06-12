import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'contactInfo',
	title: 'פרטי קשר',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'שם',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'nameEnglish',
			title: 'שם באנגלית',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'phone',
			title: 'טלפון',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'mobile',
			title: 'טלפון נייד',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'email',
			title: 'דואר אלקטרוני',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'fax',
			title: 'פקס',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'address',
			title: 'כתובת',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'facebook',
			title: 'פייסבוק',
			type: 'string',
			initialValue: 'https://www.facebook.com/',
		}),
		defineField({
			name: 'linkedin',
			title: 'לינקדין',
			type: 'string',
			initialValue: 'https://www.linkedin.com/',
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
						{ title: 'Normal', value: 'normal' },
						{ title: 'Title', value: 'title' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'Quote', value: 'blockquote' },
					],
				},
			],
		}),
	],
});
