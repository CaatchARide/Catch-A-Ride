import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import face from './images/face.png';

const Post = () => {
    const divStyle = {
        width: '18rem'
    };
    return (
        <>
        <div className="container col-md-4">
            <div class="card" style={divStyle}>
  <img src={face} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">Trip Details</h2>
    <h4> Albany to Long Island</h4>  <p>Price: $30</p> <p>Date: May 1st</p> <p> Time: 2:00pm</p>
    <p class="card-text">Planning to travel for the weekend. I have 3 seats available!! Please message me to discuss travel details further!</p>
    <a href="/request" class="btn btn-primary"> Request Ride</a>
    
  </div>
</div>
<br />

<div class="card" style={divStyle}>
  <img src={face} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 class="card-title">Trip Details</h2>
    <h4> Albany to Rochester</h4>  <p>Price: $40</p> <p>Date: May 3rd</p> <p> Time: 6:00pm</p>
    <p class="card-text">Planning to travel home for the break. I have 4 seats available!! Please message me to discuss travel details further!</p>
    <a href="/request" class="btn btn-primary"> Request Ride</a>
  </div>
</div>

</div>
            
        </>
    )
}

export default Post;

