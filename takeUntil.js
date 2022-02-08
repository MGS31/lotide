const eqArrays = (actual, expected) => {
  let isEqual = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i] || actual.length !== expected.length) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function takes in two paramaters:
// The array to work with
// The callback
// The function will return a "slice of the array with elements taken from the beginning."
// It will keep going until the callback returns a truthy value
// The callback should only be provided one value

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// const takeUntil = function(array, callback) {
//   for (const [index, values] of array.entries()) if (callback(values)) return array.slice(0, index);
//   return array;
// };

const takeUntil1 = function(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return arr.slice(0, [i]);
    }
  }
};

console.log(takeUntil1(data1, n => n === -1));
assertArraysEqual(takeUntil1(data2, n => n.length === 1), ["I've", "been", "to", "Hollywood"]);

// assertArraysEqual(takeUntil(data1, n => n === -1), [1, 2, 5, 7, 2]);
// assertArraysEqual(takeUntil(data2, n => n.length === 1), ["I've", "been", "to", "Hollywood"]);
// assertArraysEqual(takeUntil(data1, n => n === -1), [1, 2, 5, 7, 2, -1]);
// assertArraysEqual(takeUntil(data2, n => n.length === 1), ["I've", "been", "to", "Hollywood", ","]);



// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);