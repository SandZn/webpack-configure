const { expect } = require('chai');

const resolve = require('./resolve');

describe('Webpack -> Resolve', () => {
  it('Builds an empty resolve with no configuration', () => {
    const configuration = {
      languages: {},
      packages: {},
      paths: { app: 'app' },
    };
    expect(resolve(configuration)).to.deep.equal({ extensions: [], modules: ['app'] });
  });
  it('Builds a full resolve with the correct configuration', () => {
    const configuration = {
      languages: { javascript: true, jsx: true },
      packages: { npm: true },
      paths: { app: 'app' },
    };
    const expected = { extensions: ['.js', '.jsx'], modules: ['app', 'node_modules'] };
    expect(resolve(configuration)).to.deep.equal(expected);
  });
});
