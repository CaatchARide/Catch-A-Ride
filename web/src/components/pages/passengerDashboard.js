import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Accordion, Card} from 'react-bootstrap'

export default function passengerDash() {
    return (
        <Container>
            <h3 style={{textAlign : 'center'}}>Welcome to your passenger dashboard!</h3>
            <Accordion>
            <Card>
                <Card.Header style={{backgroundColor:"#72A98C"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "white"}}>
                    Account Details
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Account Details HERE</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header style={{backgroundColor:"#72A98C"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "white"}}>
                    View Trips
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>View trips go HERE</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            <div>
                <br/>
                <span>This button will redirect you to the driver dashboard.   </span>
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/driverDash">Switch to driver</Button>
            </div>

        </Container>
          
    );
};