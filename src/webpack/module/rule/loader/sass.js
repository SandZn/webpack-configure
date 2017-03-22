const {
  CONSTANTS,
  getAppPath,
  getSassEntry,
  isSassEntryEnabled,
} = require('../../../../config/config');
const { join } = require('../../../../utils/paths');

const data = configuration =>
  `@import "${join(getAppPath(configuration), getSassEntry(configuration))}"`;
const options = configuration =>
  (isSassEntryEnabled(configuration) ? { data: data(configuration) } : {});

const sass = configuration => ({
  loader: CONSTANTS.LOADER_SASS,
  options: options(configuration),
});

module.exports = sass;
