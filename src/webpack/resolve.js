const { addToEmptyArray } = require('../utils/arrays');

const buildJavascript = javascript => (javascript ? addToEmptyArray('.js') : []);
const buildJsx = jsx => (jsx ? addToEmptyArray('.jsx') : []);
const extensions = ({ javascript, jsx }) => [
  ...buildJavascript(javascript),
  ...buildJsx(jsx),
];

const buildApp = app => (app ? addToEmptyArray(app) : []);
const buildNpm = npm => (npm ? addToEmptyArray('node_modules') : []);
const modules = ({ application: { packages: { npm } }, paths: { app } }) => [
  ...buildApp(app),
  ...buildNpm(npm),
];

const resolve = configuration => ({
  extensions: extensions(configuration.application.languages),
  modules: modules(configuration),
});

module.exports = resolve;
