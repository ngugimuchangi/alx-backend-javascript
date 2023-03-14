import Currency from './3-currency';

/* eslint no-underscore-dangle: 0 */ // ---> OFF
/* Represents Price object */
export default class Pricing {
  /**
   * Creates new instance of Pricing.
   * @param {Number}    amount    - Cost of product.
   * @param {Currency}  currency  - Currency object.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /* Getters */
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  /* Setters */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number.');
    }
    if (amount < 0) {
      throw Error('Amount must be greater than zero.');
    }
    this._amount = amount;
  }

  set currency(priceCurrency) {
    if (!(priceCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class.');
    }
    this._currency = priceCurrency;
  }

  /**
   * Gets price details in neat string format.
   * @returns - Price object in the format'amount currency_name (currency_code)'.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   *
   * @param {Number} amount
   * @param {Number} conversionRate
   * @returns {Number} - Converted amount.
   */

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion must be a number');
    }
    return amount * conversionRate;
  }
}
