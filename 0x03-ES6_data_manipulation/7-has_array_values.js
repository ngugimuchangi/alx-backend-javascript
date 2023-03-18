/**
 * Checks if all values in an array exist within a set
 * @param   {Set}     set
 * @param   {Array}   array
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
