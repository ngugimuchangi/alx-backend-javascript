const fs = require('fs');

/**
 * Reads CSV file asynchronously, parses the data and
 * prints it to stdout.
 * @param {string} dbPath - path to csv file.
 */
function countStudents(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (error, data) => {
      if (!error) {
        let students = data.split('\n');
        students = students.slice(1, students.length - 1);
        const courses = new Map();

        // Parse CSV data creating a map of courseData objects.
        students.forEach((student) => {
          const studentData = student.split(',');
          const firstName = studentData[0];
          const field = studentData[3];
          if (courses.has(field)) {
            courses.get(field).students.push(firstName);
            courses.get(field).count += 1;
          } else {
            courses.set(field, { students: [firstName], count: 1 });
          }
        });

        // Display information from map
        console.log(`Number of students: ${students.length}`);
        courses.forEach((courseData, course) => {
          console.log(`Number of students in ${course}: ${courseData.count}. List: ${courseData.students.join(', ')}`);
        });
        resolve();
      }
      reject(Error('Cannot load the database'));
    });
  });
}

module.exports = countStudents;
