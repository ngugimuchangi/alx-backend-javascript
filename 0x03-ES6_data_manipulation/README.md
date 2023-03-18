# 0x03-ES6_data_manipulation

## About
- Array
- Typed Arrays
- Set, Map, and WeakMap

## Tasks
0. Function `getListStudents` that returns an array of student objects with three attributes: `id`, `firstName` and `location`.
    - File: [0-get_list_students.js](0-get_list_students.js)

1. Function `getListStudentIds` that returns an array of ids from a list of object using `map` method. The array parameter is the same format as `getListStudents` from [0-get_list_students.js](0-get_list_students.js).
    - File: [1-get_list_student_ids.js](1-get_list_student_ids.js)

2. Function `getStudentsByLocation` that returns an array of objects who are located in a specific city.
    - File: [2-get_students_by_loc.js](2-get_students_by_loc.js)

3. Function `getStudentIdsSum` that returns the sum of all the student ids using `reduce` array method.
    - File: [3-get_ids_sum.js](3-get_ids_sum.js)

4. Function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade
    - File: [4-update_grade_by_city.js](4-update_grade_by_city.js)

5. Function `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.
    - File: [5-typed_arrays.js](5-typed_arrays.js)

6. `setFromArray` function that returns a `Set` from an array.
- File: [6-set.js](6-set.js)

7. Function `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set
    - File: [7-has_array_values.js](7-has_array_values.js)

8. Function `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).
    - File: [8-clean_set.js](8-clean_set.js)

9. Function `groceriesList` that returns a map of groceries with the following `name`: `quantity` key-value pairs.
    - File: [9-groceries_list.js](9-groceries_list.js)

10. Function `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.
    - File: [10-update_uniq_items.js](10-update_uniq_items.js)

11. WeakMap data structure 
    - const `weakMap` - a new instance of a `WeakMap`
    - Function `queryAPI` that accept an `endpoint` argument like:

    ```
    {
        protocol: 'http',
        name: 'getUsers',
    }
    ```
    - Tracks within the `weakMap` the number of times `queryAPI` is called for each `endpoint`.

    - When the number of queries is >= 5 throw an error with the message `Endpoint load is high`.
    - File: [100-weak.js](100-weak.js)

