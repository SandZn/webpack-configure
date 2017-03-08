const { expect } = require('chai');
const path = require('path');

const { join } = require('./paths');

describe('Utils -> Paths', () => {
  describe('join()', () => {
    it('Returns a path relative to the application root.', () => {
      expect(join('app')).to.equal(path.join(__dirname, '..', 'app'));
    });
  });
});
