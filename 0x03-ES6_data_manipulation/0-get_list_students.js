/**
 * Function that creates array of object
 * @returns {Array} - array of objects with
 *                    attributes id, firstName,
 *                    location
 */

export default function getListStudents() {
  const studentOne = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const studentTwo = { id: 2, firstName: 'James', location: 'Columbia' };
  const studentThree = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  return Array.of(studentOne, studentTwo, studentThree);
}
