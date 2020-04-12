import React, { useState } from 'react';
import './Login.css';
import { loginAuth } from '../../../url';
import { authConfig } from '../../Auth/AuthConfig';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/actions/AuthAction';
import { useAlert } from 'react-alert';
const Login = (props) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  // fetching API
  const fetchApi = async (loginData) => {
    let result = await loginAuth(loginData);
    if (result.success) {
      authConfig(result);
      const { token } = result;
      const decoded = jwt_decode(token);
      dispatch(setUser(decoded));
      props.history.push('/');
    } else {
      props.history.push('/login');
      alert.error('Invalid credentials');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi(loginData);
  };
  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">LogIn</h4>
                  <form
                    className="my-login-validation"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="email">E-Mail ID</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleInputChange}
                        required
                        autoFocus
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm btn-block"
                      >
                        SignIn
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      Don't have an account? <a href="/signUp">Create One</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
