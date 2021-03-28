import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'



export default function Contact() {
    return (
        <Container>
            Got a question? We'd love to hear from you! Send us a message and we'll respond as soon as possible.
        
        <Form>
           <Form.Group controlID="contactname">
               <Form.Label>Name*</Form.Label>
               <Form.Control type="name" placeholder="John Doe" />
           </Form.Group>
           <Form.Group controlID="contactemail">
               <Form.Label>Email*</Form.Label>
               <Form.Control type="email" placeholder="jdoe@albany.edu" />
           </Form.Group>
           <Form.Group controlID="contactmessage">
               <Form.Label>Message</Form.Label>
               <Form.Control type="email" placeholder="Questions/Comments/Concerns" />
           </Form.Group>

        </Form>
        <Form>
           
        <Button variant="primary" type="submit">Submit</Button>
        </Form>

        </Container>
          
    );
};
