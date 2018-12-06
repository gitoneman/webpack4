const path = require('path');
const webpack = require('webpack');
const config = require('../config')
const Util = require('./util')
const { VueLoaderPlugin } = require('vue-loader')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const baseWebpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: './src/main.js',
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 3000,
              name: Util.assetsPath('img/[name].[hash:7].[ext]')
            }
          },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     pngquant: {
          //       quality: '65-90',
          //       speed: 4
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: Util.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = baseWebpackConfig;