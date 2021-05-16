import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


import home from './components/pages/Home'
import login from './components/pages/Login'
import signup from './components/pages/Signup'
import about from './components/pages/About'
import car_details from './components/pages/Car_details.js'
import switchpage from './components/pages/Switchpage'
import contact from './components/pages/Contact'
import driverDashboard from './components/pages/DriverDash'
import PassengerDashboard from './components/pages/passengerDashboard'
import post from './components/pages/Post'
import Footer from './components/Footer'
import payment from './components/pages/payment/payment'
import request from './components/pages/Request'
import account from './components/pages/Account'
import createTrip from './components/pages/CreateTrip'
import pendingRequest from './components/pages/bufferPages/PendingRequest'
import driverRequest from './components/pages/bufferPages/DriverRequest'
import driverPosts from './components/pages/bufferPages/DriverPosts'


//Implemented Router from react-router-dom that is being used to have a website with multiple pages. Implementation done by front end team. 
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
        <Route path = '/passengerDash' exact component= {PassengerDashboard}/>
        <Route path = '/posts' exact component= {post}/>
        <Route path = '/payment' exact component= {payment}/>
        <Route path = '/request' exact component= {request}/>
        <Route path = '/account' exact component= {account}/>
        <Route path = '/createtrip' exact component= {createTrip}/>
        <Route path = '/pendingrequest' exact component= {pendingRequest}/>
        <Route path = '/driverrequest' exact component= {driverRequest}/>
        <Route path = '/driverposts' exact component= {driverPosts}/>
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;