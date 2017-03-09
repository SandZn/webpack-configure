const { expect } = require('chai');

const { applyDefaultConfig, DEFAULT_CONFIGURATION } = require('./config');

describe('Config', () => {
  describe('applyDefaultConfig()', () => {
    it('Merges an object with default config.', () => {
      const testObject = { test: 'test' };
      expect(applyDefaultConfig(testObject)).to.deep
        .equal(Object.assign({}, DEFAULT_CONFIGURATION, testObject));
    });
  });
});
