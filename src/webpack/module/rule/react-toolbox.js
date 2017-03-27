const { CONSTANTS, isReactToolboxEnabled, isNpmEnabled } = require('../../../config/config');
const cssLoader = require('./loader/css');
const sassLoader = require('./loader/sass');
const styleLoader = require('./loader/style');

const exclude = configuration => (isNpmEnabled(configuration) ?
  new RegExp(CONSTANTS.PATH_NPM) : '');
const reactToolbox = configuration => (isReactToolboxEnabled(configuration) ?
[{
  exclude: exclude(configuration),
  include: new RegExp(CONSTANTS.PATH_REACT_TOOLBOX),
  test: new RegExp(CONSTANTS.EXTENSION_SASS),
  use: [styleLoader(), cssLoader(), sassLoader(configuration)],
}] : []);

module.exports = reactToolbox;
