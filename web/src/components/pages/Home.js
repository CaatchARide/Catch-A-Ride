import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row, Button} from 'react-bootstrap'

import img1 from "./images/AlbanyMap.png"



export default function Home() {

    return (
    <div className="home">
                            <br />

        <Container fluid>
            <Row>
                <Col>
                <br />
                <br />
                <br />
                    <Col><Col><Col><Col><Col>
                    <h5 style={{justifyContent :'left', fontStyle :'italic'}}>A community that will help you get to your destination...</h5>
                    <h1 style={{fontWeight :'bolder', textAlign : 'center'}}>CATCH A RIDE WITH US.</h1>
                    </Col></Col></Col></Col></Col>
                    <br />
                    <br />
                    <Col>
                        <Col>
                            <Col>
                                <Col>
                                    <Col>
                                        <Col>
                                            <Col>
                                                <Col>
                                                    <Col>
                                                        <Col> <Col> <Col>
                                                        <Button style={{backgroundColor:"#72A98C"}} variant="primary" size="lg" href="/login" >Sign in</Button>
                                                            <br />
                                                            <br />
                                                        <Button style={{backgroundColor:"#72A98C"}} variant="secondary" size="lg" href="/signup">Sign up</Button>
                                                        </Col></Col></Col>
                                                    </Col>
                                                </Col>
                                            </Col>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                        </Col>   
                    </Col>
                </Col>
                <Col>
                    <img 
                        src={img1} 
                        alt="Albany_img"
                        width="900"
                    />
                </Col>
            </Row>
        </Container>
    </div>
    );
}