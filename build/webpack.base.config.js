const path = require('path');
const webpack = require('webpack');
const config = require('../config')
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
    // extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = baseWebpackConfig;