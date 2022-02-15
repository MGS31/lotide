const eqArrays = require('./eqArrays');;

const assertArraysEqual = (actual, expected) => {
  // simple comparrison using the eqArrays function call.
  if (eqArrays(actual, expected)) {
    // if it passes and returns true it prints the following
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    // if it failes and returns false it prints the following
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;