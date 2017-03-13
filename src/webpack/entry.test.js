const { expect } = require('chai');

const entry = require('./entry');

describe('Webpack -> Entry', () => {
  it('Makes the input relative and adds it to an array', () => {
    const PATH = 'PATH';
    expect(entry(PATH)).to.deep.equal([`./${PATH}`]);
  });
});
