import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import base from "../base";

import "../css/login.css";
import GoogleButton from "../images/google-signin.png";

class Login extends React.Component {
  constructor() {
    super();
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  componentWillMount() {
    base.onAuth(user => {
      if (user) {
        this.authHandler(null, { user });
      }
    });
  }

  authenticate() {
    base.authWithOAuthPopup("google", this.authHandler);
  }

  authHandler(err, authData) {
    const storeRef = base.database().ref();

    storeRef.once("value", snapshot => {
      const data = snapshot.val() || {};

      if (!data.owner) {
        storeRef.set({
          owner: authData.user.uid
        });
      }

      // Set login status and owner
      this.props.setLoginState(authData.user.uid);
      this.props.setOwnerState(data.owner, authData.user.uid);
    });
  }

  render() {
    return (
      <div className="login container">
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <p> Login </p>
            <a onClick={() => this.authenticate()}>
              <img src={GoogleButton} />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
