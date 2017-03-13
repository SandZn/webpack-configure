const { expect } = require('chai');
const { join } = require('./utils/paths');

const webpackConfigure = require('./index');

describe('Index', () => {
  describe('webpackConfigure()', () => {
    it('Creates a webpack configuration object with no arguments', () => {
      const expected = {
        context: join('app'),
        devServer: {},
        entry: ['./index.jsx'],
        output: {
          filename: './bundle.js',
          library: '',
          path: join('build'),
          publicPath: '/',
        },
        resolve: 'resolve',
      };
      expect(webpackConfigure()).to.deep.equal(expected);
    });
  });
});
