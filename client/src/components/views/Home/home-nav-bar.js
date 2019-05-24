import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Home/feather.svg";
import HomeImage from "../../../assets/Home/Img.svg";
class NavbarComp extends Component {
  render() {
    return (
      <Navbar expand="md">
        <div className="container">
          <img alt="" src={Logo} />
          <Navbar.Brand href="#home">Squabble</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavbarComp;
