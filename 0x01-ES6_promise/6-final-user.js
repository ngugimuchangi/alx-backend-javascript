import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const newUser = signUpUser(firstName, lastName);
  const profilePhoto = uploadPhoto(fileName);
  const userDetails = Promise.allSettled([newUser, profilePhoto]);
  return userDetails
    .then((values) => [...values])
    .catch((error) => error);
}
