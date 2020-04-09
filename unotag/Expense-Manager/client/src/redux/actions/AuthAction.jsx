export const loginAction = (data) => {
  return {
    type: 'LOGIN_SUCCESS',
    data,
  };
};

export const setUser = (data) => {
  return {
    type: 'SET_USER',
    data,
  };
};

export const loginOutAction = (data) => {
  return {
    type: 'LOGOUT_SUCCESS',
    data,
  };
};
