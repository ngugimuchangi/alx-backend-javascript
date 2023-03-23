/**
 * 0-calculus.js.calculateNumber test suite
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber simple test suite', function() {
  describe('#Add two numbers', function() {
    it('should round positive numbers', function() {
      assert.equal(calculateNumber(1, 3), 4);
      assert.equal(calculateNumber(1, 3.7), 5);
      assert.equal(calculateNumber(1.2, 3.7), 5);
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it('should round round negative numbers', function() {
      assert.equal(calculateNumber(-1, 3), 2);
      assert.equal(calculateNumber(-1.6, 3), 1);
      assert.equal(calculateNumber(-1.6, -3), -5);
      assert.equal(calculateNumber(-1.6, -3.6), -6);
    });
  });
});
