import { expect } from 'chai';

import path from 'path';

const removeArrayItem = require(path.resolve('./src/index.js'));

describe('removeArrayItem', () => {
  const baseArr = [
    'red',
    ['red', 'green', ['red', 'blue']]
  ];
  it('exposes a function', () => {
    expect(removeArrayItem).to.to.be.a('function');
  });

  it('flattens and removes items', () => {
    const arr = [
      ['red'],
      ['red', ['green', ['red', 'blue']]],
      ['red', ['red', ['red']]]
    ];

    expect(removeArrayItem(arr, 'red')).to.deep.equal([
      [['green', ['blue']]]
    ]);
  });
});
