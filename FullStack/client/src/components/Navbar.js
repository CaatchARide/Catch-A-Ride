//Implemented by Hector Salas
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'

export default function Home() {
    return (  
    <Navbar className="navbar" variant="dark" expand="lg" >
        <Container className="container">
        <Navbar.Brand href="/">Catch-A-Ride</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav.Link href="/about" style={{color : 'white'}}>About</Nav.Link>
            <Nav.Link href="/signup" style={{color : 'white'}}>Signup</Nav.Link>
            <Nav.Link href="/login" style={{color : 'white'}}>Login</Nav.Link>
            <Nav.Link href="/Contact" style={{color : 'white'}}>Contact Us</Nav.Link>     
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
    
    )
    
}

