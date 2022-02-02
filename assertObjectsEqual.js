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
  let count = Object.keys(object1).length;
  let count2 = Object.keys(object2).length;
  if (count !== count2) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let result = eqArrays(object1[key], object2[key]);
      if (result === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObject(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "2", d: "3" };

assertObjectsEqual(ab , ba);
assertObjectsEqual(ab , cd);