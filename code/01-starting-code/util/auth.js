import axios from 'axios';
import { API_KEY } from '../secrets';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate('signup', email, password);
}

export async function login(email, password) {
  await authenticate('signInWithPassword', email, password);
}
