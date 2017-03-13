const DEFAULT_CONFIGURATION = require('./config');
const { compose } = require('./utils/functions');
const { mergeObjects } = require('./utils/objects');
const context = require('./webpack/context');
const devServer = require('./webpack/dev-server/index');
const entry = require('./webpack/entry');
const output = require('./webpack/output');
const resolve = require('./webpack/resolve');

const applyDefaultConfig = mergeObjects(DEFAULT_CONFIGURATION);

const buildWebpackConfigObject = configuration => ({
  context: context(configuration.paths.app),
  devServer: devServer(configuration),
  entry: entry(configuration.files.entry),
  output: output(configuration),
  resolve: resolve(),
});

const webpackConfigure = compose(applyDefaultConfig, buildWebpackConfigObject);

console.log(webpackConfigure());

module.exports = webpackConfigure;
