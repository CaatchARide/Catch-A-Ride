//Create trip implemented by Hector Salas, 
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const CreateTrip = () => {
    const history = useHistory();
    const [trips, setTrips] = useState({
        date:"", time:"", from:"", to:"", price:"", numberOfPassengers:"", message:""
    });
   
    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setTrips({ ...trips, [name]:value});
    }
    const postData = async (e) => {
      e.preventDefault();
      const { date, time, from, to, price, numberOfPassengers, message} = trips;
      const res = await fetch("/booking", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            date, time, from, to, price, numberOfPassengers, message
        })
      });
      const data = await res.json();
      if(res.status === 422 || !data){
        window.alert("Invalid credentials");
        console.log("invalid registration");
      } else {
        window.alert("Thank you for posting the trip the passengers will view the post and send requests to your dashboard");
        console.log("sucessful registration");
        history.push("/driverdash");

       
      }


    }
    return (
        <>
        <div className="container mt-5" method="POST">
            <Form>
                        <Form.Group controlID="date">
                            <Form.Label>Specify date of trip</Form.Label>
                            <Form.Control type="date" name = "date" value={trips.date}
            onChange={handleInputs}/>
                        </Form.Group>
                        <Form.Group controlID="time">
                            <Form.Label>Specify time of trip</Form.Label>
                            <Form.Control name="time" value={trips.time}
                            onChange={handleInputs} placeholder="12:00PM" />
                        </Form.Group>
                        <Form.Group controlID="from">
                            <Form.Label>From</Form.Label>
                            <Form.Control name="from" value={trips.from}
                            onChange={handleInputs} placeholder="UAB" />
                        </Form.Group>
                        <Form.Group controlID="to">
                            <Form.Label>To</Form.Label>
                            <Form.Control name="to" value={trips.to}
                            onChange={handleInputs}placeholder="NYC" />
                        </Form.Group>
                        <Form.Group controlID="price">
                            <Form.Label>Price per passenger</Form.Label>
                            <Form.Control name="price" value={trips.price}
                            onChange={handleInputs}placeholder="$5.00" />
                        </Form.Group>
                        <Form.Group controlID="numberOfPassengers">
                            <Form.Label>Amount of passengers</Form.Label>
                            <Form.Control name="numberOfPassengers" value={trips.numberOfPassengers}
                            onChange={handleInputs} placeholder="3" />
                        </Form.Group>
                            <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control name="message" as="textarea" rows={3} value={trips.message}
                            onChange={handleInputs}/>
                            </Form.Group>

                        <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "submit" onClick={postData}>Post Trip</Button>
                        </Form>

                        </div>
        </>
    )
}

export default CreateTrip;
