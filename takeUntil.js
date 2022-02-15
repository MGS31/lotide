const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Function takes in two paramaters:
// The array to work with
// The callback
// The function will return a "slice of the array with elements taken from the beginning."
// It will keep going until the callback returns a truthy value
// The callback should only be provided one value

// const takeUntil = function(array, callback) {
//   for (const [index, values] of array.entries()) if (callback(values)) return array.slice(0, index);
//   return array;
// };

const takeUntil = function(arr, fun) {
  // using a for loop against the length of the array.
  for (let i = 0; i < arr.length; i++) {
    // we can have a call back function equal a specific point we want to slice from.
    if (fun(arr[i])) {
      // in doing so we then slice the [0] index to the index that meets the callback functions specifics.
      return arr.slice(0, [i]);
    }
  }
};

module.exports = takeUntil;