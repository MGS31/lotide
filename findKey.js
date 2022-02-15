const assertEqual = require('./assertEqual');

const findKey = function(obj, fn) {
  // simple function using an object.entries higher order function (insight on this was provided by a mentor)
  for (const [key, val] of Object.entries(obj)) {
    // the loop is now breaking the object into keys and values
    if (fn(val)) {
      // since we have the keys and values broken out we can pass the value against the input callback variable.
      // if the callback function is returned true we return the key being looked for.
      return key;
    }
  }
  // if the callback function returns false we return undefined.
  return undefined;
};

module.exports = findKey;



