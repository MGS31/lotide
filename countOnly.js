const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

//allItems: an array of strings that we need to loop through
// itemsToCount: an object specifying what to count

const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (results[item]) {
      results[item] += 1;
      console.log("Test 1", results[item]);
    } else {
      results[item] = 1;
    }
  }

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

const result1 = countOnly(firstNames, {"Jason" : true, "Karima": true, "Fang" : true, "Agouhanna" : false });

console.log(result1);

//assertEqual(result1["Jason"], 1);
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);