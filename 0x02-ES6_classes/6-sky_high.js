/* eslint no-underscore-dangle: 0 */ // ---> OFF
import Building from './5-building';

/**
 * Represents SkyHighBuilding object
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates new SkyHighBuilding object.
   * @param {Number} sqft - Building's size in sqft.
   * @param {Number} floor - Number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Get floors
   * @returns {Number} - The value of _floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Set floors
   * @param {Number} numOfFloors - The new value of _floors
   */
  set floors(numOfFloors) {
    if (typeof numOfFloors !== 'number') {
      throw new TypeError('floors must be a number.');
    }
    this._floors = numOfFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
