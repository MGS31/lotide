const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const num = [ 10, 20, 30, 40, 50 ];

const results1 = map(words, word => word[0]);

const results2 = map(words, word => word.length);

const results3 = map(num, num => num * 2);

const results4 = map(num, num => num / 2);

const results5 = map(words, word => word[2]);

const results6 = map(words, word => word.slice(1));

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // => true
assertArraysEqual(results2, [6, 7, 2, 5, 3]); // => true
assertArraysEqual(results3, [20, 40, 60, 80, 100]); // => true

assertArraysEqual(results4, [20, 40, 60, 80, 100]); // => fail
assertArraysEqual(results5, ["g", "c", "t", "m", "t"]); // => fail
assertArraysEqual(results6, [20, 40, 60, 80, 100]); // => fail