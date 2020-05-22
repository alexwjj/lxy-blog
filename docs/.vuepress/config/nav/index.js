module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  { text: '简历', link: 'http://118.25.49.69:8081/', icon: 'reco-blog' },
  { text: 'vue管理系统', link: 'http://118.25.49.69:8088/', icon: 'reco-api' },
  { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
  { text: '联系方式', 
    icon: 'reco-message',
    items: [
      { text: 'About', link: '/views/about/', icon: 'reco-account' },
      { text: 'GitHub', link: 'https://github.com/alexlxy', icon: 'reco-github' },
    ]
  }
]