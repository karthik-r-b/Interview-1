import React from 'react';
import { NavLink } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import LoggedOut from './Logout';
const Header = (props) => {
  const { data } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <NavLink exact to="/" className="navbar-brand">
        Expense-Manager
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"></li>
        </ul>
        {data ? <LoggedIn /> : <LoggedOut />}
      </div>
    </nav>
  );
};

export default Header;
