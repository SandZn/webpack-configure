const { addToEmptyArray } = require('../utils/arrays');
const { compose } = require('../utils/functions');
const { buildObjectWithKeyValue } = require('../utils/objects');
const { addDotSlash } = require('../utils/paths');

const buildEntryObject = buildObjectWithKeyValue('entry');

const entry = compose(addDotSlash, addToEmptyArray, buildEntryObject);

module.exports = entry;
