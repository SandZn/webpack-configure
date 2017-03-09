const { mergeObjects } = require('./utils/objects');

const DEFAULT_CONFIGURATION = {
  application: {
    languages: {
      javascript: true,
      jsx: true,
    },
    packages: {
      npm: true,
    },
  },
  build: {
    vendor: false,
  },
  files: {
    bundle: 'bundle.js',
    entry: 'index.jsx',
  },
  paths: {
    app: 'app',
    build: 'build',
  },
};
const applyDefaultConfig = mergeObjects(DEFAULT_CONFIGURATION);

module.exports = { applyDefaultConfig, DEFAULT_CONFIGURATION };
