const { getAppEntry, getVendorEntry, isVendorBuild } = require('../config/config');

const { addToEmptyArray } = require('../utils/arrays');
const { compose } = require('../utils/functions');
const { addDotSlash } = require('../utils/paths');

const getFileName = configuration => (isVendorBuild(configuration) ?
  getVendorEntry(configuration) : getAppEntry(configuration));

const entry = configuration => compose(getFileName, addDotSlash, addToEmptyArray)(configuration);

module.exports = entry;
