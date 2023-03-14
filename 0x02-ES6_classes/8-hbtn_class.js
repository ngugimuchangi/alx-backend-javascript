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

  /**
   *
   * @param {String} primitive - primitive type
   * @returns
   */
  [Symbol.toPrimitive](primitive) {
    if (primitive === 'number') return this._size;
    return this._location;
  }
}
