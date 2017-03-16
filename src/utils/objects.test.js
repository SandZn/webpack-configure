const { expect } = require('chai');

const { buildObjectWithKeyValue, mergeObjects, objectFromFunctions } = require('./objects');

describe('Utils -> Objects', () => {
  describe('buildObjectWithKeyValue()', () => {
    it('Returns a function that creates objects with the desired key and value.', () => {
      const buildTestObject = buildObjectWithKeyValue('test');
      expect(buildTestObject('test')).to.deep.equal({ test: 'test' });
      expect(buildTestObject('TEST')).to.deep.equal({ test: 'TEST' });
    });
    it('Default the key to \'value\' when no key is given', () => {
      const buildValueObject = buildObjectWithKeyValue();
      expect(buildValueObject('test')).to.deep.equal({ value: 'test' });
      expect(buildValueObject('TEST')).to.deep.equal({ value: 'TEST' });
    });
  });

  describe('mergeObjects()', () => {
    it('Returns a function that merges two objects', () => {
      const mergeWithTestObject = mergeObjects({ test: 'test' });
      expect(mergeWithTestObject({ a: 'a' })).to.deep.equal({ test: 'test', a: 'a' });
    });
    it('Overwrites the same key with the new value', () => {
      const mergeWithTestObject = mergeObjects({ test: 'test' });
      expect(mergeWithTestObject({ test: 'TEST' })).to.deep.equal({ test: 'TEST' });
    });
  });

  describe('objectFromFunctions()', () => {
    it('Builds an object with function names as keys and values as executions', () => {
      const X = 'X';
      const Y = 'Y';
      const Z = 'Z';
      const configuration = { X, Y, Z };
      const x = config => config.X;
      const y = config => config.Y;
      const z = config => config.Z;
      expect(objectFromFunctions(x, y, z)(configuration)).to.deep.equal({ x: X, y: Y, z: Z });
    });
  });
});
