const buildDevServer = configuration => ({
  clientLogLevel: configuration.devServer.logLevel,
  compress: true,
  historyApiFallback: true,
  hot: configuration.devServer.hot,
  noInfo: true,
  port: configuration.devServer.port,
  publicPath: '/',
});

const devServer = configuration =>
  (configuration.devServer.isEnabled ? buildDevServer(configuration) : {});

module.exports = devServer;
