//Implemented by Hector Salas
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel, Container, Jumbotron, Button} from 'react-bootstrap'

import slide01 from "./images/AlbanyMap.png"
import slide02 from "./images/car-pooling.png"



export default function About() {

    return (
    //Implemented many bootstrap functions to make a better user experience
    <div className="About">
        <Container>{/*Centers the information in the middle*/}
            <Jumbotron>{/*Displays the information in a box*/}
            <h1>Hello, customer! Get to know us!</h1>
            <p>
                Catch-a-Ride is a unique idea that combines the convenience of carpooling and the telecommunications to create essentially a rideshare program where both the driver and passenger are able to benefit. What makes Catch-a-Ride unique is that we will start out hyper-localized, this allows us to better serve our users because there are similar peak times in which students will be using the app. There are also similar places in which students typically go when they travel long-distance (New York City, Long Island). Before we choose to expand into another college we will ensure that a good enough percentage of the students in the university will be using and benefiting from our app. This will allow us to expand while also keeping true to what makes us unique here at Catch-a-Ride.
            </p>
            <Button style={{backgroundColor:"#72A98C"}} variant="primary" type="signup" href="http://localhost:3000/signup">Sign-up Now!</Button> {/*Button that takes the user to signup page*/}
            </Jumbotron>
        
        <Carousel>{/*Goes through different pictures and with different captions*/}
                <Carousel.Item>
                    <img
                        width="1150"
                        //alt="900x500"
                        className="a"
                        src={slide01}
                        alt="Albany Area"
                    />
                    <Carousel.Caption>
                        <h3 style={{color : 'black'}}> We are based in the Albany area</h3>
                        <p style={{color : 'black'}}> Our employees are students of UAlbany and therfore our company is based in the Albany area.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="1150"
                        className="b"
                        src={slide02}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color : 'lime'}}>Good for the enviorment!</h3>
                        <p style={{color : 'lime'}} size={{size : 'medium'}}>Carbon emission from cars are destroying the enviorment, using Catch-A-Ride will help lower carbon emission.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Container>
    </div>
    );
}