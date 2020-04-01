export const portfolio = [{
  title: 'Rest-on-dynamo',
  content: 'Light weight library facilicating building RESTful service on top of AWS DynamoDB',
  links: [{
    text: 'npm',
    link: 'https://www.npmjs.com/package/rest-on-dynamo',
    type: 'npm'
  }, {
    text: 'github',
    link: 'https://github.com/hopscotchproject/rest-on-dynamo',
    type: 'github'
  }],
  tech: ['Typescript', 'AWS-SDK', 'Rollup.js']
},{
  title: 'ElasticSearch DynamoDB stream extension',
  content: 'Library facilitate sync-ing dynamodb stream records into elasticsearch',
  links: [{
    text: 'npm',
    link: 'https://www.npmjs.com/package/elasticsearch-dynamodb-stream-extension',
    type: 'npm'
  }, {
    text: 'github',
    link: 'https://github.com/hopscotchproject/elasticsearch-dynamodb-stream-extension',
    type: 'github'
  }],
  tech: ['Typescript', 'ElasticSearch', 'Rollup.js']
}, {
  title: 'Art pieces e-commerce frontend POC',
  content: 'Proof of concept fast prototyping forntend project for a e-commerce platform. Written with VueJS, the project is designed to be rendered in a webview within mobile native apps. Live demo is deployed to github page.',
  links: [{
    text: 'live demo',
    link: 'https://hopscotchproject.github.io/art-e-commerce-platform-frontend-live-demo/',
  }],
  tech: ['Vue', 'Parcel', 'TailwindCSS']
}]