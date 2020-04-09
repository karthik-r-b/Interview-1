const loginReducer = (state = initialState, action) => {
  let { type, data } = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginData: data,
      };

    case 'SET_USER':
      return {
        ...state,
        isAutheticated: !isEmpty(data),
        setUserData: data,
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAutheticated: !isEmpty(data),
        setUserData: data,
      };

    default:
      return state;
  }
};

const initialState = {
  loginData: [],
  isAutheticated: false,
  setUserData: {},
};

const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export default loginReducer;
