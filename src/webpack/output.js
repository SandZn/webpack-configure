const { CONSTANTS, getAppOutput, getBuildPath, isVendorBuild } = require('../config/config');
const { compose } = require('../utils/functions');
const { addDotSlash, join } = require('../utils/paths');

const filename = compose(getAppOutput, addDotSlash);
const library = configuration => (isVendorBuild(configuration) ? CONSTANTS.VENDOR_LIBRARY : '');
const path = configuration => compose(getBuildPath, join(configuration))(configuration);

const output = configuration => ({
  filename: filename(configuration),
  library: library(configuration),
  path: path(configuration),
  publicPath: CONSTANTS.PATH_PUBLIC,
});

module.exports = output;
