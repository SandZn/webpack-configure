const { expect } = require('chai');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const webpackConfigure = require('./index');

describe('Index', () => {
  describe('webpackConfigure()', () => {
    it('Creates a webpack configuration object with no arguments', () => {
      const expected = {
        context: path.join(__dirname, '../../..', 'app'),
        devServer: {
          clientLogLevel: 'error',
          compress: true,
          historyApiFallback: true,
          hot: true,
          noInfo: true,
          port: 2222,
          publicPath: '/',
        },
        entry: ['./index.jsx'],
        module: {
          rules: [
            {
              exclude: /node_modules/,
              test: /.css/,
              use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
              exclude: /node_modules/,
              test: /.js/,
              use: [{ loader: 'react-hot-loader/webpack' }, { loader: 'babel-loader' }],
            },
            {
              exclude: /node_modules/,
              test: /.jsx/,
              use: [{ loader: 'react-hot-loader/webpack' }, { loader: 'babel-loader' }],
            },
            {
              exclude: /node_modules/,
              test: /.scss/,
              use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                {
                  loader: 'sass-loader',
                  options: {
                    data: `@import "${path.join(__dirname, '../../..', 'app', 'variables.scss')}"`,
                  },
                },
              ],
            },
          ],
        },
        output: {
          filename: './bundle.js',
          library: '',
          path: path.join(__dirname, '../../..', 'build'),
          publicPath: '/',
        },
        plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new HtmlWebpackPlugin({ template: 'index.html' }),
          new webpack.NamedModulesPlugin(),
        ],
        resolve: { extensions: ['.js', '.jsx'], modules: ['app', 'node_modules'] },
      };
      expect(webpackConfigure()).to.deep.equal(expected);
    });
  });
});
