/**
 *
 * @param   {Set}     set
 * @param   {String}  startString
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' && startString === '') return startString;
  const stringsArray = [];
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      stringsArray.push(element.slice(startString.length));
    }
  });
  return stringsArray.join('-');
}
