/**
 * sendPaymentRequestToAPi method test suite.
 */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToAPi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('should ensure Utils.calculate is called and with the right args', function() {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(console, 'log');
    stub.withArgs('SUM').returns(10);
    sendPaymentRequestToAPi(100, 20);
    expect(stub.calledOnce).to.equal(true);
    expect(stub.calledWith('SUM', 100, 20)).to.equal(true);
    expect(spy.calledWith('The total is: 10')).to.equal(true);
    stub.restore();
    spy.restore();
  });
});
