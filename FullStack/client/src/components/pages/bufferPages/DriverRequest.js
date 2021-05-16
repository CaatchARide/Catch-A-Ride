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
            <td> <Button style={{backgroundColor:"#72A98C"}} variant="primary" onClick={popMethod} href='/driverDash' type= "drive">Yes</Button> <Button style={{backgroundColor:"#72A98C"}} onClick={dropMethod} href='/driverDash' variant="primary" type= "drive">No</Button> </td>
          </tr>
        )
      }
     
     useEffect(() => {
        callRequestPage();
      }, []);

      const popMethod = () => {
        
        window.alert("Thank you for accepting the request, we will share the passenger details through email")
        

      }

      const dropMethod = () => {
        
        window.alert("Thank you for declining the request, we will notify the passenger")
        

      }
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

      {/**
       * Author: Josh Forcier
       * Uses above format to pull requests from the database and display them in a table
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

export default DriverRequest