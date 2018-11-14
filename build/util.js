'use strict'
const path = require('path')
const config = require('../config')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

module.exports = {
  assetsPath(_path) {
    const assetsSubDirectory = config.build.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
  }
}