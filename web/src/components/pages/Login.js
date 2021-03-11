import React from "react";
import {Button, Form, Container} from 'react-bootstrap'


export default function Login() {
  return (
    <Container>
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
        <Button variant="primary" type="submit">Login</Button>
      </Form>
      </Container>
  );
};