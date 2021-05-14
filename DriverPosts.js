import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
const DriverPosts = () => {
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

    //This particular portion of code designed to map out and display information of the database was written by Josh Forcier
    const Trip = ({date, time, from, to, price}) => {
      return(
        <tr>
          <td>{date}</td>
          <td>{time}</td>
          <td>{from}</td>
          <td>{to}</td>
          <td>{price}</td>
        </tr>
      )
    }
     


     
     useEffect(() => {
        callTripPage();
      }, []);
    return (
        <>
        <div className = "container md-5">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>
       
        {/**References code above for formatting, also written by Josh Forcier */}
        <tbody>
          {tripData.map(trip => (
              <Trip date={trip.date} time={trip.time} from={trip.from} to={trip.to} price={trip.price}/>
          ))}
        </tbody>
      </Table>
      <br />
      <br />
      </div>
      </>
    )
}

export default DriverPosts
