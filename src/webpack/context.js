const { compose } = require('../utils/functions');
const { join } = require('../utils/path');

const buildContextObject = context => ({ context });
const context = compose(join, buildContextObject);

module.exports = context;
