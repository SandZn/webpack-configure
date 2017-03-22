const { expect } = require('chai');

const { CONSTANTS } = require('../../../config/config');
const jsx = require('./jsx');

describe('Webpack -> Module -> Rule -> Jsx', () => {
  const offConfiguration = {
    languages: { css: false, javascript: false, jsx: false, sass: false },
    packages: { npm: false },
  };
  it('Builds an empty loader with all settings off', () => {
    expect(jsx(offConfiguration)).to.deep.equal([]);
  });
  it('builds the jsx loader when jsx is turned on', () => {
    const jsxConfiguration = Object.assign({}, offConfiguration,
      { languages: Object.assign({}, offConfiguration.languages, { jsx: true }) });
    const expected = [{
      exclude: '',
      test: new RegExp(CONSTANTS.EXTENSION_JSX),
      use: [{ loader: CONSTANTS.LOADER_HOT }, { loader: CONSTANTS.LOADER_BABEL }],
    }];
    expect(jsx(jsxConfiguration)).to.deep.equal(expected);
  });
  it('Builds the jsx loader and excludes all necessasry paths', () => {
    const jsxConfiguration = Object.assign({}, offConfiguration,
      { languages: Object.assign({}, offConfiguration.languages, { jsx: true }) },
        { packages: Object.assign({}, offConfiguration.packages, { npm: true }) });
    const expected = [{
      exclude: new RegExp(CONSTANTS.PATH_NPM),
      test: new RegExp(CONSTANTS.EXTENSION_JSX),
      use: [{ loader: CONSTANTS.LOADER_HOT }, { loader: CONSTANTS.LOADER_BABEL }],
    }];
    expect(jsx(jsxConfiguration)).to.deep.equal(expected);
  });
});
