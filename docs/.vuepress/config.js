module.exports = {
  dest: 'dist',
  base: '/npmPackage-18-06-08/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动'
    }
  },
  themeConfig: {
    repo: 'kokudolly/npmPackage-18-06-08',
    repoLabel: '贡献此代码',
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: 'dev',
    editLinks: true,
    // navbar: false,
    // displayAllHeaders: true,
    activeHeaderLinks: false,
    // sidebar: 'auto',
    // search: false,
    searchMaxSuggestions: 10,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content',
            buttonText: 'Refresh'
          }
        },
        algolia: {
          apiKey: '',
          indexName: ''
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'VuePress中文网', link: 'http://caibaojian.com/vuepress/'}
        ],
        sidebar: {
          '/guide/': getSiderBar('指南')
        },
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {

          }
        },
        algolia: {},
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'VuePress中文网', link: 'http://caibaojian.com/vuepress/'}
        ],
        sidebar: {
          '/guide/': getSiderBar('指南')
        },
      }
    },
    
    sidebarDepth: 2
  },
  markdown: {
    anchor: {

    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  port: 333,
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}

function getSiderBar(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'html头部元素',
        '计算机代码元素'
      ]
    }
  ]
}