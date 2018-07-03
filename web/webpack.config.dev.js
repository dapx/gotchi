const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const sharedConfig = require('./webpack.config.shared');

module.exports = merge(sharedConfig, {
  plugins: [
    new webpack.EvalSourceMapDevToolPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true
    }),
  ],
});
