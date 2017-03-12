const { expect } = require('chai');
const { join } = require('./utils/paths');

const webpackConfigure = require('./index');

describe('Index', () => {
  describe('webpackConfigure()', () => {
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
      expect(webpackConfigure()).to.deep.equal(expected);
    });
  });
});
