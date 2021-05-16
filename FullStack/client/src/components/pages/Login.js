//Created by Brandon Cabrol, Hector Salas
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Container} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    
    const res = await fetch('/signin', {
      method:"POST",

      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });
      const data = res.json();

      if(res.status === 400 || !data){
        window.alert("Invalid Credentials");

      } else {
        window.alert("Login Successful");
        history.push("/switchpage");
        
      }


    
  }


  return (
//Container for user to log into their accounts
//Form allows us to ask for the user email and password and store the input
<Container className="nonsense" method="POST">
  <h3 style={{textAlign : 'center'}}>Login Page</h3>
    <Form method="POST">
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jdoe@albany.edu" />

          <Form.Text className="text-muted">
            Please enter a UAlbany Email
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
        </Form.Group>
        <Button style={{backgroundColor:"#72A98C"}} variant="primary" type="submit" onClick={loginUser}>Login</Button>
    </Form>
</Container>
      
  );
};

//onClick={loginUser}