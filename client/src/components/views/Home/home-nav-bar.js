import React, { Component } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import Logo from "../../../assets/Home/feather.svg";
class NavbarComp extends Component {
  render() {
    return (
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Navbar expand="md" className="navbar fixed-top navbar-light container-fluid">
            <Navbar.Brand href="#home">
              <img alt="" src={Logo} />
              Squabble
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default NavbarComp;
