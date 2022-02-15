const assertEqual = require('../assertEqual');
const head = require('../head');

const assert = require('chai').assert;

describe("#Head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
  it("retruns '5' for ['5']", () => {
    assert.strictEqual(head(['5']),'5');
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7,]),5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("returns 5 for [6,6,7]", () => {
    assert.notStrictEqual(head([6,6,7]), 5);
  });
  it("returns 5 for []", () => {
    assert.notStrictEqual(head([]), 5);
  });
  it("returns 7 for [5]", () => {
    assert.notStrictEqual(head([5]),7);
  });
});