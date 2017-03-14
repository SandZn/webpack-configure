const { expect } = require('chai');

const entry = require('./entry');

describe('Webpack -> Entry', () => {
  const APP = 'APP';
  const VENDOR = 'VENDOR';
  const configuration = {
    build: {
      vendor: false,
    },
    files: {
      entry: {
        app: APP,
        vendor: VENDOR,
      },
    },
  };
  it('Makes the input relative and adds it to an array (app)', () => {
    expect(entry(configuration)).to.deep.equal([`./${APP}`]);
  });
  it('Makes the input relative and adds it to an array (vendor)', () => {
    const vendorConfiguration = Object.assign({}, configuration, { build: { vendor: true } });
    expect(entry(vendorConfiguration)).to.deep.equal([`./${VENDOR}`]);
  });
});
