const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

assertArraysEqual((without([1, 2, 3], [1])), [2,3]); // => True
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), [1, 2]); // => False