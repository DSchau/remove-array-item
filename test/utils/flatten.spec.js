import { expect } from 'chai';

import path from 'path';

const flatten = require(path.resolve('./src/utils/flatten.js'));

const reduce = function(arr) {
  return arr.reduce(flatten, []);
};

describe('flatten', () => {
  const arr = [
    [],
    [[]]
  ];

  it('can flatten an array of empty arrays', () => {
    expect(reduce(arr)).to.deep.equal([]);
  });

  it('leaves non-empty items in place', () => {
    expect(reduce([
      'red',
      [[[]]],
      [[]],
      ['green']
    ])).to.deep.equal([
      'red',
      ['green']
    ]);
  });
});
