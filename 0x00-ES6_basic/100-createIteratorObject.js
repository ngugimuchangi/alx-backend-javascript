export default function createIteratorObject(report) {
  report[Symbol.iterator] = function() {
    let departments = Object.keys(report.allEmployees)
  }
}
