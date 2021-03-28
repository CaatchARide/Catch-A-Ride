import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container} from 'react-bootstrap'

export default function driverDash() {
    return (
        <Container>
           
            <Button variant="primary" type= "drive" href="">Account Details</Button>
            <Button variant="primary" type= "drive" href="/car_details">Car Details</Button>

        </Container>
          
    );
};