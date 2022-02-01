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


// loop through the sentance
// return each letter in the string as a key in the results object
// for each key input an array that counts the indecs of the corrisponding key
// return results

const letterPositions = (sentance) => {
  const results = {};
  for (let i = 0; i < sentance.length; i++) {
    if (results[sentance[i]]) {
      results[sentance[i]].push(...[i]);
    } else if (results[sentance[i]] !== ' ') {
      results[sentance[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions('hello'));
console.log(letterPositions('lighthouse in the house'));
const results1 = letterPositions('hello');

//assertArraysEqual(results1["h"], [0]);
//assertArraysEqual(results1["e"], [1]);
//assertArraysEqual(results1["l"], [2, 3]);
//assertArraysEqual(results1[""], [4]);