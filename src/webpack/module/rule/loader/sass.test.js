const { expect } = require('chai');
const path = require('path');

const { CONSTANTS } = require('../../../../config/config');
const sass = require('./sass');

describe('Webpack -> Module -> Rule -> Loader -> Sass', () => {
  it('Loads the standard sass loader with no options', () => {
    const configuration = { entry: { sass: '' }, paths: { app: 'app' } };
    const expected = { loader: CONSTANTS.LOADER_SASS, options: {} };
    expect(sass(configuration)).to.deep.equal(expected);
  });
  it('Adds the variables file loader when required', () => {
    const APP = 'APP';
    const ROOT = '../ROOT';
    const SASS = 'SASS';
    const configuration = { entry: { sass: SASS }, paths: { app: APP, root: ROOT } };
    const expected = {
      loader: CONSTANTS.LOADER_SASS,
      options: { data: `@import "${path.join(__dirname, '../../..', ROOT, APP, SASS)}"` },
    };
    expect(sass(configuration)).to.deep.equal(expected);
  });
});
