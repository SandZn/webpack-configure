const {
  CONSTANTS,
  getDevServerLogLevel,
  getDevServerPort,
  isDevServerEnabled,
  isDevServerHot,
} = require('../../config/config');

const buildDevServer = configuration => ({
  clientLogLevel: getDevServerLogLevel(configuration),
  compress: true,
  historyApiFallback: true,
  hot: isDevServerHot(configuration),
  noInfo: true,
  port: getDevServerPort(configuration),
  publicPath: CONSTANTS.PATH_PUBLIC,
});

const devServer = configuration =>
  (isDevServerEnabled(configuration) ? buildDevServer(configuration) : {});

module.exports = devServer;
