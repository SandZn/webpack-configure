const compose = (...functions) =>
  value => functions.reduce((accumulator, current) => current(accumulator), value);
const identity = compose();

module.exports = { compose, identity };
