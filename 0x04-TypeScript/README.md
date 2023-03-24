# 0x04. Typescript

## About
- Basic types in Typescript
- Interfaces, classes, functions
- Working with DOM and Typescript
- Generic types
- Using namespaces
- Merging declaration
- Using ambient namespaces to import an external library
- Nominal typing with Typescript

## Tasks
0. Student interface:
    - Accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
    - Cr
    - Files:
        - [task_0/js/main.ts](task_0/js/main.ts)
        - [task_0/package.json](task_0/package.json)
        - [task_0/.eslintrc.js](task_0/.eslintrc.js)
        - [task_0/tsconfig.json](task_0/tsconfig.json)
        - [task_0/webpack.config.js](task_0/webpack.config.js)

1. Teacher interface
    - Has attributes: `firstName(string)` and `lastName(string)` that should only be modifiable when a `Teacher` is first initialized
    - `fullTimeEmployee(boolean)`attribute should always be defined
    - `yearsOfExperience(number)` attribute is optional
    location(string) this attribute should always be defined
    - Can add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute
    - Files:
        - [task_1/js/main.ts](task_1/js/main.ts)
        - [task_1/package.json](task_1/package.json)
        - [task_1/.eslintrc.js](task_1/.eslintrc.js)
        - [task_1/tsconfig.json](task_1/tsconfig.json)
        - [task_1/webpack.config.js](task_1/webpack.config.js)

2. Director Interface
    - Extends `Teacher` interface.
    - Requires attribute `numberOfReports(number)`
    - Files:
        - [task_1/js/main.ts](task_1/js/main.ts)
        - [task_1/package.json](task_1/package.json)
        - [task_1/.eslintrc.js](task_1/.eslintrc.js)
        - [task_1/tsconfig.json](task_1/tsconfig.json)
        - [task_1/webpack.config.js](task_1/webpack.config.js)

3. Annotating functions
    - Function `printTeacher(firstName, lastName)`
    - File:
        - [task_1/js/main.ts](task_1/js/main.ts)

4. TS Classes
    - class`StudentClass`:
    - Constructor accepts `firstName(string)` and `lastName(string)` arguments.
    - Methods: `workOnHomework` and `displayName`
    - Class constructor defined through an interface
    - Class described through an interface
    - File:
        - [task_1/js/main.ts](task_1/js/main.ts)

5. Advanced types
    - Interfaces:
        - `DirectorInterface`
        - `TeacherInterface`
    - Classes:
        - `Director` extends `DirectorInterface`
        - `Teacher` extends `TeacherInterface`
    - Files:
        - [task_2/js/main.ts](task_2/js/main.ts)
        - [task_2/package.json](task_2/package.json)
        - [task_2/.eslintrc.js](task_2/.eslintrc.js)
        - [task_2/tsconfig.json](task_2/tsconfig.json)
        - [task_2/webpack.config.js](task_2/webpack.config.js)

6. Handling unions in functions
    - Functions: `isDirector(employee)` and `executeWork(employee)`
    - File:
        - [task_2/js/main.ts](task_2/js/main.ts)

7. String literal types
    - String literal type `Subjects`:
    - Function `teachClass(todayClass)`
    - File:
        - [task_2/js/main.ts](task_2/js/main.ts)

8. Ambient Namespaces
    - Interface `RowID` and `RowElement`
    - Files:
        - [task_3/js/main.ts](task_3/js/main.ts)
        - [task_3/js/interface.ts](task_3/js/interface.ts)
        - [task_3/js/crud.d.ts](task_3/js/crud.d.ts)
        - [task_3/js/crud.js](task_3/js/crud.js): helper library

9. Namespaces and declaration merging
    - Namespaces: `Subjects` - common namespace across multiple files.
    - Interfaces:
        - `Teacher`: define structure of teacher object. Multiple declaration in different files sharing same namespace.
        - `Subjects`
    - Classes:
        - `Subject`: base class with property `Teacher`
        - `Cpp`: extends `Subject` with methods `getRequirements()` and `getAvailableTeacher()`.
        - `React`: extends `Subject` with methods `getRequirements()` and `getAvailableTeacher()`.
        - `Java`: extends `Subject` with methods `getRequirements()` and `getAvailableTeacher()`.
    - Files:
        - [task_4/package.json](task_4/package.json)
        - [task_4/tsconfig.json](task_4/tsconfig.json)
        - [task_4/js/subjects/Java.ts](task_4/js/subjects/Java.ts)
        - [task_4/js/subjects/Java.ts](task_4/js/subjects/Java.ts)
        - [task_4/js/subjects/React.ts](task_4/js/subjects/React.ts)
        - [task_4/js/subjects/Subject.ts](task_4/js/subjects/Subject.ts)
        - [task_4/js/subjects/Teacher.ts](task_4/js/subjects/Teacher.ts)

10. Using shared namespaces
    - creates and exports a constant `cpp` for Cpp Subjects
    - creates and exports a constant `java` for Java Subjects
    - creates and exports a constant `react` for React Subjects
    - creates and exports one `Teacher` object `cTeacher` with `experienceTeachingC = 10`
    - for Cpp subject, log to the console `C++`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return
    - for Java subject, log to the console `Java`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return
    - for React subject, log to the console React, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return
    - File: [task_4/js/main.ts](task_4/js/main.ts)

11. Nominal typing and type assertions
    - Interfaces `MajorCredits` and `MinorCredits`:
        - Each interface defines a number named `credits`
        - Each interfaces has `brand` property to uniquely identify tje interface.
    - Functions named `sumMajorCredits` and `sumMinorCredits`:
        - Each function takes two arguments `subject1` and `subject2`
    - `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value
    - Each function sums the credits of the two subjects
    - Files:
        - [task_5/js/main.ts](task_5/js/main.ts)
        - [task_5/package.json](task_5/package.json)
        - [task_5/webpack.config.js](task_5/webpack.config.js)
        - [task_5/tsconfig.json](task_5/tsconfig.json)
