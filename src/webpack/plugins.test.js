const { expect } = require('chai');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const plugins = require('./plugins');

describe('Webpack -> Plugins', () => {
  const configuration = {
    build: { NamedModulesPlugin: false, vendor: false },
    devServer: { hot: false },
    html: { isEnabled: false, template: '' },
  };
  it('Loads only the default plugins with minimal configuration', () => {
    expect(plugins(configuration)).to.deep.equal([]);
  });
  it('Loads the webpack hot module replacement plugin', () => {
    const hmrConfiguration = Object.assign({}, configuration, { devServer: { hot: true } });
    expect(plugins(hmrConfiguration)).to.deep.equal([
      new webpack.HotModuleReplacementPlugin(),
    ]);
  });
  it('Loads the html-webpack-plugin', () => {
    const TEMPLATE = 'TEMPLATE';
    const htmlConfiguration = Object.assign({}, configuration,
      { html: { isEnabled: true, template: TEMPLATE } });
    const expected = [
      new HtmlWebpackPlugin({ template: TEMPLATE }),
    ];
    expect(plugins(htmlConfiguration)).to.deep.equal(expected);
  });
  it('Loads the namedModules plugin', () => {
    const namedModulesConfiguration = Object.assign({}, configuration,
      { build: { namedModules: true } });
    expect(plugins(namedModulesConfiguration)).to.deep.equal([new webpack.NamedModulesPlugin()]);
  });
});
