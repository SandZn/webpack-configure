const { expect } = require('chai');

const { CONSTANTS } = require('../../../config/config');
const javascript = require('./javascript');

describe('Webpack -> Module -> Rule -> Javascript', () => {
  const offConfiguration = {
    languages: { css: false, javascript: false, jsx: false, sass: false },
    packages: { npm: false },
  };
  it('Builds an empty loader with all settings off', () => {
    expect(javascript(offConfiguration)).to.deep.equal([]);
  });
  it('builds the javascript loader when javascript is turned on', () => {
    const javascriptConfiguration = Object.assign({}, offConfiguration,
      { languages: Object.assign({}, offConfiguration.languages, { javascript: true }) });
    const expected = [{
      exclude: '',
      test: new RegExp(CONSTANTS.EXTENSION_JAVASCRIPT),
      use: [{ loader: CONSTANTS.LOADER_HOT }, { loader: CONSTANTS.LOADER_BABEL }],
    }];
    expect(javascript(javascriptConfiguration)).to.deep.equal(expected);
  });
  it('Builds the javascript loader and excludes all necessasry paths', () => {
    const javascriptConfiguration = Object.assign({}, offConfiguration,
      { languages: Object.assign({}, offConfiguration.languages, { javascript: true }) },
        { packages: Object.assign({}, offConfiguration.packages, { npm: true }) });
    const expected = [{
      exclude: new RegExp(CONSTANTS.PATH_NPM),
      test: new RegExp(CONSTANTS.EXTENSION_JAVASCRIPT),
      use: [{ loader: CONSTANTS.LOADER_HOT }, { loader: CONSTANTS.LOADER_BABEL }],
    }];
    expect(javascript(javascriptConfiguration)).to.deep.equal(expected);
  });
});
