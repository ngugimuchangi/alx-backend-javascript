/**
 * getPaymentTokenFromAPI test suite
 */
const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  describe('#Async test', function() {
    it('should get response from payment API', function(done) {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.be.an('object')
            .with.property('data', 'Successful response from the API');
        });
      done();
    });
  });
});
