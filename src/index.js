const { CONFIG } = require('./config/config');
const { compose } = require('./utils/functions');
const { mergeObjects, objectFromFunctions } = require('./utils/objects');
const context = require('./webpack/context');
const devServer = require('./webpack/dev-server/index');
const entry = require('./webpack/entry');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const resolve = require('./webpack/resolve');

const applyDefaultConfig = mergeObjects(CONFIG);
const buildWebpackConfigObject = objectFromFunctions(context, devServer, entry, output, plugins,
  resolve);

const webpackConfigure = compose(applyDefaultConfig, buildWebpackConfigObject);

console.log(webpackConfigure());

module.exports = webpackConfigure;
