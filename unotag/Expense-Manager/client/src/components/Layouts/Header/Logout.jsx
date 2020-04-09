import React from 'react';
import { NavLink } from 'react-router-dom';
const LoggedOut = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active"></li>
      </ul>
      <span className="navbar-text white-text">
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </span>
    </div>
  );
};

export default LoggedOut;
