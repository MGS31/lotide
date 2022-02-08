const eqArrays = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i] || actual.length !== expected.length) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// loop through nested array
// compare each value of both main and neseted arrays
// push only one instance of each value to a new array
// return the new array as single array.

const flatten = (arr) => {
  // starting with a blank array to return the finished code.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // a simple loop through the array.
    if (!Array.isArray(arr[i])) {
      // a mentore mentioned a check for Array.isArray to verify if the value of the loop is actually an array.
      // if it is we then push those values to the new array we set up.
      newArr.push(arr[i]);
    } else {
      // if its not an array we loop through the day the data is looped through and pushed to the new array as well.
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    }
  }
  // once all have been pushed we just push the new array and it results in a flattened arrray.
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]