const { CONSTANTS, isSassEnabled, isNpmEnabled } = require('../../../config/config');
const cssLoader = require('./loader/css');
const sassLoader = require('./loader/sass');
const styleLoader = require('./loader/style');

const exclude = configuration => (isNpmEnabled(configuration) ?
  new RegExp(CONSTANTS.PATH_NPM) : '');
const sass = configuration => (isSassEnabled(configuration) ?
[{
  exclude: exclude(configuration),
  test: new RegExp(CONSTANTS.EXTENSION_SASS),
  use: [styleLoader(), cssLoader(), sassLoader(configuration)],
}] : []);

module.exports = sass;
