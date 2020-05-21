const themeConfig = require('./config/theme/')

module.exports = {
  base: '/blog/',
  title: "努力终有回报",
  description: '种一棵树，最好的时机是十年前，其次是现在',
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