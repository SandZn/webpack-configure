const { expect } = require('chai');

const { CONSTANTS } = require('../../../../config/config');
const css = require('./css');

describe('Webpack -> Module -> Rule -> Loader -> Css', () => {
  it('Loads the standard css loader', () => {
    const expected = { loader: CONSTANTS.LOADER_CSS };
    expect(css()).to.deep.equal(expected);
  });
});
