// https://github.com/birkir/gatsby-source-prismic-graphql/issues/162#issuecomment-600641723
var fs = require('fs')
var dir = './.cache/caches/gatsby-source-prismic-graphql'

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}
