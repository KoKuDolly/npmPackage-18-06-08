module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    repo: 'kokudolly/npmPackage-18-06-08',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          {
            text: 'Japanese',
            items: [
              {text: 'Chinese', link: '/language/chinese'},
              {text: 'Chinese', link: '/language/Japanese'}
            ]
          }
        ]
      }
    ],
    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['page-b', 'Explicit link text'],
    //   {
    //     title: 'Group 1',
    //     collapsable: false,
    //     children: [
    //       '/'
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     children: [ /* ... */ ]
    //   },
    // ],

    // siderbar: {
    //   '/foo/': [
    //     '',
    //     'one',
    //     'two'
    //   ],
    //   '/bar/': [
    //     '',
    //     'three',
    //     'four'
    //   ]
    // },

    sidebar: 'auto',
    sidebarDepth: 1
  }
}