// scan object with a for in loop
// Loop should take into account both object and key value
// should return the first key which contains the value
// if no key is found it should return undefined

//@webxteria helped me understand why my loop was breaking and I was able to refactor and complete the assisgnment.
// he also showed me the Object.entries method to destructure an object and get its values more easily!

// I worked on this code with @rachelpr!
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

module.exports = findKeyByValue;