const context = require('./webpack/context');

const buildWebpackConfig = config => Object.assign({}, context(config.appPath));

console.log(buildWebpackConfig({ appPath: 'app' }));
