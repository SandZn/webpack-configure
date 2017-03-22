const CONFIG = {
  build: { namedModules: true, vendor: false },
  devServer: { hot: true, isEnabled: true, logLevel: 'error', port: 2222 },
  entry: { app: 'index.jsx', sass: 'variables.scss', vendor: 'vendor.js' },
  html: { isEnabled: true, template: 'index.html' },
  languages: { css: true, javascript: true, jsx: true, sass: true },
  output: { app: 'bundle.js', vendor: 'vendor.js' },
  packages: { npm: true },
  paths: { app: 'app', build: 'build' },
};

const CONSTANTS = {
  EXTENSION_CSS: '.css',
  EXTENSION_JAVASCRIPT: '.js',
  EXTENSION_JSX: '.jsx',
  EXTENSION_SASS: '.scss',
  LOADER_BABEL: 'babel-loader',
  LOADER_CSS: 'css-loader',
  LOADER_HOT: 'react-hot-loader/webpack',
  LOADER_SASS: 'sass-loader',
  LOADER_STYLE: 'style-loader',
  PATH_NPM: 'node_modules',
  PATH_PUBLIC: '/',
  VENDOR_LIBRARY: 'vendor',
};

const getAppEntry = configuration => configuration.entry.app;
const getAppOutput = configuration => configuration.output.app;
const getAppPath = configuration => configuration.paths.app;
const getBuildPath = configuration => configuration.paths.build;
const getDevServerLogLevel = configuration => configuration.devServer.logLevel;
const getDevServerPort = configuration => configuration.devServer.port;
const getHtmlTemplate = configuration => configuration.html.template;
const getSassEntry = configuration => configuration.entry.sass;
const getVendorEntry = configuration => configuration.entry.vendor;
// const getVendorOutput = configuration => configuration.entry.output;
const isCssEnabled = configuration => !!configuration.languages.css;
const isDevServerEnabled = configuration => !!configuration.devServer.isEnabled;
const isDevServerHot = configuration => !!configuration.devServer.hot;
const isHtmlEnabled = configuration => !!configuration.html.isEnabled;
const isJavascriptEnabled = configuration => !!configuration.languages.javascript;
const isJsxEnabled = configuration => !!configuration.languages.jsx;
const isNamedModulesEnabled = configuration => !!configuration.build.namedModules;
const isNpmEnabled = configuration => !!configuration.packages.npm;
const isSassEnabled = configuration => !!configuration.languages.sass;
const isSassEntryEnabled = configuration => !!configuration.entry.sass;
const isVendorBuild = configuration => !!configuration.build.vendor;

module.exports = {
  CONFIG,
  CONSTANTS,
  getAppEntry,
  getAppOutput,
  getAppPath,
  getBuildPath,
  getDevServerLogLevel,
  getDevServerPort,
  getHtmlTemplate,
  getSassEntry,
  getVendorEntry,
  // getVendorOutput,
  isCssEnabled,
  isJavascriptEnabled,
  isJsxEnabled,
  isNamedModulesEnabled,
  isNpmEnabled,
  isDevServerEnabled,
  isDevServerHot,
  isHtmlEnabled,
  isSassEnabled,
  isSassEntryEnabled,
  isVendorBuild,
};
