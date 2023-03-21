import readDatabase from '../utils';

/**
 * Student controller class that returns response with
 * students names per course
 */
export default class StudentController {
  /**
   * Queries db for student data and sets it on response object.
   * @param {*} request   - request object.
   * @param {*} response  - response object.
   */
  static getAllStudent(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    const body = ['This is the list of our students'];
    readDatabase('database.csv')
      .then((courseInfo) => {
        for (const course in courseInfo) {
          if (Array.isArray(courseInfo[course])) {
            const students = courseInfo[course];
            body.push(`Number of students in ${course}: ${students.length}. List: ${students.join(', ')}`);
          }
        }
        response.statusCode = 200;
        response.send(body.join('\n'));
      })
      .catch((error) => {
        response.statusCode = 500;
        body.push(error.message);
        response.send(body.join('\n'));
      });
  }

  /**
   * Searches for students by major defined in request query string
   * and sets them on the response object
   * @param {*} request  - request object
   * @param {*} response - response object.
   */
  static getAllStudentByMajor(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase('database.csv')
        .then((courseInfo) => {
          response.statusCode = 200;
          response.send(`List: ${courseInfo[major].join(', ')}`);
        })
        .catch((error) => {
          response.statusCode = 500;
          response.send(error.message);
        });
    }
  }
}
