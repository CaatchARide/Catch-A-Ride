import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


import home from './components/pages/Home'
import login from './components/pages/Login'
import signup from './components/pages/Signup'
import about from './components/pages/About'
import car_details from './components/pages/car_details.js'
import switchpage from './components/pages/Switchpage'
import contact from './components/pages/Contact'
import driverDashboard from './components/pages/driverDashboard'
import passengerDashboard from './components/pages/passengerDashboard'
import post from './components/pages/Post'
import Footer from './components/Footer'
import payment from './components/pages/payment/payment'
import request from './components/pages/Request'



//import {Button, Form, Container} from 'react-bootstrap'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component= {home}/>
        <Route path = '/login' exact component= {login}/>
        <Route path = '/signup' exact component= {signup}/>
        <Route path = '/about' exact component= {about}/>
        <Route path = '/car_details' exact component= {car_details}/>
        <Route path = '/switchpage' exact component= {switchpage}/>
        <Route path = '/Contact' exact component= {contact}/>
        <Route path = '/driverDash' exact component= {driverDashboard}/>
        <Route path = '/passengerDash' exact component= {passengerDashboard}/>
        <Route path = '/posts' exact component= {post}/>
        <Route path = '/payment' exact component= {payment}/>
        <Route path = '/request' exact component= {request}/>
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;