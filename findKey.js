const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(obj, fn) {
  for (const [key, val] of Object.entries(obj)) {
    if (fn(val)) {
      return key;
    }
  }
  return undefined;
};

(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

const rating = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const ab = { a: "1", b: "2", c: "3", d: "2", e: "4"};

assertEqual((findKey(rating, x => x.stars === 2)), "noma");
assertEqual((findKey(rating, x => x.stars === 3)), "Akaleri");
assertEqual((findKey(rating, x => x.stars === 3)), "elBulli");
assertEqual((findKey(ab, x => x === "2")), "b");
assertEqual((findKey(ab, x => x === "2")), "d");
assertEqual((findKey(ab, x => x === "4")), "e");

