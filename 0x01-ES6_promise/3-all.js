import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]);
}
handleProfileSignup()
  .then(([photo, user]) => {
    console.log(photo.body, user.firstName, user.lastName);
  })
  .catch((error = 'Signup system offline') => console.error(error));
