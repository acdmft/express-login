import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// Pages
import Login from './pages/Login';
import Admin from './pages/Admin';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <div>App</div>
        
      <Switch>
        <Route exact path="/login" component={Login}/> 
        <Route path="/admin" component={Admin}/>
        <Route path="/signup" component={Signup}/>
      </Switch>

    </BrowserRouter>

  )
}
