const {
  CONSTANTS,
  getAppPath,
  isJavascriptEnabled,
  isJsxEnabled,
  isNpmEnabled,
} = require('../config/config');
const { addToEmptyArray, arrayFromFunctions } = require('../utils/arrays');
const { compose } = require('../utils/functions');
const { objectFromFunctions } = require('../utils/objects');

const javascript = configuration => (isJavascriptEnabled(configuration) ?
  [CONSTANTS.EXTENSION_JAVASCRIPT] : []);
const jsx = configuration => (isJsxEnabled(configuration) ? [CONSTANTS.EXTENSION_JSX] : []);
const extensions = configuration => arrayFromFunctions(javascript, jsx)(configuration);

const app = configuration => compose(getAppPath, addToEmptyArray)(configuration);
const npm = configuration => (isNpmEnabled(configuration) ? [CONSTANTS.PATH_NPM] : []);
const modules = configuration => arrayFromFunctions(app, npm)(configuration);

const resolve = configuration => objectFromFunctions(extensions, modules)(configuration);

module.exports = resolve;
