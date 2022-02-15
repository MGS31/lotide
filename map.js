const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Our map function will take in two arguments:
//    An array to map
//    A callback function
// The map function will return a new array based on the results of the callback function.

const map = function(array, callback) {
  // starting with the classic blank array.
  const result = [];
  // followed by a simple for of loop to specify the different elements of the array.
  for (let item of array) {
    // a push is used to push the elements to the results array which uses a specified call back function on the item.
    // the callback function is included within the functions paramaters.
    result.push(callback(item));
  }
  // results array is returned.
  return result;
};

module.exports = map;