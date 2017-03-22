const { arrayFromFunctions } = require('../../utils/arrays');
const css = require('../module/rule/css');
const javascript = require('../module/rule/javascript');
const jsx = require('../module/rule/jsx');
const sass = require('../module/rule/sass');

const rules = arrayFromFunctions(css, javascript, jsx, sass);
const webpackModule = configuration => ({
  rules: rules(configuration),
});

module.exports = webpackModule;
