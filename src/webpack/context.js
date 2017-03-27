const { getAppPath } = require('../config/config');
const { compose } = require('../utils/functions');
const { join } = require('../utils/paths');

const context = configuration => compose(getAppPath, join(configuration))(configuration);

module.exports = context;
