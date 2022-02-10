// need to credit @GideonBrasil for his excellent help and patiences as a mentor, He did a great job explaining what we were doing as I worked through the code.

const eqArrays = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i] || actual.length !== expected.length) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Implement without which will return a subset of a given array, removing unwanted elements. --- done
//This function should take in a source array and a itemsToRemove array. --- done
//It should return a new array  --- done
//New Array should only have those elements from the source that are not present in the itemsToRemove array. --- done

const without = (arr1, itemsToRemove) => {
  // starting with a blank array
  let newArr = [];
  // we do a simple for loop on the array being input in the function param.
  for (let y = 0; y < arr1.length; y++) {
    // we can then push the y index from the input array to the blank array.
    newArr.push(arr1 [y]);
  }
  //at this point we then need to loop through the values of our newArr as well as the items to remove.
  for (let i = 0; i < newArr.length; i++) {
    // this looks at the new array looping through each element.
    for (let j = 0; j < itemsToRemove.length; j++) {
      // this looks at the second array of items to remove.
      if (newArr[i] === itemsToRemove[j]) {
        // since we are doing a loop of both by the values of the items to remove we can say when they match/
        // splice from the newArr that index and DON'T add anything back (hence the ([i], 1)).
        newArr.splice([i], 1);
      }
    }
  }
  // we then retunr the NewArr that was spliced and are therefore not affecting the original array input so we can use the assert Arrays equal as well.
  return newArr;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

assertArraysEqual((without([1, 2, 3], [1])), [2,3]); // => True
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), [1, 2]); // => False