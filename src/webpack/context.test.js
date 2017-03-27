const { expect } = require('chai');
const path = require('path');

const context = require('./context');

describe('Webpack -> Context', () => {
  it('Builds the context by creating a relative path', () => {
    const APP = 'APP';
    const ROOT = '../ROOT';
    const configuration = { paths: { app: APP, root: ROOT } };
    expect(context(configuration)).to.deep.equal(path.join(__dirname, ROOT, APP));
  });
});
