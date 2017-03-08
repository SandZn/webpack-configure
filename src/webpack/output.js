const { compose } = require('../utils/functions');
const { buildObjectWithKeyValue } = require('../utils/objects');
const { join } = require('../utils/paths');

const buildFilename = fileBundle => ({ filename: `./${fileBundle}` });
const buildPathObject = path => ({ path });
const buildPath = compose(join, buildPathObject);
const buildPublicPath = () => ({ publicPath: '/' });
const buildLibrary = isVendorBuild => (isVendorBuild ? { library: 'vendor' } : {});

const buildOutput = ({ build: { vendor }, files: { bundle }, paths: { build } }) =>
  Object.assign({}, buildFilename(bundle), buildPath(build), buildPublicPath(),
    buildLibrary(vendor));
const buildOutputObject = buildObjectWithKeyValue('output');
const output = compose(buildOutput, buildOutputObject);

module.exports = output;
