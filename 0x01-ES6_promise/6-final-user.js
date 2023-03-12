import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const newUser = signUpUser(firstName, lastName);
  const profilePhoto = uploadPhoto(fileName);
  return Promise.allSettled([newUser, profilePhoto])
    .then(([user, photo]) => [
      {
        status: user.status,
        value: user.value
      },
      {
        status: photo.status,
        value: photo.reason
      }
    ] )
    .catch((error) => error);
}
