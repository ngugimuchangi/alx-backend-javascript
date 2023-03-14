/* eslint no-underscore-dangle: 0 */ // ---> OFF

/* Represent Holberton class object */
export default class HolbertonClass {
  /**
   * Creates Holberton class instance
   * @param {Number} size     - class size.
   * @param {String} location - class location.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](primitive) {
    if (primitive === 'number') return this.size;
    return this._location;
  }
}
