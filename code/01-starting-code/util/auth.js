import axios from 'axios';

const API_KEY = 'AIzaSyCApAAH9OTN6cwxgxE7VR8Cpe-OL3w7rVo';

async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}
