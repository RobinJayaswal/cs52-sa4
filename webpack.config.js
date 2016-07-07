const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['babel-polyfill', './src'],

  output: {
    path: 'build',
    publicPath: 'build/',
    filename: 'bundle.js',
    // outputs everything to build/bundle.js
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader'),
    },
    {
      test: /\.scss/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader!postcss-loader'),
    },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  postcss: [autoprefixer({ })],
};
