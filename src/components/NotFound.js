import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/notfound.css";

class NotFound extends React.Component {

  render() {
    return (
      <div className="notfound container">
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <p> Well, you broke it </p>
            <a href="/"> Click here to return home <em className="fa fa-arrow-circle-right"></em> </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NotFound;
