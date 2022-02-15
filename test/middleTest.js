const middle = require('../middle');
const assert = require('chai').assert;

describe('#Middle', () => {
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3,]), [2]);
  });
  it("returns [4[ for [1,2,3,4,5]", () => {
    assert.notDeepEqual(middle([1,2,3,4,5]), [4]);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it("returns [3,3] for [1,2,3,4,5,6]", () => {
    assert.notDeepEqual(middle([1,2,3,4,5,6]), [3,3]);
  });
  it("returns [] for [2]", () => {
    assert.notDeepEqual(middle([2]), [2]);
  });
  it("returns [4,5] for [1,2,3,4,5,6,7,8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
});