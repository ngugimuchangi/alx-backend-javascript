/* eslint no-underscore-dangle: 0 */ // ---> OFF
import Building from './5-building';

/**
 * Represents SkyHighBuilding object
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates new  instance of SkyHighBuilding.
   * @param {Number} sqft - Building's size in sqft.
   * @param {Number} floor - Number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /* Get floors */
  get floors() {
    return this._floors;
  }

  /**
   * Creates evacuation message
   * @returns {String} - Evacuation message
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
