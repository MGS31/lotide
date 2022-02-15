const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');


// console.log(countLetters("password"));
// console.log(countLetters("Lighthouse Labs House Lights"));

const result1 = countLetters("password");

// console.log(result1);

assertEqual(result1["p"], 1);
assertEqual(result1["w"], 1);
assertEqual(result1["s"], 2);
assertEqual(result1["z"], undefined);
assertEqual(result1["d"], 1);
assertEqual(result1["a"], 3);