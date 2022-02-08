const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

//allItems: an array of strings that we need to loop through
// itemsToCount: an object specifying what to count

const countOnly = (allItems, itemsToCount) => {
  // adding a blank object to return the values later.
  const results = {};
  // looping through the provided array of items with a for of loop.
  for (const item of allItems) {
    // starting an if else check to see if the itemsToCount contains the specific item from the array.
    if (itemsToCount[item]) {
      // if it does already, add 1 to the number its counting.
      if (results[item]) {
        results[item] += 1;
        // if it doesn't find it in the final object but they match in the provided object and the first names array, add to the results object with a 1 value.
      } else {
        results[item] = 1;
      }
    }
  }
  // once the loop has gone through all names in the array and compared to the object it returns the final result.
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);