module.exports = [
    ['@vuepress/active-header-links'],
    ['@vuepress/back-to-top'],
    ['@vuepress/blog', {
        directories: [
            {
                id: 'post',
                dirname: '_posts',
                path: '/',
                itemPermalink: '/:year/:month/:day/:slug',
                pagination: {
                    lengthPerPage: 2
                }
            }
        ],
        frontmatters: [
            {
                id: 'category',
                keys: ['category', 'categories'],
                path: '/category/',
                frontmatter: { title: 'Category' }
            },
            {
                id: 'tag',
                keys: ['tag', 'tags'],
                path: '/tag/',
                frontmatter: { title: 'Tag' }
            },
            {
                id: 'location',
                keys: ['location'],
                path: '/location/',
                frontmatter: { title: 'Location' }
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
