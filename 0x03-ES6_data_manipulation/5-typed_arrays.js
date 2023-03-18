/**
 * Creates an array buffers an inserts an Int8 value at a specified position
 * @param   {Number}    length   - Length of array buffer
 * @param   {Number}    position - Position to insert the value
 * @param   {Number}    value    - Value of insert into the array buffer
 * @returns {DataView}           - DataView object to manipulate the array buffer
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  try {
    dataView.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }
  return dataView;
}
