const { CONSTANTS, isCssEnabled, isNpmEnabled } = require('../../../config/config');
const cssLoader = require('./loader/css');
const styleLoader = require('./loader/style');

const exclude = configuration => (isNpmEnabled(configuration) ?
  new RegExp(CONSTANTS.PATH_NPM) : '');
const css = configuration => (isCssEnabled(configuration) ?
[{
  exclude: exclude(configuration),
  test: new RegExp(CONSTANTS.EXTENSION_CSS),
  use: [styleLoader(), cssLoader()],
}] : []);

module.exports = css;
