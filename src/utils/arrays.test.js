const { expect } = require('chai');

const { addToEmptyArray } = require('./arrays');

describe('Utils -> Arrays', () => {
  describe('addToEmptyArray()', () => {
    it('Adds the item as the first item of a new, empty array', () => {
      expect(addToEmptyArray('test')).to.deep.equal(['test']);
    });
  });
});
