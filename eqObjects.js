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

// return true if both objects have identical keys with identical values
// objects should have the same number of values
// the value of each key in object1 is the same as the value for that same key in the object2
// otherwise you get false

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

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };

assertEqual(eqObject(ab,ba), true);

const abc = { a: "1" , b: "2" , c: "3" };
assertEqual(eqObject(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObject(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObject(cd, cd2), false);
