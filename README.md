# webpack-config-builder

A webpack config file builder.

### Setup

Add the **webpack-config-builder** package to your application via npm

```
$ npm i -D webpack-config-builder
```

### Usage

Use **webpack-config-builder** inside your _webpack.config.js_ file to generate the config for you:

```
const webpackConfigBuilder = require('webpack-config-builder');

module.exports = webpackConfigBuilder();
```

##### Options

A list of options can be passed to `webpackConfigBuilder()`, they are all optional:

* { application } _Object_

  Settings about the languages and frameworks used in this project.

* { application.languages } _Object_

  A list of languages (or dialects) used in your application.

* { application.languages.javascript } _Boolean_ **true**

  Whether there is javascript used in your application. This will enable the babel loader for _.js_
  files.

* { application.languages.jsx } _Boolean_ **true**

  Whether [JSX](https://jsx.github.io/) is used in your application. This will enable the babel
  loader for _.jsx_ files.

* { application.packages } _Object_

  The package installer(s) used in your application.

* { application.packages.npm } _Boolean_ **true**

  Whether [npm](https://www.npmjs.com/) is used as a dependency management tool in your application.
  This will resolve the _node_modules_ folder so installed packages can be imported correctly.

* { build } _Object_

  Settings about what type of build is to be produced.

* { build.vendor } _Boolean_ **false**

  Whether the build is to produce a vendor bundle. _If this option is selected only the vendor
  bundle will be created and not the application bundle._

* { files } _Object_

  Settings about the files to be used/created.

* { files.bundle } _String_ **bundle.js**

  The name of the bundle file to be produced.

* { files.entry } _String_ **index.jsx**

  The entry-point into the application. This file is relative to the path provided in _{ path.app }_ (Described below).

* { paths } _Object_

  Settings about the input/output paths used in your application. All paths only need to be strings.
  They will be run through `path.join` for you.

* { paths.app } _String_ **app**

  The application folder relative to the _webpack.conf.js_ location.

* { paths.build } _String_ **build**

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
