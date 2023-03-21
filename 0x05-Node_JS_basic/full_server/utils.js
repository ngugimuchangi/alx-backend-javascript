import { readFile } from 'fs';

/**
 * Asynchronously reads csv database containing students info, parses
 * info in the db and return promise.
 * @param   {string}  db - database.
 * @returns {promise}    - resolves with object with list of students.
 *                       - rejects when error is encountered in file read.
 */
export default function readDatabase(db) {
  return new Promise((resolve, reject) => {
    readFile(db, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const courseInfo = {};
        let students = data.split('\n');
        students = students.splice(1, students.length - 1);
        students.forEach((student) => {
          const studentData = student.split(',');
          const field = studentData[3];
          const firstName = studentData[0];
          if (field in courseInfo) courseInfo[field].push(firstName);
          else courseInfo[field] = [firstName];
        });
        resolve(courseInfo);
      }
    });
  });
}
