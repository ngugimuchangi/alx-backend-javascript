import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const userDetails = Promise.all([uploadPhoto(), createUser()]);
  userDetails
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((error = 'Signup system offline') => console.error(error));
}
