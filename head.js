const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected} `);
 };

const head = function(array) {
  if (array !== []) {
  return array[0];
  } else {
    return "undefined";
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,6,7]), 5);
assertEqual(head([]), 5);
assertEqual(head([7]), 5);