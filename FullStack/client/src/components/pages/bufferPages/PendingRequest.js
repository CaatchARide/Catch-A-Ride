import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
const PendingRequest = () => {
    const [requestData, setRequestData ] = useState([{}]);

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
     
     
    /**
    * Author: Josh Forcier
    * Formats the below map
    */
    const Request = ({PassengerNum, bagNum, preferences, additional}) => {
      return(
        <tr>
          <td>{PassengerNum}</td>
          <td>{bagNum}</td>
          <td>{preferences}</td>
          <td>{additional}</td>
        </tr>
      )
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
            <th>Number of passengers</th>
            <th>Number of bags</th>
            <th>Preferences</th>
            <th>Additional Info</th>
          </tr>
        </thead>

    {/**
    * Author: Josh Forcier
    * References the above format to pull sent requests
    */}
        <tbody>
          {requestData.map(request => (
              <Request PassengerNum={request.numberOfPassengers} bagNum={request.numberOfBags} preferences={request.preferences} additional={request.additionalInfo}/>
          ))}
        </tbody>
      </Table>
      <br />
      <br />
      </div>
      </>
    )
}
export default PendingRequest