const { compose } = require('../utils/functions');
const { buildObjectWithKeyValue } = require('../utils/objects');
const { join } = require('../utils/paths');

const buildContextObject = buildObjectWithKeyValue('context');

const context = compose(join, buildContextObject);

module.exports = context;
