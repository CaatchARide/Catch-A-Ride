import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
const PendingRequest = () => {
    const [requestData, setRequestData ] = useState({});

    const callRequestPage = async () => {
        try { 
            const res = await fetch("/makerequest",{
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"

            });

            const data = await res.json();
            //console.log(data);
            setRequestData(data);

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
        callRequestPage();
      }, []);
    return (
        <>
        <div className = "container md-5">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Number of passengers</th>
            <th>Number of bags</th>
            <th>Preferences</th>
            <th>Additional Info</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{requestData.numberOfPassengers}</td>
            <td>{requestData.numberOfBags}</td>
            <td>{requestData.preferences}</td>
            <td>{requestData.additionalInfo}</td>
            <td>{requestData.status}</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <br />
      </div>
      </>
    )
}
export default PendingRequest
