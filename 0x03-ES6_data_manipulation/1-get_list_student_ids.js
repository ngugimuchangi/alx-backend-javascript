/**
 * Creates a list of student ids from a list of student objects
 * @param   {Array} listOfStudents - An array of student objects
 * @returns {Array}                - Array of students ids from listOfStudents
 */
export default function getListStudentsIds(listOfStudents) {
  if (Array.isArray(listOfStudents)) {
    return listOfStudents.map((student) => student.id);
  }
  return [];
}
