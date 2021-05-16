//Created by Brandon Cabrol
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


//function for Contact page
export default function Contact() {
    
    const history = useHistory();
    const [contacts, setContacts] = useState({
        name:"", email:"", message:""
    });
   
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setContacts({ ...contacts, [name]:value});
    }
    const postData = async (e) => {
      e.preventDefault();
      const { name, email, message} = contacts;
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name, email, message
        })
      });
      const data = await res.json();
      if(res.status === 422 || !data){
        window.alert("Invalid credentials");
        console.log("invalid registration");
      } else {
        window.alert("Thank you for reaching out, we will get back to you!");
        console.log("sucessful contact request");
        history.push("/");

       
      }


    }
//Container centers contents inside and asks the user to 
//input their name, email, and message text. 
//FormGroup creates a section in the form for each user input
    return (
        <Container className="nonsense">
            Got a question? We'd love to hear from you! Send us a message and we'll respond as soon as possible.
        
        <Form>
           <Form.Group controlID="name">
               <Form.Label>Name*</Form.Label>
               <Form.Control name="name" value={contacts.name}
                onChange={handleInputs} placeholder="John Doe" />
           </Form.Group>
           <Form.Group controlID="email">
               <Form.Label>Email*</Form.Label>
               <Form.Control name="email" value={contacts.email}
                onChange={handleInputs} placeholder="jdoe@albany.edu" />
           </Form.Group>
           <Form.Group controlID="message">
               <Form.Label>Message</Form.Label>
               <Form.Control name="message" value={contacts.message}
                onChange={handleInputs} placeholder="Questions/Comments/Concerns" />
           </Form.Group>

        </Form>
        <Form>
           {/*Creates button type and text within button*/}
        <Button style={{backgroundColor:"#72A98C"}} variant="primary" type="submit" onClick={postData}>Submit</Button>
        </Form>

        </Container>
          
    );
};