import Currency from './3-currency';

/* eslint no-underscore-dangle: 0 */ // ---> OFF
/* Represents Price object */
export default class Pricing {
  /**
   * Class constructor
   * @param {Number}    amount    - Cost of product.
   * @param {Currency}  currency  - Currency object.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Get amount
   * @returns {Number} - The value of _amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Get currency
   * @returns {Currency} - The value of _currency.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set amount
   * @param {Number} amount - New value for _amount.
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number.');
    }
    if (amount < 0) {
      throw Error('Amount must be greater than zero.');
    }
    this._amount = amount;
  }

  /**
   * Set currency
   * @param {Currency} priceCurrency - New value for _currency.
   */
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
