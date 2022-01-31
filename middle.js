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

// needs to loop through an array to find the length
// if the length is 2 elements or less return a blank array
// if the array has an odd number for the .length return the exact middle
// if the array has an even number return the two middle elements.

const middle = (arr) => {
  let result = [];
  let length = arr.length;
  const oddMid = arr[Math.floor((length - 1) / 2)];
  const evenMid = arr[Math.floor((length) / 2)];
  if (length < 3) {
    return result;
  } else if (length % 2 === 1) {
    result.push(oddMid);
  } else if (length % 2 === 0) {
    result.push(oddMid);
    result.push(evenMid);
  } else {
    return "undefined";
  }
  return result;
};

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2]); // => []
middle([1]); // => []
middle([1, 2, 3, 4, 5, 6, 7, 8]); // => [4, 5]


assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 3]);
assertArraysEqual(middle([2]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);