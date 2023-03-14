/* eslint no-underscore-dangle: 0 */ // ---> OFF
/**
 * Simple class HolbertonCourse representing
 * a course details
 */
export default class HolbertonCourse {
  /**
   * Create new instance of HolbertonCourse
   * @param {String}  name     - The name of the class
   * @param {Number}  length   - The duration of the class
   * @param {Array}   students - Name of students in the class
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* Getters */
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  /* Setters */
  set name(name) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    if (students.some((element) => typeof element !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
