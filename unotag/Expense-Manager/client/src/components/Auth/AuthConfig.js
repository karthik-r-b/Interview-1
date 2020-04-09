import axios from 'axios';
export const authConfig = (data) => {
  // const dispatch = useDispatch();
  const { token } = data;
  sessionStorage.setItem('team', token);
  setAuthToken(token);
  // const decoded = jwt_decode(token);
  // dispatch(setUser(decoded));
};

export const setAuthToken = (token) => {
  if (token) {
    // apply token to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
