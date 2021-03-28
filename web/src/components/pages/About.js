import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel, Container, Jumbotron} from 'react-bootstrap'

import slide01 from "./images/Kepler-62_System.png"
import slide02 from "./images/Triton'sInterior.png"



export default function About() {

    return (
    <div className="About">
        <Container>
            <Jumbotron>
            <h1>Hello, customer! Welcome to Catch-A-Ride</h1>
            <p>
                Catch-a-Ride is a unique idea that combines the convenience of carpooling and the telecommunications to create essentially a rideshare program where both the driver and passenger are able to benefit. What makes Catch-a-Ride unique is that we will start out hyper-localized, this allows us to better serve our users because there are similar peak times in which students will be using the app. There are also similar places in which students typically go when they travel long-distance (New York City, Long Island). Before we choose to expand into another college we will ensure that a good enough percentage of the students in the university will be using and benefiting from our app. This will allow us to expand while also keeping true to what makes us unique here at Catch-a-Ride.
            </p>
            </Jumbotron>
        </Container>
        <Carousel>
                <Carousel.Item>
                    <img
                        className="a"
                        src={slide01}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>TESTING TESTING TESTING</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="b"
                        src={slide02}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>TESTING TESTING TESTING</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </div>
    );
}
