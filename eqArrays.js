// adding credit for @matymcleod who helped me work through this problem!! He's a great mentor!
const assertEqual = require('./assertEqual');

const eqArrays = (actual, expected) => {
  // simple for loop to go through the expected arrays value
  for (let i = 0; i < actual.length; i++) {
    // this loop will then  compare the values of index actual versions index epxected as well as their lengths to see if they don't math.
    if (actual[i] !== expected[i] || actual.length !== expected.length) {
      // if they don't it returns false
      return false;
    }
  }
  // if none of the false params are met it returns true!
  return true;
};

module.exports = eqArrays;


