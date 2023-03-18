/**
 *
 * @param   {Set}     set
 * @param   {String}  startString
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return startString;
  const stringsArray = [];
  for (const element of set.values()) {
    if (element.slice(0, startString.length) === startString) {
      stringsArray.push(element.slice(startString.length));
    }
  }
  return stringsArray.join('-');
}
