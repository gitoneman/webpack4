const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // webpack4 内置
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const config = require('../config')
const Util = require('./util')
const baseWebpackConfig = require('./webpack.base.config')

const prodWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: Util.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  output: {
    path: config.build.assetsRoot,
    filename: Util.assetsPath('js/[name].[hash].js'),
    chunkFilename: Util.assetsPath('js/[id].[hash].js')
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  performance: {
    hints: false
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         chunks: "initial",
  //         test: path.resolve(__dirname, "../node_modules"),
  //         name: "vendor", // 使用 vendor 入口作为公共部分
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  plugins: [
    new ExtractTextPlugin({
      filename: Util.assetsPath('css/[name].[hash].css'),
      allChunks: true
    }),
    // new MiniCssExtractPlugin({
    //   filename: Util.assetsPath('css/[name].[contenthash].css')
    // }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
  ],
  mode: 'production'
});

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  prodWebpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = prodWebpackConfig;