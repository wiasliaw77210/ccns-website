'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../', 'static', 'index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: 'dependency',
      favicon: path.join(__dirname, '../static', 'favicon.ico'),
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyjsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: false,
        },
      }),
    ],
  },
});
