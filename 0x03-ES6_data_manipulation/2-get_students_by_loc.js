/**
 * Filters list of students by their location
 * @param   {Array}  listOfStudents - list of students
 * @param   {String} city           - filter parameter
 * @returns {Array}                 - list of students from passed city
 */
export default function getStudentsByLocation(listOfStudents, city) {
  return listOfStudents.filter((student) => student.location === city);
}
