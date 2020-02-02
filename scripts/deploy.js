const { publish } = require('gh-pages')

console.log('Starting deploying...')

publish('dist', {
  branch: 'master',
  repo: 'https://github.com/hopscotchproject/hopscotchproject.github.io.git'
}, () => console.log('Deployment done!'))
