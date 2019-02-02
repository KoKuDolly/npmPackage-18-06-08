module.exports = {
  base: '/vuepress-koku/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  // dest: '.vuepress/dist', // 默认 .vuepress/dist
  themeConfig: {
    repo: 'kokudolly/vuepress-koku',
    docsDir: 'docs',
    docsBranch: 'dev',
    editLinks: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Content', items: [
        { text: 'content1', link: ''},
        { text: 'content2', link: ''},
        { text: 'group1', items: [
          { text: 'content3', link: ''},
          { text: 'content4', link: ''}
        ]},
        {
          text: 'group2', items: [
            { text: 'content5', link: ''}
          ]
        }
      ]},
      { text: 'VuePress中文网', link: 'http://caibaojian.com/vuepress/'}
    ],
    sidebar: {
      '/guide/': getSiderBar('指南'),
      // '/content/': getSiderBar('内容'),
    },
    
    sidebarDepth: 2
  },
  markdown: {
    anchor: {

    }
  },
  head: [
    ['link', { rel: 'icon', href: `./img/hero.png` }]
  ],
  port: 333,
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/'
      }
    }
  },
  evergreen: true
}

function getSiderBar(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'hrml-headers',
        'computers',
        'yaml',
        // 'out-a'
      ]
    }
  ]
}