const DEFAULT_CONFIGURATION = require('./config');
const { compose } = require('./utils/functions');
const { mergeObjects } = require('./utils/objects');
const context = require('./webpack/context');
const entry = require('./webpack/entry');
const output = require('./webpack/output');
const resolve = require('./webpack/resolve');

const applyDefaultConfig = mergeObjects(DEFAULT_CONFIGURATION);

const buildWebpackConfigObject = configuration => Object.assign({},
  context(configuration.paths.app), entry(configuration.files.entry), output(configuration),
    resolve());
const webpackConfigBuilder = compose(applyDefaultConfig, buildWebpackConfigObject);

console.log(webpackConfigBuilder());

module.exports = webpackConfigBuilder;
