
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Form} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Car_details() {
    const history = useHistory();
    
    const [details, setDetail] = useState({
        license:"", plateNumber:""
    });
   
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setDetail({ ...details, [name]:value});
    }
    const postData = async (e) => {
      e.preventDefault();
      const { license, plateNumber} = details;
      const res = await fetch("/driverdetails", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            license, plateNumber
        })
      });
      const data = await res.json();
      if(res.status === 422 || !data){
        window.alert("Invalid credentials");
        console.log("invalid registration");
      } else {
        window.alert("Thank you for the information");
        console.log("sucessful contact request");
        history.push("/driverDash");
      }
    }
    
    return (
        
       <Container>
           <Form method="POST">
               <Form.Group controlId = "formLicense">
                    <Form.Label>Enter License ID:</Form.Label>
                    <Form.Control type="licenseID" placeholder="Enter license ID" name="license" value={details.license}
                onChange={handleInputs} />
                    <Form.Text> We'll never share your license ID with anyone else.</Form.Text>
                    <Form.File id="fileLicense1" label="Include a picture copy of the front of your license:"/>
                    <Form.File id="fileLicense2" label="Include a picture copy of the back of your license:"/>
                    <Form.Text> We'll never share your license with anyone else.</Form.Text>
               </Form.Group>
               <Form.Group controlId="formInsurance">
                    <Form.Label>Car Insurance:</Form.Label>
                    <Form.File id="fileInsurance" label="Include a picture copy of your car's insurance:"/>
                    <Form.Text> We'll never share your car insurance with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group controlId="formRegistration">
                    <Form.Label>Car Registration:</Form.Label>
                    <Form.File id="fileRegistration" label="Include a picture copy of your car's registration:"/>
                    <Form.Text> We'll never share your car registration with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group controlId="formCarPlate">
                    <Form.Label>Car Plate Number:</Form.Label>
                    <Form.Control type="plateNumber" placeholder="Enter plate number of desired car" name="plateNumber" value={details.plateNumber}
                onChange={handleInputs}/>
                    <Form.Text> We'll never share your car's plate numbers with anyone else.</Form.Text>
                </Form.Group>
               <Button style={{backgroundColor:"#72A98C"}} variant="primary" type="submit" onClick={postData}>Submit</Button>
           </Form>
       </Container>

    );
   
};
