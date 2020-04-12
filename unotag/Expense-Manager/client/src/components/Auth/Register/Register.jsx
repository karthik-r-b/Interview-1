import React, { useState } from 'react';
import '../Login/Login.css';
import { signupAuth } from '../../../url';
import { useAlert } from 'react-alert';

const Register = (props) => {
  const alert = useAlert();
  const [signupData, setsignupData] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setsignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert.error("Passwords Doesn't match");
      return;
    }
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
                        <label htmlFor="name">Name</label>
                        <input
                          id="Name"
                          type="text"
                          className="form-control"
                          name="name"
                          title="Must Enter a valid Name"
                          onChange={handleInputChange}
                          maxLength="10"
                          required
                          autoFocus
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">E-Mail ID</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={handleInputChange}
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Please Enter your valid EmailID"
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
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Your password must contain atleast an alphabet,special character, number"
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
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Your password must contain atleast an alphabet,special character, number"
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
