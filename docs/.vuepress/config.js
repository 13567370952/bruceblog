module.exports = {
  // 添加置顶按钮 
  plugins: ['@vuepress/back-to-top'],
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],
  base: '/bruceblog/',
  title: 'BruceBlog',
  themeConfig: {
    // 配置左上角的 logo
    logo: '/img/logo.png',
    nav: require('./nav.js'),
    sidebar: require("./sidebar.js"),
    // sidebar: 'auto',
    sidebarDepth: 2,
    // 启用页面滚动效果
    smoothScroll: true,
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 导航栏显示 gitee 仓库
    repo: 'https://gitee.com/brucecai55520',
    repoLabel: 'Gitee'
  }
}