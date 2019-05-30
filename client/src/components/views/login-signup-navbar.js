import React, { Component } from 'react';
import Logo from '../../assets/LoginSignup/feather.svg';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

class NavbarLoginSignup extends Component {
  render() {
    let backButton = '< Back';

    return (
      <Row className="loginSignupNav">
        <Col className="backWrap" xl={2} lg={2} md={6} sm={6} xs={6}>
          <Link className="nav-link" to="/">{backButton}</Link>
        </Col>
        <Col className="logoCol" xl={10} lg={10} md={6} sm={6} xs={6}>
          <div className="logoWrap">
            <img alt="" src={Logo} />
            <p>SQUABBLE</p>
          </div>
        </Col>
      </Row>
      )
    }
  }

  export default NavbarLoginSignup;
