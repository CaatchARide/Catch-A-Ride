import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import face from './images/face.png';
import {Container} from 'react-bootstrap'


const Post = () => {
    const divStyle = {
        width: '18rem'
    };

    const [tripData, setTripData ] = useState([{}]);

    const callTripPage = async () => {
        try { 
            const res = await fetch('/booking',{
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"

            });

            const data = await res.json();
            //console.log(data);
            setTripData(data);

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
   
        } catch (error){
            console.log(error);
            //history.push('/switchpage');
        }
      }
     

    /**
    * Author: Josh Forcier
    * Formats the below map of all posted trips
    */
    const Trip = ({from, to, price, date, time, message}) => {
        return(
        <div class="card" style={divStyle}>
          <img src={face} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h2 class="card-title">Trip Details</h2>
                <h4>{from} to {to}</h4>
                <p>Price: {price}</p>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
                <p class="card-text"> {message}</p>
                <a href="/request" class="btn btn-primary"> Request Ride</a>
            </div>
            </div>
        )
      }




     
     useEffect(() => {
        callTripPage();
      }, []);

    return (
<Container>
{ /**
* Author: Josh Forcier
* References above format to pull all of the trips from the database to show to passengers
*/}
<div className="container col-md-4">

    {tripData.map(trip => (
        <Trip from={trip.from} to={trip.to} price={trip.price} date={trip.date} time={trip.time} message={trip.message}/>
    ))}
    
</div>
</Container>



            

    )
}

export default Post;