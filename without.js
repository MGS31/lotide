// need to credit @GideonBrasil for his excellent help and patiences as a mentor, He did a great job explaining what we were doing as I worked through the code.

//Implement without which will return a subset of a given array, removing unwanted elements. --- done
//This function should take in a source array and a itemsToRemove array. --- done
//It should return a new array  --- done
//New Array should only have those elements from the source that are not present in the itemsToRemove array. --- done

//refactoring code to work easier.

const without = function (arr1, itemsToRemove) {
  // setting up a new array
  let newArr = [];
  //filtering through with the lovely for of loop of each item of the first array.
  for (const item of arr1) {
    // if the items to remove doesn't include the item from arr1
    if (!itemsToRemove.includes(item)) {
      // push the element to the new array.
      newArr.push(item);
    }
  }
  // return false
  return newArr;
};



module.exports = without;
