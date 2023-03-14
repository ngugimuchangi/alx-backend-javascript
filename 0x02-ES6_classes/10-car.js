/* eslint no-underscore-dangle: 0 */ // ---> OFF
/* Represents Car object */
export default class Car {
  /**
   * Create new Car instance
   * @param {*} brand - Car's brand
   * @param {*} motor - Car's motor.
   * @param {*} color - Car's color.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
