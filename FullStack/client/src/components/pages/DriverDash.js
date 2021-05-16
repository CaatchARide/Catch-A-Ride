//Driver dashboard implemented by Hector Salas, 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Accordion, Card, Form} from 'react-bootstrap'
import banner1 from './images/banner.png'

 export default function DriverDash () {
     const [chat, setChat] = useState({ //sends message
        message: ""
      });
     
      let name, value;
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setChat({ ...chat, [name]:value});
      }

      const PostData = async (e) => {
        e.preventDefault();
        const { message } = chat;
        const{ userType } = `driver`;

        const res = await fetch("/messaging", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            message
          })
        });

        const data = await res.json();
        if(res.status === 400 || !data){
          window.alert("Invalid Registration");
          console.log("invalid registration");
        } else {
          window.alert("Please wait for the passenger response");
          console.log("sucessful registration");
        }
      }
      
      const [chatData, setChatData ] = useState([{}]); //Recieving the message implemented by Hector Salas

      const callChatPage = async () => {
          try { 
              const res = await fetch('/messaging',{ //gets information from mongoDB
                  method:"GET",
                  headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                  },
                  credentials: "include"
  
              });
  
              const datas = await res.json();
              console.log(datas);
              setChatData(datas);
  
              if(!res.status === 200) {
                  const error = new Error(res.error);
                  throw error;
              }
     
          } catch (error){
              console.log(error);
          }
        }

        const Message = ({message , userType}) => {//used to format the messages between driver and passenger
            return(
                <div>
                    {message}
                    {userType}
                </div>
            )
        }

        useEffect(() => {//runs method on page refresh
            callChatPage();
          }, []);


  
      return ( 
          //Accordion was used to separate different functions in the dashboard for easier user interaction
          //
          <Container className="nonsense" method="GET">
              <div className="card bg-dark text-white">
                  <img src={banner1} className="card-img" height="360" alt="..."/>
                      <div className="card-img-overlay">
      
                      </div>
              </div>
              <br />
              <h3 style={{textAlign : 'center'}}>Welcome to your driver dashboard!</h3>
              <Accordion>
                  <Card>
                      <Card.Header style={{backgroundColor:"#72A98C"}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "white"}}>
                          Account Details
                      </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                      <Card.Body>Account details  <br />
                      <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/account">View Information</Button>
                      </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <Card.Header style={{backgroundColor:"#72A98C"}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "white"}}>
                          Car Details
                      </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                      <Card.Body>Car details go HERE<br />
                          This button will redirect you to a car form that allows you to register your car. {" "}
                          <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/car_details">Car Details</Button>
                      </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <Card.Header style={{backgroundColor:"#72A98C"}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{color: "white"}}>
                          Create Trip
                      </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                      <Card.Body>
                          Click the button to post the trip {" "}{" "}
                          <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "submit" href="/createtrip">Post Trip</Button>
                      </Card.Body>
                      </Accordion.Collapse>
                  </Card>
              
              <Card>
                      <Card.Header style={{backgroundColor:"#72A98C"}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{color: "white"}}>
                          View Trip Details
                      </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                      <Card.Body>Trip Details<br />
                          This button will redirect you to all your created trips {" "}
                          <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/driverposts">Check your trips</Button>
                      </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <Card.Header style={{backgroundColor:"#72A98C"}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{color: "white"}}>
                          View Passenger Requests
                      </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                      <Card.Body><br />
                          This button will redirect you to the requests made by passenger   {" "}
                          <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/driverrequest">View request</Button>
                      </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <Card.Header style={{backgroundColor:"#72A98C"}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="5" style={{color: "white"}} >
                          Chat with Passenger
                      </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="5">
                      <Card.Body>Your recieved messages should appear here: <br />
                        <div> {/*Displaying the messages sent between the driver and passenger by Hector Salas*/}
                            {chatData.map(msg => (
                                <Message userType={msg.userType} message={msg.message}/>
                            ))}
                        </div>
                      <Form>
                          <Form.Group controlId = "message">
                              <Form.Label>Enter message:</Form.Label>
                              <Form.Control name="message" value={chat.message}
                                onChange={handleInputs} placeholder="Hey!"/>
                              <Form.Text> Messages between the driver and passenger are for the sole purpose of communication.</Form.Text>
                          </Form.Group>
                      </Form>
                      <Button style={{backgroundColor:"#72A98C"}} variant="primary" onClick={PostData} type= "drive">Send</Button>
                      {/*<Button style={{backgroundColor:"#72A98C"}} variant="primary" onClick={callChatPage}>get</Button>
                        Uncomment this for testing
                        */}
                      </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  </Accordion>
              <div>
                  <br/>
                  <span>   </span>
                  <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/switchpage">Home</Button>
              </div>
          </Container>
            
      );
  };
