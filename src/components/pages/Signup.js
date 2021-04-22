import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'


export default function Signup() {
    return (
    <Container>
      
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="John Doe" />
          </Form.Group>
          <Form.Group controlId="dob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="dob" placeholder="01/01/1999" />
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
          <div className="input-group">
            <div className="input-group-prepend"/>
            <span className="input-group-text" id="inputGroupFileAddon01">
            Input Picture
            </span>
            <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                example.png
                </label>
            </div>
        </div>
        
        <Form>
          <Button variant="success">Login</Button> 
          </Form>
        </Form>

      
    </Container>
    );
};