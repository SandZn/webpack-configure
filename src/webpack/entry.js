const { addToEmptyArray } = require('../utils/arrays');
const { compose } = require('../utils/functions');
const { addDotSlash } = require('../utils/paths');

const entry = compose(addDotSlash, addToEmptyArray);

module.exports = entry;
