import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';

class WelcomeBanner extends Component {

  render() {
      return (
      <Row className="welcomeBackBanner">
        <Col>
          <h2>Hey Andrea, Welcome Back!</h2>
        </Col>
      </Row>
    )
  }
}

export default WelcomeBanner;
