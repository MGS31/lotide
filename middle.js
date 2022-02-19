// needs to loop through an array to find the length
// if the length is 2 elements or less return a blank array
// if the array has an odd number for the .length return the exact middle
// if the array has an even number return the two middle elements.

const middle = (arr) => {
  // starting with a blank array as well as the length of the array as specified variables.
  let result = [];
  let length = arr.length;
  // checking the odd and even mid points as two other needed variables.
  // math.floor rounds the number down to the closest whole number.
  // the length of the array - 1 and / 2 is how you get th odd mid point.
  // the length of the array / 2 is how you get the even mid point.
  const oddMid = arr[Math.floor((length - 1) / 2)];
  const evenMid = arr[Math.floor((length) / 2)];
  // I specified a check to ensure the length is greater than 3
  if (length < 3) {
    // if so it simply returns the result which is a blank array as there is no mid point.
    return result;
    // checking if the length is divisble by 2 being false
  } else if (length % 2 === 1) {
    // if it is meaning it's not even we return the results array with the oddmid number shown.
    result.push(oddMid);
  } else if (length % 2 === 0) {
    // if the length is divisable by 2
    // we return both the odd and even mid points to capture but the middles of the array as even would have 2 middle point.
    result.push(oddMid);
    result.push(evenMid);
  } else {
    // if the array is blank we return undefined.
    return "undefined";
  }
  //if all else is fine it returns the results.
  return result;
};

module.exports = middle;

// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
// middle([1, 2]); // => []
// middle([1]); // => []
// middle([1, 2, 3, 4, 5, 6, 7, 8]); // => [4, 5]

// want to give credit to @lexico4real who helped me sort out my assertArrays tests to ensure they were working! He also helped me refactor my code to be better!
