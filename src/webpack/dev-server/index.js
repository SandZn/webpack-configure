const { compose } = require('../../utils/functions');
const { buildObjectWithKeyValue } = require('../../utils/objects');

const buildDevServerConfig = configuration => ({
  clientLogLevel: configuration.devServer.logLevel,
  compress: true,
  historyApiFallback: true,
  hot: configuration.devServer.hot,
  noInfo: true,
  port: configuration.devServer.port,
  publicPath: '/',
});

const buildDevServerObject = buildObjectWithKeyValue('devServer');
const buildDevServer = compose(buildDevServerConfig, buildDevServerObject);

const devServer = configuration =>
  (configuration.isEnabled ? buildDevServer(configuration) : {});

module.exports = devServer;
