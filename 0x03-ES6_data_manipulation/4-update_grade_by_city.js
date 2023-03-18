/**
 *
 * @param   {Array} listOfStudents - list of students
 * @param   {String} city          - location filter parameter
 * @param   {Array} newGrades      - array of grade objects with studentId and grade
 *                                   properties
 * @returns {Array}                - an array of students with updated grades
 */
export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const studentsByCity = listOfStudents.filter((student) => student.location === city);
  const studentByGrades = studentsByCity.map((currentStudent) => {
    const student = currentStudent;
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    if (grade.length === 0) student.grade = 'N/A';
    else student.grade = grade[0].grade;
    return student;
  });
  return studentByGrades;
}
