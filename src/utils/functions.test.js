const { expect } = require('chai');

const { compose } = require('./functions');

describe('Utils -> Functions', () => {
  describe('compose()', () => {
    it('Composes a series of functions from left to right', () => {
      const shout = input => input.toUpperCase();
      const exclaim = input => `${input}!`;
      expect(compose(shout, exclaim)('excellent')).to.equal('EXCELLENT!');
    });
    it('Acts as an identity method with no functions given', () => {
      expect(compose()('excellent')).to.equal('excellent');
    });
  });
});
