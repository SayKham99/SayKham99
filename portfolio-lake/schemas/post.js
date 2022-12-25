export default {
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'type',
			title: 'Type',
			type: 'string'
		},
		{
			name: 'url',
			title: 'Url',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true
			}
		}
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage'
		},
		prepare(selection) {
			const { author } = selection
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`
			})
		}
	}
}
