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

// @jcbain I can't thank enough for helping me refactor and walk through my code. He showed me the good and bad from what I
// had originally written as well as why things were working if we did different process.
// he also made sure I was the one working through the problem and it helped so much!!

// return true if both objects have identical keys with identical values
// objects should have the same number of values
// the value of each key in object1 is the same as the value for that same key in the object2
// otherwise you get false

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
