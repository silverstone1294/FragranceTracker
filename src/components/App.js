// Default create-react-app
import React, { Component } from "react";
import { Grid, Navbar } from "react-bootstrap";
import base from "../base";

// My components
import Login from "./Login";

// Images
import logo from "../images/logo.svg";

// Styles
import "../css/app.css";

class App extends Component {
  constructor() {
    super();

    this.setLoginState = this.setLoginState.bind(this);
    this.setOwnerState = this.setOwnerState.bind(this);

    this.state = {
      uid: null,
      owner: null
    };
  }

  setLoginState(id) {
    this.setState({ uid: id });
  }

  setOwnerState(id, owner, displayname) {
    // Get first name
    displayname = displayname.split(" ")[0];

    this.setState({
      uid: id,
      owner: owner || id,
      name: displayname
    });
  }

  render() {
    // If user is not logged in
    if (this.state.uid === null) {
      return (
        <Login
          setLoginState={this.setLoginState}
          setOwnerState={this.setOwnerState}
        />
      );
    }

    // If user is logged in
    return (
      <p>
        {" "}{this.state.name}'s fragrance list{" "}
      </p>
    );
  }
}

export default App;
