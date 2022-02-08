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


// loop through the sentence
// return each letter in the string as a key in the results object
// for each key input an array that counts the indecs of the corrisponding key
// return results

const letterPositions = (sentence) => {
  // start with a blank object to push the final results to.
  const results = {};
  // a simple for loop checking the length of the input sentence and iterating over each element of the string.
  for (let i = 0; i < sentence.length; i++) {
    // if the element of the sentance is already in the new object I had a .push added the index using the spread opperator.
    // the spread opperator is ensuring the correct functionality it happening to remove and nested loops for arrays with multiple index.
    if (results[sentence[i]]) {
      results[sentence[i]].push(...[i]);
    } else {
      // if the index of the sentance is not seen it's added as a specified index to the object.
      results[sentence[i]] = [i];
    }
  }
  // to ensure the index is counted correctly but we avoid any spaces I used a delete results [' '] call to remove it AFTER the loop.
  // therefore the function will account for the correct index and add the specified details to the results object.
  // but the spaces won't be shown in the final output.
  delete results[' '];
  return results;
};

console.log(letterPositions('hello'));
console.log(letterPositions('lighthouse in the house'));
const results1 = letterPositions('hello');

assertArraysEqual(results1["h"], [0]);
assertArraysEqual(results1["e"], [1]);
assertArraysEqual(results1["l"], [2, 3]);
assertArraysEqual(results1["o"], [4]);