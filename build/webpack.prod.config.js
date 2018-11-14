const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const config = require('../config')
const Util = require('./util')
const baseWebpackConfig = require('./webpack.base.config')

const prodWebpackConfig = merge(baseWebpackConfig, {
  output: {
    path: config.build.assetsRoot,
    filename: Util.assetsPath('js/[name].[hash].js'),
    chunkFilename: Util.assetsPath('js/[id].[hash].js')
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  performance: {
    hints: false
  },
  mode: 'production'
});

module.exports = prodWebpackConfig;