const { expect } = require('chai');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const plugins = require('./plugins');

describe('Webpack -> Plugins', () => {
  const configuration = {
    build: { vendor: false },
    devServer: { hot: false },
    files: { htmlTemplate: '' },
  };
  const defaultPlugins = [new webpack.NamedModulesPlugin()];
  it('Loads only the default plugins with minimal configuration', () => {
    expect(plugins(configuration)).to.deep.equal(defaultPlugins);
  });
  it('Loads the webpack hot module replacement plugin', () => {
    const hmrConfiguration = Object.assign({}, configuration, { devServer: { hot: true } });
    expect(plugins(hmrConfiguration)).to.deep.equal([
      new webpack.HotModuleReplacementPlugin(),
      ...defaultPlugins,
    ]);
  });
  it('Loads the html-webpack-plugin', () => {
    const TEMPLATE = 'TEMPLATE';
    const htmlConfiguration = Object.assign({}, configuration,
      { files: { htmlTemplate: TEMPLATE } });
    const expected = [
      new HtmlWebpackPlugin({ template: TEMPLATE }),
      ...defaultPlugins,
    ];
    expect(plugins(htmlConfiguration)).to.deep.equal(expected);
  });
  it('Does not load the named modules plugin for vendor builds', () => {
    const vendorConfiguration = Object.assign({}, configuration, { build: { vendor: true } });
    expect(plugins(vendorConfiguration)).to.deep.equal([]);
  });
});
