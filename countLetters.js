const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

// loop through each element of a string
// print the unique elements to a object
// for each unique element have it showcase a counter

const countLetters = (words) => {
  let result = {};
  let noSpace = words.trim(' ');
  for (let i = 0; i < noSpace.length; i++) {
    if (result[noSpace[i]]) {
      result[noSpace[i]] += 1;
    } else if (noSpace[i] === ' ') {
      result[noSpace[i]];
    } else {
      result[noSpace[i]] = 1;
    }
  }
  return result;
};

console.log(countLetters("password"));
console.log(countLetters("Lighthouse Labs House Lights"));

const result1 = countLetters("password");

console.log(result1);

assertEqual(result1["p"], 1);
assertEqual(result1["w"], 1);
assertEqual(result1["s"], 2);
assertEqual(result1["z"], undefined);
assertEqual(result1["d"], 1);
assertEqual(result1["a"], 3);