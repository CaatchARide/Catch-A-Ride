//Created by Brandon Cabrol
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
//import face from './images/drivericon.png'
//import carpool from './images/icon-standard.png'
import { Button } from 'react-bootstrap'

//Function for setting up driver and passenger cards with buttons 
//that are connected to both driver and passenger dashboards
export default function Switchpage() {
  return (
        
        <div className="nonsense">
            <br />
        <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Driver</h3>
              <p className="card-text">Looking to give rides??</p>
              <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/driverDash" size="lg" block>Driver</Button>
              
            </div>
          </div>
        </div>
        <br />
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Passenger</h3>
              <p className="card-text">Check this out to look for rides!</p>
              
              <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "pass" href="/passengerDash" size="lg" block>Passenger</Button>
            </div>
          </div>
        </div>
      </div>
      </div>




  
    
 


                
          
                
            
    );
};


//
//
