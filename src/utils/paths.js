const path = require('path');

const addDotSlash = item => `./${item}`;
const join = path.join.bind(null, __dirname, '..');

module.exports = { addDotSlash, join };
