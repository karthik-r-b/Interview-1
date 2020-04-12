import React from 'react';
import './App.css';
import Header from './components/Layouts/Header/Header';
import jwt_decode from 'jwt-decode';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import { setAuthToken } from './components/Auth/AuthConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/actions/AuthAction';
import TrackerView from './components/expensetracker/tracker/TrackerView';
import NotFound from './components/404-Not-Found/NotFound';
import HomeDefault from './components/Home/HomeDefault';

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
            <Route exact path="/" component={HomeDefault} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      ) : (
        <div className="App">
          <Header data={isLoggedIn} />
          <Route exact path="/" component={Home} />
          <Route path="/income/:month" component={TrackerView} />
          <Route path="/expense/:month" component={TrackerView} />
          <Route path="*" component={NotFound} />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
