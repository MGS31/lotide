const tail = (array) => {
  // simple variable checking for the array slicing the elements from the first index onward.
  const sum = array.slice(1);
  // this returns all but the first index.
  // it also dosen't effect the original array.
  return sum;
};

module.exports = tail;
// adding a refernce to the help from @cangoman who assisted as a mentor on this!