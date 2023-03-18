/**
 * Creates a map of grocery items and their quantities
 * @returns {Map} map object created
 */
export default function groceriesList() {
  const map = new Map();
  map.set('Apples', 10);
  map.set('Tomatoes', 10);
  map.set('Pasta', 1);
  map.set('Rice', 1);
  map.set('Banana', 5);
  return map;
}
