
const schema= {
    name: 'resourcePlaylist',
    title: 'Resource Playlist',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) =>  Rule.required()
        },
        {
            name: 'resource',
            title: 'Resource',
            type: 'array',
            of: [
                { type: 'reference', to: [{ type: 'resource' }]}
            ]
        },
        {
            name: 'downloadLink',
            title: 'Download Link',
            type: 'url',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'views',
            title: 'Views',
            type: 'number',
            initialValue: 0
        },
        {
            name: 'poster',
            title: 'Poster',
            type: 'image',
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true,
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
            options: {
                list: ['other', 'fullstack', 'frontend', 'backend', 'next 14']
            }
        }
    ]
}

export default schema