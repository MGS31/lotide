
const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#Flatten', () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3,4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3,4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, 2, 3, 4, 5, 6, 7, 8] for [1, [2], [3,4], 5, [6, 7, [8]]]", () => {
    assert.deepEqual(flatten([1, [2], [3,4], 5, [6, 7], [8]]), [1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("returns ['Lighthouse', 'Labs', 'Hello'] for ['Lighthouse', ['Labs', 'Hello']]", () => {
    assert.deepEqual(flatten(['Lighthouse', ['Labs', 'Hello']]), ['Lighthouse', 'Labs', 'Hello']);
  });
  it("returns ['John', 'Jacob', 'Smith'] for [['John'],['Jacob'],['Smith']]", () => {
    assert.deepEqual(flatten([['John'],['Jacob'],['Smith']]), ['John', 'Jacob', 'Smith']);
  });
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3,4], 5, [6]]", () => {
    assert.notDeepEqual(flatten([1, 2, [3,4], 5, [6]]), [1, 2, 3, 4, [5], [6]]);
  });
});