import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import face from './images/face.png';



const Post = () => {
    const divStyle = {
        width: '18rem'
    };
    
    
      

    const [tripData, setTripData ] = useState([
        {
            


    }]);

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
            console.log(data);
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
        <div className="container col-md-4">
            <div class="card" style={divStyle}>
          <img src={face} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">Trip Details</h2>
    <h4> { tripData.from } to { tripData.to } </h4>  <p>Price: { tripData.price }</p> <p>Date: { tripData.date }</p> <p> Time: { tripData.time }</p>
    <p class="card-text"> { tripData.message } </p>
    <a href="/request" class="btn btn-primary"> Request Ride</a>
    
  </div>
</div>
<br />

    <div class="card" style={divStyle}>
      <img src={face} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h2 class="card-title">Trip Details</h2>
        < h4> { tripData.from } to { tripData.to }</h4>  <p>Price: { tripData.price }</p> <p>Date: { tripData.date }</p> <p> Time: { tripData.time }</p>
            <p class="card-text"> { tripData.message } </p>
             <a href="/request" class="btn btn-primary"> Request Ride</a>
    
  </div>
</div>

</div>
            
        </>
    )

}

export default Post;

