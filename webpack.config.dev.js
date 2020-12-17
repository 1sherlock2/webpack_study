const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const configBase = require('./webpack.config.base');

const config = merge(configBase,  {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'chunk.[chunkhash].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './public/'),
    hot: true,
    port: 5000,
    open: true,
  },
  devtool: 'inline-source-map',
})

module.exports = config