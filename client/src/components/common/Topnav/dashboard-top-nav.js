import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import Logo from "../../../assets/Home/feather.svg";

class DashboardTopNav extends Component {
  render() {
    var { first, last } = this.props.userName;
    var userName = first + " " + last;
    return (
      <Row style={{marginRight: '0px'}}>
      <Col className="col-12 noGutters">
        <Navbar expand="md" className="dashboardTopNav">
          <Navbar.Brand href="/">
            <img alt="" src={Logo} />
            Squabble
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="nav navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title={userName} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Budgets</NavDropdown.Item>
                <NavDropdown.Item href="/">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      </Row>
      )
    }
  }

  export default DashboardTopNav;
