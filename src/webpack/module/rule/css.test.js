const { expect } = require('chai');

const { CONSTANTS } = require('../../../config/config');
const css = require('./css');

describe('Webpack -> Module -> Rule -> Css', () => {
  const offConfiguration = {
    languages: { css: false, javascript: false, jsx: false, sass: false },
    packages: { npm: false },
  };
  it('Builds an empty loader with all settings off', () => {
    expect(css(offConfiguration)).to.deep.equal([]);
  });
  it('builds the css loader when css is turned on', () => {
    const cssConfiguration = Object.assign({}, offConfiguration,
      { languages: Object.assign({}, offConfiguration.languages, { css: true }) });
    const expected = [{
      exclude: '',
      test: new RegExp(CONSTANTS.EXTENSION_CSS),
      use: [{ loader: CONSTANTS.LOADER_STYLE }, { loader: CONSTANTS.LOADER_CSS }],
    }];
    expect(css(cssConfiguration)).to.deep.equal(expected);
  });
  it('Builds the css loader and excludes all necessasry paths', () => {
    const cssConfiguration = Object.assign({}, offConfiguration,
      { languages: Object.assign({}, offConfiguration.languages, { css: true }) },
        { packages: Object.assign({}, offConfiguration.packages, { npm: true }) });
    const expected = [{
      exclude: new RegExp(CONSTANTS.PATH_NPM),
      test: new RegExp(CONSTANTS.EXTENSION_CSS),
      use: [{ loader: CONSTANTS.LOADER_STYLE }, { loader: CONSTANTS.LOADER_CSS }],
    }];
    expect(css(cssConfiguration)).to.deep.equal(expected);
  });
});
