const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], ["Lighthouse", "Labs"][0]);
assertEqual(result[1], ["Lighthouse", "Labs"][1]);
assertEqual(result.length, 2);

const resultTo = tail([3, 2, 1]);
assertEqual(resultTo[0], [2, 1][0]);
assertEqual(resultTo[1], [2, 1][1]);

const words = ["Yo Yo", "Lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3);