import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Form} from 'react-bootstrap'

export default function car_details() {
    
    return (
 
       <Container>
           <Form>
               <Form.Group controlId = "formLicense">
                    <Form.Label>Enter License ID:</Form.Label>
                    <Form.Control type="licenseID" placeholder="Enter license ID"/>
                    <Form.Text> We'll never share your license ID with anyone else.</Form.Text>
                    <Form.File id="fileLicense1" label="Include a picture copy of the front of your license:"/>
                    <Form.File id="fileLicense2" label="Include a picture copy of the back of your license:"/>
                    <Form.Text> We'll never share your license with anyone else.</Form.Text>
               </Form.Group>
               <Form.Group controlId="formInsurance">
                    <Form.Label>Car Insurance:</Form.Label>
                    <Form.File id="fileInsurance" label="Include a picture copy of your car's insurance:"/>
                    <Form.Text> We'll never share your car insurance with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group controlId="formRegistration">
                    <Form.Label>Car Registration:</Form.Label>
                    <Form.File id="fileRegistration" label="Include a picture copy of your car's registration:"/>
                    <Form.Text> We'll never share your car registration with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group controlId="formCarPlate">
                    <Form.Label>Car Plate Number:</Form.Label>
                    <Form.Control type="plateNumber" placeholder="Enter plate number of desired car"/>
                    <Form.Text> We'll never share your car's plate numbers with anyone else.</Form.Text>
                </Form.Group>
               <Button style={{backgroundColor:"#72A98C"}} variant="primary" type="submit" href="http://localhost:3000/driverDash">Submit</Button>
           </Form>
       </Container>

       
              
        

          )

  };