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
    entry: {
      app: 'index.jsx',
      vendor: 'vendor.js',
    },
    htmlTemplate: 'index.html',
    vendor: 'vendor.js',
  },
  paths: {
    app: 'app',
    build: 'build',
  },
};

module.exports = DEFAULT_CONFIGURATION;
