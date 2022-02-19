// adding credit for @matymcleod who helped me work through this problem!! He's a great mentor!

const eqArrays = (actual, expected) => {
  // checking to see if the arrays are the same length (if not reutnr false)
  if (actual.length !== expected.length) {
    return false;
  }
  // simple for loop to go through the expected arrays value
  for (let i = 0; i < actual.length; i++) {   // this loop will then  compare the values of index actual versions index epxected as well as their lengths to see if they don't math.
    // first checking if the arrays index are the same as well as if the index of the arrays are NOT themsleves nested arrays.
    if (actual[i] !== expected[i] && (!Array.isArray(actual[i]) || !Array.isArray(expected[i]))) {
      // if they don't if neither are true return false
      return false;
    }
    // if they are nested arrays
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      // check to see if eqArrays on the nested arrays themslves do not match
      if (!eqArrays(actual[i], expected[i])) {
        // if they don't then return false!
        return false;
      }
    }
  }
  // if none of the false params are met it returns true!
  return true;
};

module.exports = eqArrays;


