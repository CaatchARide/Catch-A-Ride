import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Request = () => {
    return (
        <>
            <form className="container md-5">
  <div className="form-group">
    <label for="exampleFormControlInput1">Number of passengers</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Number of bags</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Preferences</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Please mention about Pick up, Drop-off, music, smoking, seat preference"></textarea>
  </div>
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Additional Information</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Additional details that driver should know"></textarea>
  </div>

  

  <Button style={{backgroundColor:"#72A98C"}} variant="primary" type="submit" href="/passengerDash">Submit</Button>
  <br />
  <br />
  <br />
</form>
        </>
    )
}

export default Request
