module.exports = [
    ['@vuepress/active-header-links'],
    ['@vuepress/back-to-top'],
    ['@vuepress/blog', {
        directories: [
            {
                id: 'post',
                dirname: '_posts',
                path: '/post/',
                itemPermalink: '/post/:year/:month/:day/:slug',
                pagination: {
                    lengthPerPage: 2
                }
            }
        ],
        frontmatters: [
            {
                id: 'category',
                keys:
                [
                    'category',
                    'categories'
                ],
                path: '/category/',
                layout: 'Category',
                itemLayout: 'Category',
                frontmatter:
                {
                    title: 'Categories',
                    sidebar: false
                }
            },
            {
                id: 'tag',
                keys:
                [
                    'tag',
                    'tags'
                ],
                path: '/tag/',
                layout: 'Tag',
                itemLayout: 'Tag',
                frontmatter:
                {
                    title: 'Tags',
                    sidebar: false
                }
            },
            {
                id: 'location',
                keys:
                [
                    'location'
                ],
                path: '/location/',
                // layout: 'Location',
                // itemLayout: 'Location',
                frontmatter:
                {
                    title: 'Locations',
                    sidebar: false
                }
            }
        ],
        globalPagination: {
            lengthPerPage: 5
        },
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/jrappen/recipes'
                }
            ],
            copyright: [
                {
                    text: 'ISC Licensed | Copyright © 2021 Johannes Rappen'
                }
            ]
        },
        pwa: {
            serviceWorker: true,
            updatePopup: true
        },
        smoothScroll: true
    }],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    ['@vuepress/search', {
        searchMaxSuggestions: 10
    }],
    ['check-md'],
    [
        'vuepress-plugin-container',
        {
            type: 'right',
            defaultTitle: ''
        }
    ]
]
