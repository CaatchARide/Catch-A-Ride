import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'

import slide01 from "./images/Catcharidelogo.png"


export default function Home() {

    return (
    <div className="home">
        <h1 style={{textAlign : 'center'}}>Welcome to...</h1>
        <Container>
        <img
        width={930}
        height={700}
        //alt="900x500"
        className="a"
        src={slide01}
        alt="logo"
    />
    </Container>
        
    </div>
    );
}