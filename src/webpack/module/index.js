const { arrayFromFunctions } = require('../../utils/arrays');
const css = require('./rule/css');
const javascript = require('./rule/javascript');
const jsx = require('./rule/jsx');
const reactFlexboxGrid = require('./rule/react-flexbox-grid');
const reactToolbox = require('./rule/react-toolbox');
const sass = require('../module/rule/sass');

const rules = arrayFromFunctions(css, javascript, jsx, reactFlexboxGrid, reactToolbox, sass);
const webpackModule = configuration => ({
  rules: rules(configuration),
});

module.exports = webpackModule;
