const { expect } = require('chai');
const path = require('path');

const { addDotSlash, join } = require('./paths');

describe('Utils -> Paths', () => {
  describe('addDotSlash()', () => {
    it('Adds a dot(.) and a slash(/) to the item', () => {
      expect(addDotSlash('test')).to.equal('./test');
    });
  });
  describe('join()', () => {
    it('Returns a path relative to the application root.', () => {
      expect(join('app')).to.equal(path.join(__dirname, '..', 'app'));
    });
  });
});
