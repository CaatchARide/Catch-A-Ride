import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'



export default function Switchpage() {
    return (
        <Container>
        <h3 style={{textAlign : 'center'}}>Who will you be today?</h3>
            <Form>
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="http://localhost:3000/driverDash" size="lg" block>Driver</Button>
            </Form>
            <h4 style={{textAlign : 'center'}}>OR</h4>

            <Form>
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "pass" href="http://localhost:3000/passengerDash" size="lg" block>Passenger</Button>
            </Form>

        </Container>
          
    );
};
