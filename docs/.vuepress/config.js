module.exports = {
  base: '/npmPackage-18-06-08/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    repo: 'kokudolly/npmPackage-18-06-08',
    docsDir: 'docs',
    docsBranch: 'dev',
    editLinks: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: 'auto',
    sidebarDepth: 1,
  },
  markdown: {

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