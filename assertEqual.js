const assertEqual = (actual, expected) => {
 return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
 : console.log(`⚠️ ⚠️ ⚠️  Assertion Failed: ${actual} !== ${expected} `);
};

assertEqual("lighthouse labs", "Bootcamp");
assertEqual(1,1);
assertEqual("lighthouse labs", "lighthouse labs");
assertEqual("Hello", "Hi");
assertEqual(2022, 2022);
assertEqual(1,6);
assertEqual([1,2,3],[1,2,3]);
assertEqual([1,2],[1,2,3,]);