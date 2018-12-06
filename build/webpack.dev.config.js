const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')
const Util = require('./util')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: Util.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..'),
    port: 9000,
    hot: true,
    open: true,
    clientLogLevel: 'none',
    compress: false
  },
  // devtool: config.build.productionSourceMap ? config.dev.devtool : false,
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development'
});

module.exports = devWebpackConfig;