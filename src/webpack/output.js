const { CONSTANTS, getAppOutput, getBuildPath, isVendorBuild } = require('../config/config');
const { compose } = require('../utils/functions');
const { objectFromFunctions } = require('../utils/objects');
const { addDotSlash, join } = require('../utils/paths');

const filename = configuration => compose(getAppOutput, addDotSlash)(configuration);
const library = configuration => (isVendorBuild(configuration) ? CONSTANTS.VENDOR_LIBRARY : '');
const path = configuration => compose(getBuildPath, join)(configuration);
const publicPath = () => '/';

const output = configuration =>
  objectFromFunctions(filename, library, path, publicPath)(configuration);

module.exports = output;
