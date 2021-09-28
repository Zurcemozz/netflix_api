import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import './app.scss';
import Home from './page/home/Home';
import Login from './page/login/Login';
import Register from './page/register/Register';
import Watch from './page/watch/Watch';
const App = () => {
  const user = true;
  return(
    //ung react router dom, para siyang href sa HTML
    <Router>
    <Switch>
      <Route  path="/register">
      {!user ? <Register /> : <Redirect to="/" />}
      </Route>
      <Route  path="/login">
      {!user ? <Login /> : <Redirect to="/" />}
      </Route>
      {/* ang nangyayari sa part nato, si chinecheck ng router dom kung si user is True or false. 
      If True = then redirect mo siya sa homepage, else register muna */}
      <Route exact path="/">
        {user ? <Home /> : <Redirect to="register" />}
      </Route>
      { user && (
        //this one shows if si user ay true, pwede ka pumuntma sa ibang page, else hindi
        <>
      <Route path="/movies">
        <Home type="movies" />
      </Route>
      
      <Route path="/series">
        <Home type="series" />
      </Route>

      <Route path="/watch">
        <Watch />
      </Route>
      </>
      )}

    </Switch>
  </Router>
  )
}

export default App
