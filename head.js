const head = function(array) {
  // run a simple check to see if the ray is not a blank array
  if (array !== []) {
    // if it isn't a blank array return the [0] index so it will return the first value.
    return array[0];
  } else {
    // if it is a blank array, return undefined.
    return "undefined";
  }
};

module.exports = head;