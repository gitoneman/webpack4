const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, '..'),
    port: 9000,
    hot: true,
    open: true,
    clientLogLevel: 'none',
    compress: false
  },
  mode: 'development'
});

module.exports = devWebpackConfig;