interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
    return `${firstName[0]} ${lastName}`;
}

class StudentClass {
 constructor (public firsName: string, public lastName: string) {}

 workOnHomework(): string {
    return 'Currently working';
 }

 displayName(): string {
    return this.firsName;
 }
}

interface IStudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
