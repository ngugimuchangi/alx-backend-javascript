import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const userDetails = Promise.all([uploadPhoto(), createUser()]);
  userDetails
    .then((results) => {
      const { body } = results[0];
      const { firstName } = results[1];
      const { lastName } = results[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch((error = 'Signup system offline') => console.error(error));
}
