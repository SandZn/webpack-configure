const { expect } = require('chai');
const path = require('path');

const output = require('./output');

describe('Webpack -> Output', () => {
  it('Builds the output object', () => {
    const BUILD = 'BUILD';
    const BUNDLE = 'BUNDLE';
    const VENDOR = false;
    const configuration = {
      build: { vendor: VENDOR },
      output: { app: BUNDLE },
      paths: { build: BUILD },
    };
    const expected = {
      filename: `./${BUNDLE}`,
      library: '',
      path: path.join(__dirname, '..', BUILD),
      publicPath: '/',
    };
    expect(output(configuration)).to.deep.equal(expected);
  });
  it('Adds the vendor library when it is a vendor build', () => {
    const BUILD = 'BUILD';
    const BUNDLE = 'BUNDLE';
    const VENDOR = true;
    const configuration = {
      build: { vendor: VENDOR },
      output: { app: BUNDLE },
      paths: { build: BUILD },
    };
    const expected = {
      filename: `./${BUNDLE}`,
      library: 'vendor',
      path: path.join(__dirname, '..', BUILD),
      publicPath: '/',
    };
    expect(output(configuration)).to.deep.equal(expected);
  });
});
