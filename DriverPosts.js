import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
const DriverPosts = () => {
    const [tripData, setTripData ] = useState({});

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
     
     
     
     useEffect(() => {
        callTripPage();
      }, []);
    return (
        <>
        <div className = "container md-5">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Time</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{tripData.date}</td>
            <td>{tripData.time}</td>
            <td>{tripData.from}</td>
            <td>{tripData.to}</td>
            <td>{tripData.price}</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <br />
      </div>
      </>
    )
}

export default DriverPosts
