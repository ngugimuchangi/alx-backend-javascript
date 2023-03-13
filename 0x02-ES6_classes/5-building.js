/* eslint no-underscore-dangle: 0 */ // ---> OFF

/* Represents Building object */
export default class Building {
  /**
   *
   * @param {Number} sqft - Building's size.
   */
  constructor(sqft) {
    if (new.target !== Building
      && new.target.prototype.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  /**
   * Get building's size
   * @returns {Number} - The value of _sqft.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Set sqft
   * @param {Number} size - Build's size.
   */
  set sqft(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number.');
    }
    this._sqft = size;
  }
}
