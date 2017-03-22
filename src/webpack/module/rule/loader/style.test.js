const { expect } = require('chai');

const { CONSTANTS } = require('../../../../config/config');
const style = require('./style');

describe('Webpack -> Module -> Rule -> Loader -> Style', () => {
  it('Loads the standard css loader', () => {
    const expected = { loader: CONSTANTS.LOADER_STYLE };
    expect(style()).to.deep.equal(expected);
  });
});
