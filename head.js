const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected} `);
};

const head = function(array) {
  // run a simple check to see if the ray is not a blank array
  if (array !== []) {
    // if it isn't a blank array return the [0] index so it will return the first value.
    return array[0];
  } else {
    // if it is a blank array, return undefined.
    return "undefined";
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,6,7]), 5);
assertEqual(head([]), 5);
assertEqual(head([7]), 5);