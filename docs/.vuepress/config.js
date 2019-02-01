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
      { text: 'VuePress中文网', link: 'http://caibaojian.com/vuepress/'}
    ],
    sidebar: {
      '/guide/': getSiderBar('指南')
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