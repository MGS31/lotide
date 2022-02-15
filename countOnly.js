const assertEqual = require('./assertEqual');
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

module.exports = countOnly;