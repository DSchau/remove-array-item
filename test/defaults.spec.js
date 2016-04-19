import { expect } from 'chai';

import path from 'path';

const defaults = require(path.resolve('./src/defaults.js'));

describe('defaults', () => {
  it('exposes defaults', () => {
    expect(defaults).to.be.defined;
  });
});
