const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const results1 = letterPositions('hello');

assertArraysEqual(results1["h"], [0]);
assertArraysEqual(results1["e"], [1]);
assertArraysEqual(results1["l"], [2, 3]);
assertArraysEqual(results1["o"], [4]);