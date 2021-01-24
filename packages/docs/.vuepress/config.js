module.exports = context => ({
  base: '/',
  dest: '../../docs',
  locales: {
    '/': {
      lang: 'en',
      title: 'Random collection of recipes',
      description: 'Random collection of recipes'
    }
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'author', content: 'Johannes Rappen' }],
    ['meta', { name: 'keywords', content: 'recipes,vuepress-site' }],
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#6699cc' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#000000' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    repo: 'jrappen/recipes',
    prefersTheme: {
      light: [8, 17],
      dark: [17, 8]
    },
    docsRepo: 'jrappen/recipes',
    docsDir: 'packages/docs',
    editLinks: true,
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English 🇺🇸🇬🇧',
        selectText: '🌐 Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        nav: require('./config/nav/en'),
        logo: '/logo.png',
        searchPlaceholder: 'Search ...',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        sidebar: require('./config/sidebar/en')
      }
    }
  },
  plugins: require('./config/plugins'),
  extraWatchFiles: [
    '.vuepress/config/nav/en.js',
    '.vuepress/config/sidebar/en.js',
    '.vuepress/config/plugins.js'
  ],
  markdown: {
    lineNumbers: true
  }
})
