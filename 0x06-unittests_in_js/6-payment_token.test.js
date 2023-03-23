/**
 * getPaymentTokenFromAPI test suite
 */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  describe('#Async test', function() {
    
    it('should test response from payment API', function(done) {
      // expect(getPaymentTokenFromAPI(false)).to.equal(undefined);
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.be.an('object')
            .with.property('data', 'Successful response from the API');
          done();
        });
    });
  });
});
