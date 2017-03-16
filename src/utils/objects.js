const buildObjectWithKeyValue = (key = 'value') => value => ({ [key]: value });
const mergeObjects = originalObject => newObject => Object.assign({}, originalObject, newObject);
const objectFromFunctions = (...functions) => configuration =>
  functions.reduce((accumulator, current) => Object.assign({}, accumulator,
    { [current.name]: current(configuration) }), {});

module.exports = { buildObjectWithKeyValue, mergeObjects, objectFromFunctions };
