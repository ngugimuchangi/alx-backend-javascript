/* eslint no-underscore-dangle: 0 */ // ---> OFF
/* Represents Car object */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }

  static get [Symbol.species]() {
    return this;
  }
}
