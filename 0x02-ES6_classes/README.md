# 0x02. ES6 classes

## About
- Class declaration
- Constructors
- Getters & Setters
- Inheritance
- Abstract classes
- ES6 Symbols

## Tasks
0. `ClassRoom` class declaration
- File: [0-classroom.js](0-classroom.js)

1. `initializeRooms` function that returns an array of 3 `ClassRoom` objects.
- File: [1-make_classrooms.js](1-make_classrooms.js)

2. `HolbertonCourse` class declaration
- File: [2-hbtn_course.js](2-hbtn_course.js)
- Implements getter and setter methods for its attributes.

3. `Currency` class declaration
- Implements getter and setter methods for its attributes.
- Implements a instance method `displayFullCurrency`
- File: [3-currency.js](3-currency.js)

4. `Pricing` class declaration.
- Extends ``Currency` from [3-currency.js](3-currency.js)
- Implements getter and setter methods for its attributes
- Implements static method `convertPrice`
- File: [4-pricing.js](4-pricing.js)

5. `Building` class declaration
- Implements getter for each attribute
- Serves as an `abstract class`
- Ensure that extending classes must have `evacuationWarningMessage` method
- File: [5-building.js](5-building.js)

6. `SkyHighBuilding` class declaration
- Implements getter for each attribute
- Overrides `evacuationWarningMessage` method
- File: [6-sky_high.js](6-sky_high.js)

7. `Airport` class
- Overrides `Symbol.toStringTag` property
- File: [7-airport.js](7-airport.js)

8. `HolbertonClass` class
- Implements `Symbol.toPrimitive` method
- File: [8-hbtn_class.js](8-hbtn_class.js)

9. Fixing code to handle:
- Class declaration hoisting
- Setter and getter methods implementation
- Exporting variable declaration and values
- File: [9-hoisting.js](9-hoisting.js)

10. `Car` class
- Implements getter for `Symbol.species` property.
- Implements `cloneCar` method.
- File: [10-car.js](10-car.js)

11. `EVCar` class
- Extends `Car` class from [10-car.js](10-car.js)
- Overrides `Symbol.species to utilize parents constructor method.
- File: [100-evcar.js](100-evcar.js)
