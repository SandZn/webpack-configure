# webpack-configure
[![Build Status](https://travis-ci.org/hvolschenk/webpack-configure.svg?branch=master)](https://travis-ci.org/hvolschenk/webpack-configure) [![Coverage Status](https://coveralls.io/repos/github/hvolschenk/webpack-configure/badge.svg?branch=master)](https://coveralls.io/github/hvolschenk/webpack-configure?branch=master)

A webpack config file builder.

### Setup

Add the **webpack-configure** package to your application via npm.

```
$ npm i -D webpack-configure
```

### Usage

Use **webpack-configure** inside the _webpack.config.js_ file to generate the config for you:

```
const webpackConfigure = require('webpack-configure');

module.exports = webpackConfigure();
```

##### Options

A list of options can be passed to `webpackConfigure()`, they are all optional:

Name                 | Type      | Default        | Description
---------------------|-----------|----------------|----------------------------------------------------
build.namedModules   | _Boolean_ | **true**       | Enables the NamedModules plugin
build.vendor         | _Boolean_ | **false**      | Creates a vendor bundle build
devServer.hot        | _Boolean_ | **true**       | Enables hot module reload on the development server
devServer.isEnabled  | _Boolean_ | **true**       | Adds `webpack-dev-server` as a development server
devServer.logLevel   | _String_  | **error**      | The log level for `webpack-dev-server`
devServer.port       | _Integer_ | **2222**       | The port that `webpack-dev-server` will listen on
entry.app            | _String_  | **index.jsx**  | The main entry file into the application
entry.vendor         | _String_  | **vendor.js**  | The main entry file into the vendor build
html.isEnabled       | _Boolean_ | **true**       | Whether an html template must be used
html.template        | _String_  | **index.html** | The location of the html template file
languages.css        | _Boolean_ | **true**       | Whether CSS is used in the application
languages.javascript | _Boolean_ | **true**       | Whether JavaScript is used in the application
languages.jsx        | _Boolean_ | **true**       | Whether JSX is used in the application
languages.sass       | _Boolean_ | **true**       | Whether Sass is used in the application
output.app           | _String_  | **bundle.js**  | The name of the output bundle of the application
output.vendor        | _String_  | **vendor.js**  | The name of the output file of the vendor bundle
packages.npm         | _Boolean_ | **true**       | Whether npm is used to install packages in the application
paths.app            | _String_  | **app**        | The application folder location
paths.build          | _String_  | **build**      | The build folder location

---------------
## Contributing

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
