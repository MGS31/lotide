const assertEqual = require('../assertEqual');
const eqObject = require('../eqObjects');

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };

assertEqual(eqObject(ab,ba), true);

const abc = { a: "1" , b: "2" , c: "3" };
assertEqual(eqObject(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObject(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObject(cd, cd2), false);