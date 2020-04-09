import React, { useState } from 'react';
import '../Login/Login.css';
import { signupAuth } from '../../../url';

const Register = (props) => {
  const [signupData, setsignupData] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setsignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fecthData(signupData);
  };

  const fecthData = async (data) => {
    let result = await signupAuth(data);
    if (result.success) {
      window.location.replace('/login');
    } else {
      props.history.push('/signup');
    }
  };
  return (
    <div className="signup">
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">SignUp</h4>
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
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          id="Name"
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={handleInputChange}
                          required
                          autoFocus
                        />
                      </div>
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
                      <div className="form-group">
                        <label htmlFor="password">ConfirmPassword</label>
                        <input
                          id="confirmPassword"
                          type="password"
                          className="form-control"
                          name="confirmPassword"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group mt-5">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm btn-block"
                        >
                          SignUp
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
