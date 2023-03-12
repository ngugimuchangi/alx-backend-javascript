import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((response) => {
    createUser().then((newUser) => {
      console.log(`${response.body} ${newUser.firstName} ${newUser.lastName}`);
    });
  });
}
