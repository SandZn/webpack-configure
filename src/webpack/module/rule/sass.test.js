const { expect } = require('chai');

const { CONSTANTS } = require('../../../config/config');
const { join } = require('../../../utils/paths');
const sass = require('./sass');

describe('Webpack -> Module -> Rule -> Sass', () => {
  const APP = 'APP';
  const SASS = 'SASS';
  const offConfiguration = {
    entry: { sass: SASS },
    languages: { css: false, javascript: false, jsx: false, sass: false },
    packages: { npm: false },
    paths: { app: APP },
  };
  it('Builds an empty loader with all settings off', () => {
    expect(sass(offConfiguration)).to.deep.equal([]);
  });
  it('builds the sass loader when sass is turned on', () => {
    const sassConfiguration = Object.assign({}, offConfiguration,
      { languages: Object.assign({}, offConfiguration.languages, { sass: true }) });
    const expected = [{
      exclude: '',
      test: new RegExp(CONSTANTS.EXTENSION_SASS),
      use: [
        { loader: CONSTANTS.LOADER_STYLE },
        { loader: CONSTANTS.LOADER_CSS },
        {
          loader: CONSTANTS.LOADER_SASS,
          options: { data: `@import "${join(APP, SASS)}"` },
        },
      ],
    }];
    expect(sass(sassConfiguration)).to.deep.equal(expected);
  });
  it('Builds the sass loader and excludes all necessasry paths', () => {
    const sassConfiguration = Object.assign({}, offConfiguration,
      { languages: Object.assign({}, offConfiguration.languages, { sass: true }) },
        { packages: Object.assign({}, offConfiguration.packages, { npm: true }) });
    const expected = [{
      exclude: new RegExp(CONSTANTS.PATH_NPM),
      test: new RegExp(CONSTANTS.EXTENSION_SASS),
      use: [
        { loader: CONSTANTS.LOADER_STYLE },
        { loader: CONSTANTS.LOADER_CSS },
        {
          loader: CONSTANTS.LOADER_SASS,
          options: { data: `@import "${join(APP, SASS)}"` },
        },
      ],
    }];
    expect(sass(sassConfiguration)).to.deep.equal(expected);
  });
});
