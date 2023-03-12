import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const newUser = signUpUser(firstName, lastName);
  const profilePhoto = uploadPhoto(fileName);
  const userDetails = Promise.allSettled([newUser, profilePhoto]);
  userDetails.then((results) => results.map((result) => {
    const resDetails = { status: result.status, value: result.value };
    return resDetails;
  }));
  return userDetails;
}
