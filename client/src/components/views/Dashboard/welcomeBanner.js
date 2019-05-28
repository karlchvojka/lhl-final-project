import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';

class WelcomeBanner extends Component {

  render() {
    var { first } = this.props.userName;
      return (
      <Row className="welcomeBackBanner">
        <Col>
          <h2>Hey {first}, Welcome Back!</h2>
        </Col>
      </Row>
    )
  }
}

export default WelcomeBanner;
