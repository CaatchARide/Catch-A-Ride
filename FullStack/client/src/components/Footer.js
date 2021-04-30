import React from 'react';
import styled from 'styled-components'

function Footer(){
    return (
        <FooterBackground className="main-footer">
        <div className="middle-footer">
        <div className="container">
        <div className="row">
        {/* Columne 1 */}
        <div className="col-md-3 col-sm-6">
        <h4>About </h4>
        <ul className="list-unstyled">
        <li><a href="/">Click here</a></li>
        </ul>
        </div>
        {/* Columne 2 */}
        <div className="col-md-3 col-sm-6">
        <h4>Profile</h4>
        <ul className="list-unstyled">
        <li><a href="/">Sign Up</a></li>
        <li><a href="/">Login</a></li>
        </ul>
        </div>
        {/* Columne 3 */}
        <div className="col-md-3 col-sm-6">
        <h4>Contact Us</h4>
        <ul className="list-unstyled">
        <li><a href="/">Click here to message us!</a></li>
        <li>Location: Albany, New York </li>
        <li>Telephone: (123)456-7890 </li>
        <li>Email: johndoe@albany.edu  </li>
        </ul>
        </div>
        </div>
        {/*Bottom of Footer Section */}
        <div classname="footer-bottom">
            <p classname="text-xs-center">
                &copy;{new Date().getFullYear()} Catch-A-Ride - All Rights Reserved
            </p>
        </div>
        </div>
        </div>
        </FooterBackground>
    );
}


const FooterBackground = styled.footer`
.middle-footer {
    background: var(--mainDark)
}
`;

export default Footer;