const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected} `);
};

const tail = (array) => {
  // simple variable checking for the array slicing the elements from the first index onward.
  const sum = array.slice(1);
  // this returns all but the first index.
  // it also dosen't effect the original array.
  return sum;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], ["Lighthouse", "Labs"][0]);
assertEqual(result[1], ["Lighthouse", "Labs"][1]);
assertEqual(result.length, 2);

const resultTo = tail([3, 2, 1]);
assertEqual(resultTo[0], [2, 1][0]);
assertEqual(resultTo[1], [2, 1][1]);

const words = ["Yo Yo", "Lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3);
