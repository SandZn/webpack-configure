const { expect } = require('chai');
const path = require('path');

const { CONSTANTS } = require('../../../config/config');
const reactFlexboxGrid = require('./react-flexbox-grid');

describe('Webpack -> Module -> Rule -> ReactFlexboxGrid', () => {
  const APP = 'APP';
  const ROOT = 'ROOT';
  const SASS = 'SASS';
  const offConfiguration = {
    entry: { sass: SASS },
    languages: { css: false, javascript: false, jsx: false, sass: false },
    packages: { npm: false, reactFlexboxGrid: false },
    paths: { app: APP, root: ROOT },
  };
  it('Builds an empty loader with all settings off', () => {
    expect(reactFlexboxGrid(offConfiguration)).to.deep.equal([]);
  });
  it('builds the react-flexbox-grid loader when react-flexbox-grid is turned on', () => {
    const sassConfiguration = Object.assign({}, offConfiguration,
      { packages: Object.assign({}, offConfiguration.packages, { reactFlexboxGrid: true }) },
        { paths: Object.assign({}, offConfiguration.paths, { root: `../../${ROOT}` }) });
    const expected = [{
      exclude: '',
      include: new RegExp(CONSTANTS.PATH_REACT_FLEXBOX_GRID),
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
    expect(reactFlexboxGrid(sassConfiguration)).to.deep.equal(expected);
  });
  it('Builds the sass loader and excludes all necessary paths', () => {
    const sassConfiguration = Object.assign({}, offConfiguration,
      {
        packages: Object.assign({}, offConfiguration.packages,
          { npm: true, reactFlexboxGrid: true }),
      },
        { paths: Object.assign({}, offConfiguration.paths, { root: `../${ROOT}` }) });
    const expected = [{
      exclude: new RegExp(CONSTANTS.PATH_NPM),
      include: new RegExp(CONSTANTS.PATH_REACT_FLEXBOX_GRID),
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
    expect(reactFlexboxGrid(sassConfiguration)).to.deep.equal(expected);
  });
});
