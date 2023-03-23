/**
 * 0-calculus.js.calculateNumber test suite
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber simple test suite', function() {
  it('should round its arguments and return their sum', function() {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
