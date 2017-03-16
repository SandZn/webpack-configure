const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const {
  getHtmlTemplate,
  isDevServerHot,
  isHtmlEnabled,
  isNamedModulesEnabled,
} = require('../config/config');
const { arrayFromFunctions } = require('../utils/arrays');

const hmr = configuration => (isDevServerHot(configuration) ?
  [new webpack.HotModuleReplacementPlugin()] : []);
const html = configuration => (isHtmlEnabled(configuration) ?
  [new HtmlWebpackPlugin({ template: getHtmlTemplate(configuration) })] : []);
const named = configuration => (isNamedModulesEnabled(configuration) ?
  [new webpack.NamedModulesPlugin()] : []);

const plugins = configuration => arrayFromFunctions(hmr, html, named)(configuration);

module.exports = plugins;
