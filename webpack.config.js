const path = require('path');
const webpack = require('webpack');
function resolve (dir) {
  return path.join(__dirname, dir)
}
const config = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  resolve: {
    // extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, ''),
    port: 9000,
    hot: true,
    clientLogLevel: 'none',
    compress: false
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
  ],
  mode: 'development'
};

module.exports = config;