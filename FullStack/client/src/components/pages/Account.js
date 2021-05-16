import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Account = () => {
    //const history = useHistory();
    const [userData, setUserData ] = useState({});

    const callAccountPage = async () => {
        try { 
            const res = await fetch('/register',{
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"

            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

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
        callAccountPage();
      }, []);


    return (
        <>
        <div className="container mt-5">
            <h2>Account Information</h2>
            <br />
            <form method="GET">
        < div className="row">
            <div className="col-md-6">
                <label> First Name</label>
            </div>
            <div className="col-md-6">
                <div>{ userData.firstName }</div> 
            </div>
            <div className="col-md-6">
                <label> Last Name</label>
            </div>
            <div className="col-md-6">
                <p> { userData.lastName }</p>
            </div>

            <div className="col-md-6">
                <label> Date of Birth </label>
            </div>
            <div className="col-md-6">
            <p> { userData.dateOfBirth }</p>
            </div>

            <div className="col-md-6">
                <label> Email</label>
            </div>
            <div className="col-md-6">
            <p> { userData.email }</p>
            </div>
            

        </div>
          
        </form>
        </div> 
        </>
    )
}

export default Account
