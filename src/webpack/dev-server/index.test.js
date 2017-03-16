const { expect } = require('chai');

const devServer = require('./index');

describe('Webpack -> Dev server', () => {
  it('Returns an empty object if webpack dev server is not enabled', () => {
    expect(devServer({ devServer: { isEnabled: false } })).to.deep.equal({});
  });
  it('Adds the correct configuration to the resulting object', () => {
    const LOGLEVEL = 'LOGLEVEL';
    const HOT = true;
    const PORT = 'PORT';
    const configuration = {
      devServer: {
        isEnabled: true,
        logLevel: LOGLEVEL,
        hot: HOT,
        port: PORT,
      },
    };
    const expected = {
      clientLogLevel: LOGLEVEL,
      compress: true,
      historyApiFallback: true,
      hot: HOT,
      noInfo: true,
      port: PORT,
      publicPath: '/',
    };
    expect(devServer(configuration)).to.deep.equal(expected);
  });
});
