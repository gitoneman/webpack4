const path = require('path')
module.exports = {
  dev: {
    cssSourceMap: true,
    devtool: 'source-map'
  },
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    productionSourceMap: true,
    devtool: 'source-map',
    index: path.resolve(__dirname, '../dist/index.html'),
    productionGzip: true,
    productionGzipExtensions: ['js', 'css']
  }
}