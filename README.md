# webpack-configure
[![Build Status](https://travis-ci.org/hvolschenk/webpack-configure.svg?branch=master)](https://travis-ci.org/hvolschenk/webpack-configure) [![Coverage Status](https://coveralls.io/repos/github/hvolschenk/webpack-configure/badge.svg?branch=master)](https://coveralls.io/github/hvolschenk/webpack-configure?branch=master)

A webpack config file builder.

### Setup

Add the **webpack-configure** package to your application via npm

```
$ npm i -D webpack-configure
```

### Usage

Use **webpack-configure** inside your _webpack.config.js_ file to generate the config for you:

```
const webpackConfigure = require('webpack-configure');

module.exports = webpackConfigure();
```

##### Options

A list of options can be passed to `webpackConfigure()`, they are all optional:

* **application** _Object_

  Settings about the languages and frameworks used in this project

* **application.languages** _Object_

  A list of languages (or dialects) used in your application.

* **application.languages.javascript** _Boolean_ **true**

  Whether there is javascript used in your application. This will enable the babel loader for _.js_
  files.

* **application.languages.jsx** _Boolean_ **true**

  Whether [JSX](https://jsx.github.io/) is used in your application. This will enable the babel
  loader for _.jsx_ files.

* **application.packages** _Object_

  The package installer(s) used in your application.

* **application.packages.npm** _Boolean_ **true**

  Whether [npm](https://www.npmjs.com/) is used as a dependency management tool in your application.
  This will resolve the _node_modules_ folder so installed packages can be imported correctly.

* **build** _Object_

  Settings about what type of build is to be produced.

* **build.vendor** _Boolean_ **false**

  Whether the build is to produce a vendor bundle. _If this option is selected only the vendor
  bundle will be created and not the application bundle._

* **devServer** _Object_

  Settings about the development server (This is created through webpack-dev-server).

* **devServer.hot** _Boolean_ **true**

  Whether hot module replacement must be enabled on the dev server.

* **devServer.isEnabled** _Boolean_ **true**

  Whether a dev server must be created.

* **devServer.logLevel** _String_ **error**

  The error log level for webpack builds ('error', 'info', 'none', 'warning').

* **devServer.port** _Integer_ **2222**

  The port to run the dev server on.

* **files** _Object_

  Settings about the files to be used/created.

* **files.bundle** _String_ **bundle.js**

  The name of the bundle file to be produced.

* **files.entry** _Object_

  The entry files for each build type

* **files.entry.app** _String_ **index.jsx**

  The entry-point into the application. This file is relative to the path provided in _path.app_
  (Described below).

* **files.entry.vendor** _String_ **vendor.js**

  The entry point for the vendor bundle build. This file is relative to the path provided in
  _path.app_ (Described below).

* **files.htmlTemplate**

  The html template to use for the application. This file is relative to the path provided in
  _path.app_ (Described below).

* **files.vendor**

  The output name for the vendor bundle. This file will be saved relative to the path provided in
  _path.build_ (Described below).

* **paths** _Object_

  Settings about the input/output paths used in your application. All paths only need to be strings.
  They will be run through `path.join` for you.

* **paths.app** _String_ **app**

  The application folder relative to the _webpack.conf.js_ location.

* **paths.build** _String_ **build**

  The build folder where the bundles will be placed.

### Testing

All tests are run through [mocha](https://mochajs.org/), with the [chai](http://chaijs.com/)
assertion library.

To run the tests (and the linter - more on that below):

```
$ npm test
```

To run the tests by themselves without the linter:

```
$ npm run test:scripts
```

### Linting

Linting is done via [eslint](http://eslint.org/) on the
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) configuration.

Linting can be run together with the tests with:

```
$ npm test
```

To run linting alone without the tests:

```
$ npm run lint
```
