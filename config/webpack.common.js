const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { src, public } = require('./paths');

module.exports = {
  entry: [`${src}/index.tsx`],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [{ from: public, to: 'assets' }],
    }),

    new HtmlWebpackPlugin({
      favicon: `${src}/images/favicon.ico`,
      template: `${src}/index.html`,
    }),
  ],

  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': src,
      'assets': public,
    },
    fallback: {
      stream: require.resolve('stream-browserify'),
    },
  },
};
