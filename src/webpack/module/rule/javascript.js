const { CONSTANTS, isJavascriptEnabled, isNpmEnabled } = require('../../../config/config');
const babelLoader = require('./loader/babel');
const reactHotLoader = require('./loader/hot');

const exclude = configuration => (isNpmEnabled(configuration) ?
  new RegExp(CONSTANTS.PATH_NPM) : '');
const javascript = configuration => (isJavascriptEnabled(configuration) ?
[{
  exclude: exclude(configuration),
  test: new RegExp(CONSTANTS.EXTENSION_JAVASCRIPT),
  use: [reactHotLoader(), babelLoader()],
}] : []);

module.exports = javascript;
