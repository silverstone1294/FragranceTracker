import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { base, firebase } from "../base";

import "../css/login.css";
import GoogleButton from "../images/google-signin.png";

class Login extends React.Component {
  constructor() {
    super();

    this.authenticate = this.authenticate.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.handleAuth(user);
      }
    });
  }

  authenticate() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
      this.handleAuth(result.user);
    });
  }

  handleAuth(user) {
    // Set user id
    const { uid, displayName } = user;

    const storeRef = firebase.database().ref();

    // Check the database for an owner
    storeRef.once("value", snapshot => {
      const data = snapshot.val() || {};

      // If there is no owner, set current user as owner in firebase
      if (!data.owner) {
        storeRef.set({
          owner: uid
        });
      }

      // Set login status and owner
      this.props.setLoginState(uid);
      this.props.setOwnerState(data.owner, uid, displayName);
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
