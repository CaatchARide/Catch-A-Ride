import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'



export default function Signup() {
    return (
      
    <Container>
        <h3 style={{textAlign : 'center'}}>Sign-up Page</h3>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="John Doe" />
          </Form.Group>
          <Form.Group controlId="dob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="email" placeholder="01/01/1999" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="jdoe@albany.edu" />
            <Form.Text className="text-muted">
              Please enter a UAlbany Email
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="********" />
          </Form.Group>
          <Form.Group controlId="formPasswordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" placeholder="********" />
          </Form.Group>
          <Form.Group controlId="formProfilePicture">
            <Form.Label>Profile Picture:</Form.Label>
            <Form.File id="fileSelfie"/>
          </Form.Group>
        
        <Button style={{backgroundColor:"#72A98C"}} variant="primary" type="signup" href="http://localhost:3000/login">Signup</Button>
        </Form>

    </Container>
    );
};

