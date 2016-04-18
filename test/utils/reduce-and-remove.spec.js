import { expect } from 'chai';

import path from 'path';

const reduceAndRemove = require(path.resolve('./src/utils/reduce-and-remove.js'));

const reduce = function(arr, ...items) {
  return arr.reduce(reduceAndRemove(...items), []);
};

describe('reduceAndRemove', () => {
  it('removes items from 1d array', () => {
    const arr = ['red', 'green'];
    expect(reduce(arr, 'red')).to.deep.equal([
      'green'
    ]);
  });

  it('removes items from 2d array', () => {
    const arr = [
      'red',
      ['red', 'green']
    ];

    expect(reduce(arr, 'red')).to.deep.equal([
      ['green']
    ]);
  });

  it('removes items from 2d array', () => {
    const arr = [
      'red',
      ['red', ['red', 'green']]
    ];

    expect(reduce(arr, 'red')).to.deep.equal([
      [
        ['green']
      ]
    ]);
  });

  describe('multiple items', () => {
    const arr = [
      'red',
      ['red', 'green']
    ];
    it('can remove multiple arguments of items', () => {
      expect(reduce(arr, 'red', 'green')).to.deep.equal([
        []
      ]);
    });
  });
});
