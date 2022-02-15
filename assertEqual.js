const assertEqual = (actual, expected) => {
  // with the help of a fellow cohort @Artem I was able to refactor this code using the terinary opperator formats.
  // essentially if actual === expected and its true it prints the first string if false it prints the second string. the "?" verifys the if check and the ":"
  // provides the outcome if the comparrison is false.
  return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;

