/* eslint no-underscore-dangle: 0 */ // ---> OFF
/* Currency class */
export default class Currency {
  /**
   * Creates new instance of Currency.
   * @param {String} code - Currency code.
   * @param {String} name - Currency name.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /* Getters */
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  /* Setters */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  /**
   * Set currency's name
   * @param {String} name - New value for _name.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Display full currency details
   * @returns {String} - Concatenated string of currency's_name and _code values
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
