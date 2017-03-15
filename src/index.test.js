const { expect } = require('chai');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const { join } = require('./utils/paths');
const webpackConfigure = require('./index');

describe('Index', () => {
  describe('webpackConfigure()', () => {
    it('Creates a webpack configuration object with no arguments', () => {
      const expected = {
        context: join('app'),
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
        output: {
          filename: './bundle.js',
          library: '',
          path: join('build'),
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
