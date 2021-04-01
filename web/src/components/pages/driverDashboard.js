import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container} from 'react-bootstrap'

export default function driverDash() {
    return (
        <Container>
            <h3 style={{textAlign : 'center'}}>Welcome to your driver dashboard!</h3>
           <div>
               <span>This button will show you your account details with your car details if you submitted them.   </span>
                <Button variant="primary" type= "drive" href="">Account Details</Button>
            </div>
            <div>
                <br/>
                <span>This button will redirect you to a car form that allows you to register your car.   </span>
                <Button variant="primary" type= "drive" href="/car_details">Car Details</Button>
            </div>
            <div>
                <br/>
                <span>This button will redirect you to the passenger dashboard.   </span>
                <Button variant="primary" type= "drive" href="/passengerDash">Switch to passenger</Button>
            </div>
        </Container>
          
    );
};