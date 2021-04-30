import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Accordion, Card} from 'react-bootstrap'
import carsharing from './images/banner1.png'

export default function passengerDash() {
    return (
        <Container classNameName="nonsense">
            <div className="card bg-dark text-white">
                <img src={carsharing} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
    
                    </div>
            </div>
            <br />
            <h3 style={{textAlign : 'center'}}>Welcome to your passenger dashboard!</h3>
            <br />
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
                <Card.Body>View trips go HERE <br />
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/posts">List of Drivers</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header style={{backgroundColor:"#72A98C"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{color: "white"}}>
                    Pending requests
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>View trips go HERE <br />
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/posts">List of Drivers</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header style={{backgroundColor:"#72A98C"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{color: "white"}}>
                    Make Payment
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                <Card.Body>Make payment here <br />
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/payment">Click to pay</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            <div>
                <br/>
                <span>This button will redirect you to the driver dashboard.   </span>
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/driverDash">Switch to driver</Button>
                <br />

                <br />
                <br />
                <br />
                <br />
            </div>

        </Container>
          
    );
};