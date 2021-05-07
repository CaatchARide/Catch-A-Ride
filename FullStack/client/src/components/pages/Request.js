import React, { useState } from 'react'
import {  Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Request = () => {
  const history = useHistory();
  const [request, setRequest] = useState({
    numberOfPassengers:"", numberOfBags:"", preferences:"", additionalInfo:""
  });
 
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setRequest({ ...request, [name]:value});
  }
  const postData = async (e) => {
    e.preventDefault();
    const { numberOfPassengers, numberOfBags, preferences, additionalInfo } = request;
    
    const res = await fetch("/makerequest", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        numberOfPassengers, numberOfBags, preferences, additionalInfo
      })
    });
    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert("Invalid credentials");
      console.log("invalid registration");
    } else {
      window.alert("Thank you for the request! Please wait while driver approves your request");
      console.log("sucessful registration");
      history.push("/passengerDash");

     
    }


  }
    return (
        <>
      <div className="container mt-5" method="POST">
            <Form>
                        <Form.Group controlID="numberOfPassengers">
                            <Form.Label>Number of passengers</Form.Label>
                            <Form.Control  name = "numberOfPassengers" value={request.numberOfPassengers}
            onChange={handleInputs}/>
                        </Form.Group>
                        <Form.Group controlID="numberOfBags">
                            <Form.Label>Number of bags</Form.Label>
                            <Form.Control name="numberOfBags" value={request.numberOfBags}
                            onChange={handleInputs} placeholder=" " />
                        </Form.Group>
                        <Form.Group controlID="preferences">
                            <Form.Label>Preferences</Form.Label>
                            <Form.Control type="text" name="preferences" value={request.preferences}
                            onChange={handleInputs} placeholder="" />
                        </Form.Group>
                        <Form.Group controlID="additionalInfo">
                            <Form.Label>Additional Information</Form.Label>
                            <Form.Control name="additionalInfo" value={request.additionalInfo}
                            onChange={handleInputs}placeholder="" />
                        </Form.Group>
                     

                        <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "submit" onClick={postData}>Post Trip</Button>
                        </Form>
                        <br />
                        <br />

                        </div>
        </>
    )
}

export default Request
