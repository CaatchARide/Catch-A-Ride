import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'
import Loginpic from './images/LoginPicChoice.png'

export default function Login() {
  return (
  
<Container>

<img
       width={520}
       height={300}
       className="b"
       src={Loginpic}
       alt="Second slide"
/>
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
        <Form>
          <Button variant="success">Submit</Button> 
          </Form>
    </Form>
    
</Container>
      
  );
};