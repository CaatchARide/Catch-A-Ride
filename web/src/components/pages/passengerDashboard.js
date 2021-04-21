import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container} from 'react-bootstrap'

export default function passengerDash() {
    return (
        <Container>
            <h3 style={{textAlign : 'center'}}>Welcome to your passenger dashboard!</h3>
            <div>
                <span>This button will show you your account details.    </span>
                <Button variant="primary" type= "drive" href="">Account Details</Button>
            </div>

            <div>
                <br/>
                <span>This button will redirect you to the driver dashboard.   </span>
                <Button variant="primary" type= "drive" href="/driverDash">Switch to driver</Button>
            </div>

        </Container>
          
    );
};