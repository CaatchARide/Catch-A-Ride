import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'


export default function Login() {
  return (
  
<Container>
  <h3 style={{textAlign : 'center'}}>Login Page</h3>
    <Form>
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
        <Button style={{backgroundColor:"#72A98C"}} variant="primary" type="submit" href="http://localhost:3000/Switchpage">Login</Button>
    </Form>
</Container>
      
  );
};