const { expect } = require('chai');

const { CONSTANTS } = require('../../../../config/config');
const hot = require('./hot');

describe('Webpack -> Module -> Rule -> Loader -> Hot', () => {
  it('Loads the standard hot loader', () => {
    const expected = { loader: CONSTANTS.LOADER_HOT };
    expect(hot()).to.deep.equal(expected);
  });
});
