const addObjectProperty = (originalObject) =>
  (newObject) => Object.assign({}, originalObject, newObject);

module.exports = { addObjectProperty };
