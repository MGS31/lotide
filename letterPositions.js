// loop through the sentence
// return each letter in the string as a key in the results object
// for each key input an array that counts the indecs of the corrisponding key
// return results

const letterPositions = (sentence) => {
  // start with a blank object to push the final results to.
  const results = {};
  // a simple for loop checking the length of the input sentence and iterating over each element of the string.
  for (let i = 0; i < sentence.length; i++) {
    // if the element of the sentance is already in the new object I had a .push added the index using the spread opperator.
    // the spread opperator is ensuring the correct functionality it happening to remove and nested loops for arrays with multiple index.
    // I walked through this with @b1u3too to help me understand more and confirm it worked.
    if (results[sentence[i]]) {
      results[sentence[i]].push(...[i]);
    } else {
      // if the index of the sentance is not seen it's added as a specified index to the object.
      results[sentence[i]] = [i];
    }
  }
  // to ensure the index is counted correctly but we avoid any spaces I used a delete results [' '] call to remove it AFTER the loop.
  // therefore the function will account for the correct index and add the specified details to the results object.
  // but the spaces won't be shown in the final output.
  delete results[' '];
  return results;
};

module.exports = letterPositions;