/* eslint no-underscore-dangle: 0 */ // ---> OFF

/* Represents Airport object */
export default class Airport {
  /**
   * Creates new instance of Airport.
   * @param {String} name - airport's name.
   * @param {String} code - airport's code.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * String tag method
   * @returns {String} - airport instance's code.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
