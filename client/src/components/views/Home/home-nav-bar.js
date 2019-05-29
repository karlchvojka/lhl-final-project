import React, { Component } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import Logo from "../../../assets/Home/feather.svg";

import { faBars } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NavbarComp extends Component {
  render() {
    return (
      <Row className="homeNav">
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Navbar expand="md" className="navbar container-fluid">
            <Navbar.Brand href="/">
              <img alt="" src={Logo} />
              <span className="logotext">Squabble</span>
            </Navbar.Brand>
            <Navbar.Toggle children={<FontAwesomeIcon icon={ faBars } />} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="nav navbar-nav" style={{ width: "100%" }}>
              <Nav className="ml-auto">
                <Nav.Link className="nav-link" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-link" href="/">
                  About
                </Nav.Link>
                <Nav.Link className="nav-link" href="/">
                  Features
                </Nav.Link>
                <Nav.Link className="homeButton" href="/login">
                  <button
                    className="btn btn-primary" href="/login">
                    Sign in
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default NavbarComp;
