import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
//import "./styles.css";


const payment = () => {
    return (
        <form>
            <div className="card mt-4 font-weight-bold">
                <h5 className="card-header">Make Payment</h5>
                <div className="card-body">
                    
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label for="cardinput">Card #</label>
                                <input type="text" className="form-control" id="cardinput" name="cardnumber" placeholder="XXXXXXXXXXXXXXXX"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="cvcinput">CVC #</label>
                                <input type="text" className="form-control" id="cvcinput" name="cvcnumber" placeholder="0000"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="amountinput">Amount</label>
                                <input type="text" className="form-control" id="amountinput" name="amountr" placeholder="Amount"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="firstname">First Name</label>
                                <input type="text" className="form-control" id="firstname" name="firstname" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="firstname">Last Name</label>
                                <input type="text" className="form-control" id="lastname" name="lastname" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="city">City</label>
                                <input type="text" className="form-control" id="city" name="city" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="state">State</label>
                                <select className="form-control custom-select" id="state">
                                    <option>Pick a state</option>
                                    <option>NY</option>
                                    <option>MA</option>
                                    <option>CA</option>
                                   
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="postal">Postal Code</label>
                                <input type="text" className="form-control" id="postal" name="postal" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                      
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control" id="message" rows="3" aria-describedby="addnotes"></textarea>
                                <small id="addnotes" className="form-text text-muted">Add any notes here.</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted d-flex justify-content-end">
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "submit" href="/driverDash">Cancel</Button>
                <br />
                <Button style={{backgroundColor:"#72A98C"}} variant="primary" type= "submit" href="/driverDash">Submit</Button>

                </div>
            </div>
        </form>
        
    )
};

export default payment
