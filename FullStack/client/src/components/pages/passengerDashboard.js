import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Accordion, Card, Form} from 'react-bootstrap'
import carsharing from './images/banner1.png'

export default function PassengerDashboard() {
    //const history = useHistory();
    const [chat, setChat] = useState({
        message:""
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
          window.alert("Please wait for the Driver response");
          console.log("sucessful registration");
          //history.push("/login");
  
         
        }
  
  
      }


      ///

      const [chatData, setChatData ] = useState({
          message:""
      });

      const callChatPage = async () => {
          try { 
              const res = await fetch('/messaging',{
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
              //history.push('/switchpage');
          }
        }
       
       
       
       useEffect(() => {
          callChatPage();
        }, []);
  
    return (
        <Container classNameName="nonsense">
            <div className="card bg-dark text-white">
                <img src={carsharing} className="card-img" alt="..." height="360"/>
                    <div className="card-img-overlay">
    
                    </div>
            </div>
            <br />
            <h3 style={{textAlign : 'center'}}>Welcome to your passenger dashboard!</h3>
            <br />
            <Accordion>
            <Card>
                <Card.Header style={{backgroundColor:"#72A98C"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "white"}}>
                    Account Details
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Account Details 
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/account">View Information</Button>
                </Card.Body>
                
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header style={{backgroundColor:"#72A98C"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "white"}}>
                    View Trips
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>View trips go HERE <br />
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/posts">List of Drivers</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header style={{backgroundColor:"#72A98C"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{color: "white"}}>
                    Pending requests
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body> Click the button for pending request <br />
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/pendingrequest">View requests</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header style={{backgroundColor:"#72A98C"}} >
                <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{color: "white"}}>
                    Make Payment
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                <Card.Body>Make payment here <br />
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/payment">Click to pay</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header style={{backgroundColor:"#72A98C"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{color: "white"}} >
                    Chat with Driver
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                <Card.Body>Your recieved messages should appear here: <br />
                <label> {chatData.message} </label>
                <Form>
                    <Form.Group controlId = "message">
                       
                        <Form.Label>Enter message:</Form.Label>
                        <Form.Control name="message" value={chat.message}
                            onChange={handleInputs} placeholder="Hey!"/>
                        <Form.Text> Messages between the driver and passenger are for the sole purpose of communication.</Form.Text>
                    </Form.Group>
                </Form>
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" onClick={PostData} type= "drive">Send</Button>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            <div>
                <br/>
                <span>This button will redirect you to the driver dashboard.   </span>
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive" href="/driverDash">Switch to driver</Button>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

        </Container>
          
    );
};