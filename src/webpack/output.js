const { addDotSlash, join } = require('../utils/paths');

const buildLibrary = isVendorBuild => (isVendorBuild ? 'vendor' : '');

const output = ({ build: { vendor }, files: { bundle }, paths: { build } }) => ({
  filename: addDotSlash(bundle),
  library: buildLibrary(vendor),
  path: join(build),
  publicPath: '/',
});

module.exports = output;
