const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data2, n => n.length === 1), ["I've", "been", "to", "Hollywood"]);

assertArraysEqual(takeUntil(data1, n => n === -1), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, n => n.length === 1), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data1, n => n === -1), [1, 2, 5, 7, 2, -1]);
assertArraysEqual(takeUntil(data2, n => n.length === 1), ["I've", "been", "to", "Hollywood", ","]);