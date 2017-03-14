const { addToEmptyArray } = require('../utils/arrays');
const { compose } = require('../utils/functions');
const { addDotSlash } = require('../utils/paths');

const getFileName = configuration => (configuration.build.vendor ?
  configuration.files.entry.vendor : configuration.files.entry.app);

const entry = compose(getFileName, addDotSlash, addToEmptyArray);

module.exports = entry;
