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
// the callback
// the function will return a "slice of the array with elements taken from the beginning."
// it will keep going until the callback returns a truthy value
// the callback should only be provided one value

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  for (const [index, values ] of array.entries()) if (callback(values)) return array.slice(0, index);
  return array;
};


assertArraysEqual(takeUntil(data1, n => n === -1), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, n => n.length === 1), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data1, n => n === -1), [1, 2, 5, 7, 2, -1]);
assertArraysEqual(takeUntil(data2, n => n.length === 1), ["I've", "been", "to", "Hollywood", ","]);



// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);