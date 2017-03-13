const { expect } = require('chai');

const resolve = require('./resolve');

describe('Webpack -> Resolve', () => {
  it('Builds the required resolve', () => {
    expect(resolve()).to.equal('resolve');
  });
});
