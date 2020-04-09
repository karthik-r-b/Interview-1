import axios from 'axios';
// Rest API server

export const signupAuth = async (data) => {
  const url = 'http://localhost:8000/api/signup';
  let result = '';
  try {
    result = await axios({
      method: 'POST',
      url,
      data,
    });
  } catch (error) {
    console.log(error);
  }
  return result.data;
};

export const loginAuth = async (data) => {
  const url = 'http://localhost:8000/api/login';
  let result = '';
  try {
    result = await axios({
      method: 'POST',
      url,
      data,
    });
  } catch (error) {
    console.log(error);
  }
  return result.data;
};
