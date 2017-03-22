const { CONFIG } = require('./config/config');
const { compose } = require('./utils/functions');
const { mergeObjects } = require('./utils/objects');
const context = require('./webpack/context');
const devServer = require('./webpack/dev-server/index');
const entry = require('./webpack/entry');
const webpackModule = require('./webpack/module/index');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const resolve = require('./webpack/resolve');

const applyDefaultConfig = mergeObjects(CONFIG);
const buildWebpackConfigObject = configuration => ({
  context: context(configuration),
  devServer: devServer(configuration),
  entry: entry(configuration),
  module: webpackModule(configuration),
  output: output(configuration),
  plugins: plugins(configuration),
  resolve: resolve(configuration),
});

const webpackConfigure = compose(applyDefaultConfig, buildWebpackConfigObject);

console.log(JSON.stringify(webpackConfigure(), null, 2));

module.exports = webpackConfigure;
