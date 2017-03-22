const { expect } = require('chai');

const { CONSTANTS } = require('../../../../config/config');
const babel = require('./babel');

describe('Webpack -> Module -> Rule -> Loader -> Babel', () => {
  it('Loads the standard babel loader', () => {
    const expected = { loader: CONSTANTS.LOADER_BABEL };
    expect(babel()).to.deep.equal(expected);
  });
});
