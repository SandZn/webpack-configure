const compose = (...functions) =>
  functions.reduce(
    (accumulator, current) =>
      (...arguments) => accumulator(current.apply(this, arguments)));

module.exports = { compose };
