import React from 'react';
import { NavLink } from 'react-router-dom';
const HomeDefault = () => {
  return (
    <div className="container-fluid">
      <h4 className="text-center mt-4">Please Login</h4>
      <NavLink exact to="/login" className="nav-link">
        Login
      </NavLink>
      {/* <Link to="/login">Login</Link> */}
    </div>
  );
};

export default HomeDefault;
