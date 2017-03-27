const { expect } = require('chai');
const path = require('path');

const { CONSTANTS } = require('../../../config/config');
const reactToolbox = require('./react-toolbox');

describe('Webpack -> Module -> Rule -> ReactToolbox', () => {
  const APP = 'APP';
  const ROOT = 'ROOT';
  const SASS = 'SASS';
  const offConfiguration = {
    entry: { sass: SASS },
    languages: { css: false, javascript: false, jsx: false, sass: false },
    packages: { npm: false, reactToolbox: false },
    paths: { app: APP, root: ROOT },
  };
  it('Builds an empty loader with all settings off', () => {
    expect(reactToolbox(offConfiguration)).to.deep.equal([]);
  });
  it('builds the react-toolbox loader when react-toolbox is turned on', () => {
    const sassConfiguration = Object.assign({}, offConfiguration,
      { packages: Object.assign({}, offConfiguration.packages, { reactToolbox: true }) },
        { paths: Object.assign({}, offConfiguration.paths, { root: `../../${ROOT}` }) });
    const expected = [{
      exclude: '',
      include: new RegExp(CONSTANTS.PATH_REACT_TOOLBOX),
      test: new RegExp(CONSTANTS.EXTENSION_SASS),
      use: [
        { loader: CONSTANTS.LOADER_STYLE },
        { loader: CONSTANTS.LOADER_CSS },
        {
          loader: CONSTANTS.LOADER_SASS,
          options: { data: `@import "${path.join(__dirname, '../../../..', ROOT, APP, SASS)}"` },
        },
      ],
    }];
    expect(reactToolbox(sassConfiguration)).to.deep.equal(expected);
  });
  it('Builds the react-toolbox loader and excludes all necessary paths', () => {
    const sassConfiguration = Object.assign({}, offConfiguration,
      {
        packages: Object.assign({}, offConfiguration.packages,
          { npm: true, reactToolbox: true }),
      },
        { paths: Object.assign({}, offConfiguration.paths, { root: `../${ROOT}` }) });
    const expected = [{
      exclude: new RegExp(CONSTANTS.PATH_NPM),
      include: new RegExp(CONSTANTS.PATH_REACT_TOOLBOX),
      test: new RegExp(CONSTANTS.EXTENSION_SASS),
      use: [
        { loader: CONSTANTS.LOADER_STYLE },
        { loader: CONSTANTS.LOADER_CSS },
        {
          loader: CONSTANTS.LOADER_SASS,
          options: { data: `@import "${path.join(__dirname, '../../..', ROOT, APP, SASS)}"` },
        },
      ],
    }];
    expect(reactToolbox(sassConfiguration)).to.deep.equal(expected);
  });
});
