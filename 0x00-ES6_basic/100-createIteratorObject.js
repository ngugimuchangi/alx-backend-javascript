export default function createIteratorObject(report) {
  const departments = report.allEmployees;
  let employees = [];
  for (const dept of Object.keys(departments)) {
    employees = [...employees, ...departments[dept]];
  }
  return employees[Symbol.iterator]();
}
