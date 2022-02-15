const tail = require('../tail');
const assert = require('chai').assert;

describe('#Tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello,'Lighthouse,'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns ['Labs'] for ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Lighthouse', 'Labs']), ['Labs']);
  });
  it("returns [2, 1] for [3,2,1]", () => {
    assert.deepEqual(tail([3,2,1]), [2,1]);
  });
  it("returns [1] for [2,1]", () => {
    assert.deepEqual(tail([2,1]), [1]);
  });
  it("returns [3,4,5] for [4,5,6,2,3] ", () => {
    assert.notDeepEqual(tail([4,5,6,2,3]), [3,4,5]);
  });
  it("returns 3 for [1,2,3].length", () => {
    assert.strictEqual([1,2,3].length, 3);
  })
});