const {
  CONSTANTS,
  getAppPath,
  isJavascriptEnabled,
  isJsxEnabled,
  isNpmEnabled,
} = require('../config/config');
const { addToEmptyArray, arrayFromFunctions } = require('../utils/arrays');
const { compose } = require('../utils/functions');

const javascript = configuration => (isJavascriptEnabled(configuration) ?
  [CONSTANTS.EXTENSION_JAVASCRIPT] : []);
const jsx = configuration => (isJsxEnabled(configuration) ? [CONSTANTS.EXTENSION_JSX] : []);
const extensions = arrayFromFunctions(javascript, jsx);

const app = compose(getAppPath, addToEmptyArray);
const npm = configuration => (isNpmEnabled(configuration) ? [CONSTANTS.PATH_NPM] : []);
const modules = arrayFromFunctions(app, npm);

const resolve = configuration => ({
  extensions: extensions(configuration),
  modules: modules(configuration),
});

module.exports = resolve;
