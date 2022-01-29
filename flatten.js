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
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else { 
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      } 
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]