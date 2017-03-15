const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const pluginHMR = hot => (hot ? [new webpack.HotModuleReplacementPlugin()] : []);
const pluginHtml = template => (template ? [new HtmlWebpackPlugin({ template })] : []);
const pluginNamed = isVendorBuild =>
  (isVendorBuild ? [] : [new webpack.NamedModulesPlugin()]);

const plugins = configuration => [
  ...pluginHMR(configuration.devServer.hot),
  ...pluginHtml(configuration.files.htmlTemplate),
  ...pluginNamed(configuration.build.vendor),
];

module.exports = plugins;
