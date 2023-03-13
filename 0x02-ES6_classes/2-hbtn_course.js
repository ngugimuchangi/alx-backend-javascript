/* eslint no-underscore-dangle: 0 */ // ---> OFF
/**
 * Simple class HolbertonCourse representing
 * a course details
 */
export default class HolbertonCourse {
  /**
   * Create a HolbertonCourse
   * @param {String}  name      The name of the class
   * @param {Number}  length    The duration of the class
   * @param {Array}   students  Name of students in the class
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Set value for _name
   * @param name {String} New course name
   */
  set name(name) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._name = name;
  }

  /**
   * Set value for _length
   * @param {Number} length New course length value
   */
  set length(length) {
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    this._length = length;
  }

  /**
   * Set students value
   * @param {Array} students New value of students
   */
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    if (students.some((element) => typeof element !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  /**
   * Get course name
   * @returns {String} The value of _name
   */
  get name() {
    return this._name;
  }

  /**
   * Get course length
   * @returns {Number} The value of _length
   */
  get length() {
    return this._length;
  }

  /**
   * Get value of _students
   * @return {Array} The value of _students
   */
  get students() {
    return this._students;
  }
}
