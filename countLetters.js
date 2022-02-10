const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
};

// @nosaoasis was so helpful in walking me through why the specific code from the reading exercise was working. That way I can read and understand exactly what I'm writing!


// loop through each element of a string
// print the unique elements to a object
// for each unique element have it showcase a counter

const countLetters = (words) => {
  // starting I create an empty object, this will be used to return the information at the end of the function.
  let result = {};
  // to ensure there are no spaces I used a .trim on the words (input parameter) and removed the spaces from the string.
  let noSpace = words.trim(' ');
  // next I simply for loop through the string using the noSpace variable and it's length to ensure it checks each part correctly.
  for (let i = 0; i < noSpace.length; i++) {
    // now an if else starts verifying if the initial index of the noSpace is in the results object. If it is the function adds 1.
    if (result[noSpace[i]]) {
      result[noSpace[i]] += 1;
      // if its not in the obejct it checks to see if the index is a space, it then returns the result object
    } else if (noSpace[i] === ' ') {
      result[noSpace[i]];
      // last check is if it's in the object already, if it's not it adds the indexed value of noSpace plus a 1 to the object.
    } else {
      result[noSpace[i]] = 1;
    }
  }
  // returning the final output. the loop from before will go through all aspects of the code ensuring all parts of the string are added.
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