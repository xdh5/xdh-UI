module.exports = {
  base: '/xdh-UI/',
  title: 'xdhUI 中文文档 | xdhUI 中文网',
  description: '蛋黄UI - 一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/xdh-UI/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://github.com/xdh5/xdh-UI' }
    ],
    sidebar: [
      {
        title: '开发指南',
        children: [
          '/guide/'
        ]
      },
      {
        title: '组件',
        children: [
          '/guide/components/button',
          '/guide/components/input',
          '/guide/components/grid',
          '/guide/components/layout',
          '/guide/components/tab',
          '/guide/components/toast',
          '/guide/components/popover',
          '/guide/components/collapse',
        ]
      }
    ]
  },
  configureWebpack: {
    output: {
      publicPath: './'
    }
  }
}
