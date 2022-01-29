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

//Implement without which will return a subset of a given array, removing unwanted elements.
//This function should take in a source array and a itemsToRemove array. 
//It should return a new array 
//New Array should only have those elements from the source that are not present in the itemsToRemove array.

const without = (arr1, itemsToRemove) => {
  let newArr = [];
  for (let y = 0; y < arr1.length; y++){
    newArr.push(arr1[y]);
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice([i], 1); 
      }
    } 
  }
  return newArr;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

assertArraysEqual((without([1, 2, 3], [1])), [2,3]) // => True
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), [1, 2]) // => False