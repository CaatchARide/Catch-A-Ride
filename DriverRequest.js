import React, {useState, useEffect} from 'react'
import {Table, Button} from 'react-bootstrap'
const DriverRequest = () => {
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
     
      const Request = ({PassengerNum, bagNum, preferences, additional}) => {
        return(
          <tr>
            <td>{PassengerNum}</td>
            <td>{bagNum}</td>
            <td>{preferences}</td>
            <td>{additional}</td>
            <td><td> <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive">Yes</Button> <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "drive">No</Button> </td></td>
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
            <th>Accept Request?</th>
          </tr>
        </thead>
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

export default DriverRequest
