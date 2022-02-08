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
  // simple comparrison using the eqArrays function call.
  if (eqArrays(actual, expected)) {
    // if it passes and returns true it prints the following
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    // if it failes and returns false it prints the following
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// => false
