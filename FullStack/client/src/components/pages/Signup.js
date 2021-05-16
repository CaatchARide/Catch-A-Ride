//Created by Brandon Cabrol
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Container} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
    
//Layout of signup page setup by Hector Salas

export default function Signup() {
   const history = useHistory();
    const [user, setUser] = useState({
      firstName:"", lastName:"", dateOfBirth:"", email:"", password:"", cpassword:"" 
    });
   
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({ ...user, [name]:value});
    }
    const PostData = async (e) => {
      e.preventDefault();
      const { firstName, lastName, dateOfBirth, email, password, cpassword } = user;
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          firstName, lastName, dateOfBirth, email, password, cpassword
        })
      });
      const data = await res.json();
      if(res.status === 400 || !data){
        window.alert("Invalid Registration");
        console.log("invalid registration");
      } else {
        window.alert("Succesful Registration");
        console.log("sucessful registration");
        history.push("/login");
      }
    }

    return (
    
    //Container centers anything inside of it for a better user interation
    //Form makes a page that can be used to take inputs from user such as first name, last name, 
    //date of birth, email, password
    <Container className="nonsense" method="POST">
        <h3 style={{textAlign : 'center'}}>Sign-up Page</h3>
        <Form >
          <Form.Group controlId="firstName">
            <Form.Label> First Name</Form.Label>
            <Form.Control type="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleInputs}
             placeholder="John" />

          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastName" 
            name="lastName"
            value={user.lastName}
            onChange={handleInputs}
            placeholder="Doe" />
          </Form.Group>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="dateOfBirth" 
            name="dateOfBirth"
            value={user.dateOfBirth}
            onChange={handleInputs}
            placeholder="01/01/1999" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" 
            name="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="jdoe@albany.edu" />
            <Form.Text className="text-muted">
              Please enter a UAlbany Email
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
            name="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="********" />
          </Form.Group>
          <Form.Group controlId="cpassword">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" 
            name="cpassword"
             value={user.cpassword}
             onChange={handleInputs}
             placeholder="********" />
          </Form.Group>
          <Form.Group controlId="formProfilePicture">
            <Form.Label>Profile Picture:</Form.Label>
            <Form.File id="fileSelfie"/>
          </Form.Group>
        
        <Button style={{backgroundColor:"#72A98C"}} variant="primary" type="signup" name="signup" value="register" onClick={PostData} >Signup</Button>
        </Form>

    </Container>

    );
};