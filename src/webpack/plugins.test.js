const { expect } = require('chai');

const plugins = require('./plugins');

describe('Webpack -> Plugins', () => {
  it('Loads a list of plugins', () => {
    expect(plugins()).to.deep.equal([]);
  });
});
