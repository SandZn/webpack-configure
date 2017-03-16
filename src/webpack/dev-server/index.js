const {
  getDevServerLogLevel,
  getDevServerPort,
  isDevServerEnabled,
  isDevServerHot,
} = require('../../config/config');
const { objectFromFunctions } = require('../../utils/objects');

const clientLogLevel = configuration => getDevServerLogLevel(configuration);
const compress = () => true;
const historyApiFallback = () => true;
const hot = configuration => isDevServerHot(configuration);
const noInfo = () => true;
const port = configuration => getDevServerPort(configuration);
const publicPath = () => '/';

const buildDevServer = objectFromFunctions(clientLogLevel, compress, historyApiFallback, hot,
  noInfo, port, publicPath);

const devServer = configuration =>
  (isDevServerEnabled(configuration) ? buildDevServer(configuration) : {});

module.exports = devServer;
