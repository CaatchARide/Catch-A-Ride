import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'



export default function Switchpage() {
    return (
        <Container>
             Who will you be today?

        <Form>
           
        <Button variant="primary" type= "drive" href="http://localhost:3000/driverDash">Driver</Button>
        </Form>
        OR
        <Form>
        <Button variant="primary" type= "pass" href="http://localhost:3000/passengerDash">Passenger</Button>
        </Form>

        </Container>
          
    );
};
