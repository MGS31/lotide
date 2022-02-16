# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mgs31/lotide`

**Require it:**

`const _ = require('@mgs31/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Return the first element in an array.
* `tail(arr)`: Return all BUT the first element in an array.
* `middle(arr)`: Return an array with only the middle element(s).
* `assertArraysEqual(actual, expected)`: Printing a series of sucess / failure messages to the console, detailing if two arrays are equal.
* `assertEqual(actual, expected)`: Print a series of success / failure messages to the console, detailing behaviour of functions.
* `eqArrays(actual, expected)`: Compare two arrays for a perfect match.
* `eqObjects(object1, object2)`: Returns true if both objects have identical keys with identical values.
* `assertObjectsEqual(actual, expected)`: Takes in two objects and log an appropriate message to the console.
* `countLetters(word)`: Reviews a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: Reviews a collection of items and return counts for a specific subset of those items.
* `findKey(obj, fn)`: Takes in an object and a callback. Reviews the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue(obj, val)`: Scan an object and return the first key which contains the given value.
* `flatten(arr)`: Given an array with nested arrays it will return a single-level array.
* `map(arr, callback)`: Reviews to arguments (and array and a callback function) which will return a new array based on the callback function.
* `takeUntil(arr, fn)`: Return a slice of the array with elements taken from the beginning.
* `without(arr, itemsToRemove)`: Removes specified value(s) from a desired array.
* `letterPositions(word)`: Return all the indices (zero-based positions) in the string where each character is found.
