const themeConfig = require('./config/theme/')

module.exports = {
  base: '/blog/',
  title: "面朝大海 春暖花开",
  description: '愿你有一个灿烂的前程   愿你有情人终成眷属   愿你在尘世获得幸福',
  dest: 'docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  