const compose = (...functions) =>
  value => functions.reduce((accumulator, current) => current(accumulator), value) || value;

module.exports = { compose };
