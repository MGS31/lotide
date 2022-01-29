const { array } = require("yargs");

const assertArraysEqual = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i] || actual.length !== expected.length) {
      return console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

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

const without = (array1, array2) => {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      array3 = array1.slice(array2[i])
      console.log("this is the if outcome", array3);
      break
    }
  }
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]