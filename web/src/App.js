import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './components/pages/Login'
import signup from './components/pages/Signup'
//import {Button, Form, Container} from 'react-bootstrap'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/login' exact component= {login}/>
        <Route path = '/signup' exact component= {signup}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
