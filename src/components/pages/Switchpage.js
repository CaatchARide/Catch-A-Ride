import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'



export default function Switchpage() {
    return (
        <Container>
             Who will you be today?

        <Form>
           
        <Button variant="primary" type= "drive">Driver</Button>
        </Form>
        OR
        <Form>
        <Button variant="primary" type= "pass">Passenger</Button>
        </Form>

        </Container>
          
    );
};
