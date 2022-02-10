// adding credit for @matymcleod who helped me work through this problem!! He's a great mentor!

const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (actual, expected) => {
  // simple for loop to go through the expected arrays value
  for (let i = 0; i < actual.length; i++) {
    // this loop will then  compare the values of index actual versions index epxected as well as their lengths to see if they don't math.
    if (actual[i] !== expected[i] || actual.length !== expected.length) {
      // if they don't it returns false
      return false;
    }
  }
  // if none of the false params are met it returns true!
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

//const eqArrays = (actual, expected) => {
//  actual.forEach((num1, index) => {
//    const num2 = expected[index];
//    console.log(num1, num2);
//  })
//}


