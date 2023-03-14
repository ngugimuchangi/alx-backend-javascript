/* Represents ClassRoom object */
export default class ClassRoom {
  /**
   * Creates new ClassRoom Instance
   * @param {Number} maxStudentsSize
   */
  constructor(maxStudentsSize) {
    // eslint-disable-next-line no-underscore-dangle
    this._maxStudentsSize = maxStudentsSize;
  }
}
