const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { src, build, public } = require('./paths');

module.exports = {
  entry: [`${src}/index.tsx`],

  output: {
    path: build,
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: public, to: 'assets' }],
    }),

    new HtmlWebpackPlugin({
      favicon: `${src}/images/favicon.ico`,
      template: `${src}/index.html`,
    }),
  ],

  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader'] },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': src,
      'assets': public,
    },
  },
};
