import { expect } from 'chai';

import path from 'path';

const isArray = require(path.resolve('./src/utils/is-array.js'));

describe('isArray', () => {
  describe('arrays', () => {
    [
      ['red'],
      [['blue']]
    ].forEach((arr) => {
      it(`defines an array (${arr}) as an array`, () => {
        expect(isArray(arr)).to.be.true;
      });
    });
  });

  describe('non arrays', () => {
    [
      {},
      false,
      null,
      'red'
    ].forEach((item) => {
      it(`defines ${typeof item} as a non-array`, () => {
        expect(isArray(item)).to.be.false;
      });
    });
  });
});
