const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅  Assertion Passed: " + actual + " === " + expected + "");
  } else (console.log("⚠️ ⚠️ ⚠️ Assertion Failed: " + actual + " !== " + expected + ""));
};

assertEqual("lighthouse labs", "Bootcamp");
assertEqual(1,1);
assertEqual("lighthouse labs", "lighthouse labs");
assertEqual("Hello", "Hi");
assertEqual(2022, 2022);
assertEqual(1,6);