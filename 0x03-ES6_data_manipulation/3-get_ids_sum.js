/**
 * Calculates sum of student's id number from a list of students
 * @param   {Array} listOfStudents - list of students
 * @returns {Number}               - sum of student's ids
 */
export default function getStudentsIdSum(listOfStudents) {
  return listOfStudents.reduce((sum, student) => sum + student.id, 0);
}
