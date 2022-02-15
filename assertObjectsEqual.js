const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObject = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  // here I am adding a check if it's a "util" per the course guildlines.
  const inspect = require('util').inspect;
  if (eqObject(actual, expected)) {
    // if the check is true print:
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    // if the check is false print:
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;