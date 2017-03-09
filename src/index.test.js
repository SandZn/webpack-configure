const { expect } = require('chai');
const { join } = require('./utils/paths');

const webpackConfigBuilder = require('./index');

describe('Index', () => {
  describe('webpackConfigBuilder()', () => {
    it('Creates a webpack configuration object with no arguments', () => {
      const expected = {
        context: join('app'),
        entry: ['./index.jsx'],
        output: {
          filename: './bundle.js',
          path: join('build'),
          publicPath: '/',
        },
        resolve: 'resolve',
      };
      expect(webpackConfigBuilder()).to.deep.equal(expected);
    });
  });
});
