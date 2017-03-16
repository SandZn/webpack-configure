const addToEmptyArray = item => [item];
const arrayFromFunctions = (...functions) => configuration =>
  functions.reduce((accumulator, current) => [...accumulator, ...current(configuration)], []);

module.exports = { addToEmptyArray, arrayFromFunctions };
