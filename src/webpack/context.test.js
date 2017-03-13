const { expect } = require('chai');
const path = require('path');

const context = require('./context');

describe('Webpack -> Context', () => {
  it('Builds the context by creating a relative path', () => {
    const PATH = 'PATH';
    expect(context(PATH)).to.deep.equal(path.join(__dirname, '..', PATH));
  });
});
