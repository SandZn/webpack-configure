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
  devServer: {
    hot: true,
    isEnabled: true,
    logLevel: 'error',
    port: 2222,
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

module.exports = DEFAULT_CONFIGURATION;
