const { compose, identity } = require('../../utils/functions');
const { buildObjectWithKeyValue } = require('../../utils/objects');

// const buildClientLogLevelObject = buildObjectWithKeyValue('clientLogLevel');
// const buildCompressObject = buildObjectWithKeyValue('compress');
// const buildContentBaseObject = buildObjectWithKeyValue('contentBase');
// const buildHistoryApiFallbackObject = buildObjectWithKeyValue('historyApiFallback');
// const buildHotObject = buildObjectWithKeyValue('hot');
// const buildNoInfoObject = buildObjectWithKeyValue('noInfo');
// const buildPortObject = buildObjectWithKeyValue('port');
// const buildPublicPathObject = buildObjectWithKeyValue('publicPath');

const buildDevServerConfig = configuration => ({
  clientLogLevel: configuration.devServer.logLevel,
  compress: true,
  historyApiFallback: true,
  hot: configuration.devServer.hot,
  noInfo: true,
  port: configuration.devServer.port,
  publicPath: '/',
});

  // Object.assign({}, buildClientLogLevelObject(configuration.devServer.logLevel),
  //   buildCompressObject(true), buildHistoryApiFallbackObject(true),
  //     buildHotObject(configuration.devServer.hot), buildNoInfoObject(true),
  //       buildPortObject(configuration.devServer.port), buildPublicPathObject('/'));
const buildDevServerObject = buildObjectWithKeyValue('devServer');
const buildDevServer = compose(identity, buildDevServerConfig, buildDevServerObject);

const devServer = configuration =>
  (configuration.isEnabled ? buildDevServer(configuration) : {});

module.exports = devServer;
