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
    const ROOT = 'ROOT';
    const configuration = { paths: { root: ROOT } };
    it('Returns a function that returns path relative to the application root.', () => {
      expect(join(configuration)('app')).to.equal(path.join(__dirname, ROOT, 'app'));
    });
  });
});
