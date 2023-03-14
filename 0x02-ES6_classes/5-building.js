/* eslint no-underscore-dangle: 0 */ // ---> OFF

/**
 * Abstract class
 * Represents Building object */
export default class Building {
  /**
   * Creates new instance of Building.
   * @param {Number} sqft - Building's size.
   */
  constructor(sqft) {
    if (new.target !== Building
      && new.target.prototype.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  /* Getter */
  get sqft() {
    return this._sqft;
  }

  /* Setter */
  set sqft(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number.');
    }
    this._sqft = size;
  }
}
