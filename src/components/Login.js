import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "../css/login.css";
import GoogleButton from "../images/google-signin.png";

class Login extends React.Component {
    render() {
        return (
            <div className="login container">
            <Row>
                <Col xs={12} md={8} mdOffset={2}>
                    <p> Login </p>
                    <a> <img src={GoogleButton}/> </a>
                </Col>
                </Row>
            </div>
        )
    }
}

export default Login;