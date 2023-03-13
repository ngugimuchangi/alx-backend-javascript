import ClassRoom from './0-classroom';

/**
 * Creates are array of 3 ClassRoom objects
 * @return {Array} An array of 3 ClassRoom objects
 */
export default function initializeRooms() {
  return [new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)];
}
