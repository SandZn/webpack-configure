const buildObjectWithKeyValue = key => value => ({ [key]: value });
const mergeObjects = originalObject => newObject => Object.assign({}, originalObject, newObject);

module.exports = { buildObjectWithKeyValue, mergeObjects };
