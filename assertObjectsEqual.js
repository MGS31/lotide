const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i] || actual.length !== expected.length) {
      return false;
    }
  }
  return true;
};

const eqObject = function(object1, object2) {
  //Using a mentors assistance I found I could make two count variables that referred to the length of the specific objects key.
  // this way I could see if the objects were the same length or not, if they don't match it's immediatly false.
  let count = Object.keys(object1).length;
  let count2 = Object.keys(object2).length;
  if (count !== count2) {
    return false;
  }
  // if they are the same length I can loop through the object using a for in loop.
  for (const key in object1) {
    // to account for nested arrays I check to see if either object being checked is an array.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if they are arrays I run the eqArrays function and assign it to a results variable.
      let result = eqArrays(object1[key], object2[key]);
      // if results is false (ie. the comparrison failed) the function will end here and return false.
      // otherwise if true it will head back out and then comparise the objects now that the arrays have been confirmed to be correct.
      if (result === false) {
        return false;
      }
      // here the final check is to see if they don't match, therefore if they don't it's an easy false.
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // if all of the checks to see if a false statment is produced are passed the function will return true.
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // here I am adding a check if it's a "util" per the course guildlines.
  const inspect = require('util').inspect;
  if (eqObject(actual, expected)) {
    // if the check is true print:
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    // if the check is false print:
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "2", d: "3" };

assertObjectsEqual(ab , ba);
assertObjectsEqual(ab , cd);