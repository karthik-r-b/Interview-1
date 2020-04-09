import React from 'react';
import Header from './components/Layouts/Header/Header';
import jwt_decode from 'jwt-decode';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import { setAuthToken } from './components/Auth/AuthConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/actions/AuthAction';

const App = () => {
  const dispatch = useDispatch();
  if (sessionStorage.team) {
    setAuthToken(sessionStorage.team);
    const decode = jwt_decode(sessionStorage.team);
    dispatch(setUser(decode));
  }
  const isLoggedIn = useSelector((item) => item.loginReducer.isAutheticated);
  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <div className="App">
          <Header data={isLoggedIn} />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />
          </Switch>
        </div>
      ) : (
        <div className="App">
          <Header data={isLoggedIn} />
          <Route exact path="/" component={Home} />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
