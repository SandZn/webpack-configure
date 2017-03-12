const { expect } = require('chai');

const { compose, identity } = require('./functions');

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
  describe('identity()', () => {
    it('Returns the first parameter passed in', () => {
      expect(identity('test')).to.equal('test');
      expect(identity('test', 'me', 'baby', 'one', 'more', 'time')).to.equal('test');
    });
  });
});
