const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

// scan object with a for in loop
// Loop should take into account both object and key value
// should return the first key which contains the value
// if no key is found it should return undefined

// const findKeyByValueAlt = (object, value) => {
//   Object.keys(object).forEach((key) => {
//     if (object[key] === value) {
//       return key;
//     }
//   });
//   return undefined;
// };

const findKeyByValue = function(object, value) {
  // using a for in loop to bring the keys from the requested object
  for (const key in object) {
    // now if the value of the specified objects key is equal to the input value
    if (object[key] === value) {
      // we return the key asscoaited to that value using the for in loop from earlier.
      return key;
    }
  }
  // if the check returns false return undefined.
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const test = function(obj, val) {
//   for (const [key, value] of Object.entries(obj)) {
//     if (value === val) {
//       return key;
//     }
//   }
//   return undefined;
// };

// console.log(test(bestTVShowsByGenre, "The Wire"));