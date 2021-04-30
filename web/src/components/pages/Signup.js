import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, Container} from 'react-bootstrap'



export default function Signup() {
   
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
      if(data.status === 422 || !data){
        window.alert("Invalid Registration");
        console.log("invalid registration");
      } else {
        window.alert("valid Registration");
        console.log("sucessful registration");
        

       
      }


    }
    return (
      
    <Container className="nonsense">
        <h3 style={{textAlign : 'center'}}>Sign-up Page</h3>
        <Form method="POST">
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
            <Form.Control type="date" 
            name="dateOfBirth"
            value={user.dateOfBirth}
            onChange={handleInputs}
            />
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

//href="http://localhost:4000/login"