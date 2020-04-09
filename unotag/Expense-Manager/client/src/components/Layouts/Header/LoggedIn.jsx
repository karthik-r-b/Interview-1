import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../Auth/AuthConfig';
import { loginOutAction } from '../../../redux/actions/AuthAction';
const LoggedIn = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('team');
    setAuthToken(false);
    dispatch(loginOutAction({}));
    window.location.replace('/login');
  };
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active"></li>
      </ul>
      <span className="navbar-text white-text">
        <a onClick={handleClick} className="nav-link" href="/logout">
          Logout
        </a>
      </span>
    </div>
  );
};

export default LoggedIn;
