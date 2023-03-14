/* eslint no-underscore-dangle: 0 */ // ---> OFF

/* Represent Holberton class object */
export default class HolbertonClass {
  /**
   * Creates Holberton class instance
   * @param {Number} size     - class size.
   * @param {String} location - class location.
   */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /* Getters */
  get size() {
    return this._size;
  }

  /**
   * Gets class location
   * @returns {String} - value of _location.
   */
  get location() {
    return this._location;
  }

  /* Setters */
  set size(classSize) {
    if (typeof classSize !== 'number') {
      throw new TypeError('size must be a number.');
    }
    this._size = classSize;
  }

  /**
   * Sets location size
   * @param {String} classLocation - class location
   */
  set location(classLocation) {
    if (typeof classLocation !== 'string') {
      throw new TypeError('location must be a string.');
    }
    this._location = classLocation;
  }

  [Symbol.toPrimitive](primitive) {
    if (primitive === 'number') return this.size;
    return this.location;
  }
}
