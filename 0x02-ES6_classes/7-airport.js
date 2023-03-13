/* eslint no-underscore-dangle: 0 */ // ---> OFF

/* Represents Airport object */
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Get airport's name.
   * @returns {String} - airport's name.
   */
  get name() {
    return this.__name;
  }

  /**
   * Gets airport's code.
   * @returns {String} - airports code.
   */
  get code() {
    return this._code;
  }

  /**
   * Set value for _name.
   * @param {String} airportName - airport's name.
   */
  set name(airportName) {
    if (typeof airportName !== 'string') {
      throw new TypeError('name must be a string.');
    }
    this._name = airportName;
  }

  /**
   * Set value for _code.
   * @param {String} airportCode - airport's code.
   */
  set code(airportCode) {
    if (typeof airportCode !== 'string') {
      throw new TypeError('code must be a string.');
    }
    this._code = airportCode;
  }

  /**
   * String tag method
   * @returns {String} - airport instance's code.
   */
  get [Symbol.toStringTag]() {
    return this.code;
  }
}
