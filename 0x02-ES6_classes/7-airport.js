/* eslint no-underscore-dangle: 0 */ // ---> OFF

/* Represents Airport object */
export default class Airport {
  /**
   * Creates new instance of Airport.
   * @param {String} name - airport's name.
   * @param {String} code - airport's code.
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /** Getters */
  get name() {
    return this.__name;
  }

  get code() {
    return this._code;
  }

  /* Setters */
  set name(airportName) {
    if (typeof airportName !== 'string') {
      throw new TypeError('name must be a string.');
    }
    this._name = airportName;
  }

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
