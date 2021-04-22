import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Accordion, Card, Form} from 'react-bootstrap'

export default function driverDash() {
    return (
        <Container>
            <h3 style={{textAlign : 'center'}}>Welcome to your driver dashboard!</h3>
            <Accordion>
                <Card>
                    <Card.Header style={{backgroundColor:"#72A98C"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "white"}}>
                        Account Details
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Account details HERE</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header style={{backgroundColor:"#72A98C"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "white"}}>
                        Car Details
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Car details go HERE<br />
                        This button will redirect you to a car form that allows you to register your car. {" "}
                        <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/car_details">Car Details</Button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header style={{backgroundColor:"#72A98C"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{color: "white"}}>
                        Create Trip
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Form>
                        <Form.Group controlID="time_of_trip">
                            <Form.Label>Specify time of trip</Form.Label>
                            <Form.Control type="time_of_trip" placeholder="12:00PM" />
                        </Form.Group>
                        <Form.Group controlID="from">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="from" placeholder="UAB" />
                        </Form.Group>
                        <Form.Group controlID="to">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="to" placeholder="NYC" />
                        </Form.Group>
                        <Form.Group controlID="to">
                            <Form.Label>Price per passenger</Form.Label>
                            <Form.Control type="price" placeholder="$5.00" />
                        </Form.Group>
                        <Form.Group controlID="amount_of_passengers">
                            <Form.Label>Amount of passengers</Form.Label>
                            <Form.Control type="ammount_of_passengers" placeholder="3" />
                        </Form.Group>
                        </Form>
                        <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "submit">Post Trip</Button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <div>
                <br/>
                <span>This button will redirect you to the passenger dashboard.   </span>
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/passengerDash">Switch to passenger</Button>
            </div>
        </Container>
          
    );
};