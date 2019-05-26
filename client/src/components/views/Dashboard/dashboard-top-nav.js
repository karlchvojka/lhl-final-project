import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from "../../../assets/Home/feather.svg";

class DashboardTopNav extends Component {
  render() {
    return (
      <div className="dashboardTopNav row">
      <div className="col-12">
        <Navbar expand="md" className="navbar fixed-top">
          <Navbar.Brand href="#home">
            <img alt="" src={Logo} />
            Squabble
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="nav navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Karl Chvojka" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Budgets</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      </div>
      )
    }
  }

  export default DashboardTopNav;
