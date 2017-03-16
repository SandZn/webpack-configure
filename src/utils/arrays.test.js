const { expect } = require('chai');

const { addToEmptyArray, arrayFromFunctions } = require('./arrays');

describe('Utils -> Arrays', () => {
  describe('addToEmptyArray()', () => {
    it('Adds the item as the first item of a new, empty array', () => {
      expect(addToEmptyArray('test')).to.deep.equal(['test']);
    });
  });

  describe('arrayFromFunctions()', () => {
    it('Adds the result of each function to the resulting array', () => {
      const X = 'X';
      const Y = 'Y';
      const Z = 'Z';
      const configuration = { X, Y, Z };
      const x = config => config.X;
      const y = config => config.Y;
      const z = config => config.Z;
      expect(arrayFromFunctions(x, y, z)(configuration)).to.deep.equal([X, Y, Z]);
    });
  });
});
