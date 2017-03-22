const { CONSTANTS, isJsxEnabled, isNpmEnabled } = require('../../../config/config');
const babelLoader = require('./loader/babel');
const reactHotLoader = require('./loader/hot');

const exclude = configuration => (isNpmEnabled(configuration) ?
  new RegExp(CONSTANTS.PATH_NPM) : '');
const jsx = configuration => (isJsxEnabled(configuration) ?
[{
  exclude: exclude(configuration),
  test: new RegExp(CONSTANTS.EXTENSION_JSX),
  use: [reactHotLoader(), babelLoader()],
}] : []);

module.exports = jsx;
