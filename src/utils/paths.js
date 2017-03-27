const path = require('path');
const { getRootPath } = require('../config/config');

const addDotSlash = item => `./${item}`;
const join = configuration => path.join.bind(null, __dirname, getRootPath(configuration));

module.exports = { addDotSlash, join };
