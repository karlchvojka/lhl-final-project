import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home/';
import Aboutpg from './About/';

class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <Navbar expand="md">
          <Navbar.Brand href="#home">Squabble</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ Aboutpg  } />


        <footer className="footer">
          <p>
            &copy; 2019 <span>soon&#8482;</span>  Squabble LLC. All rights (perhaps) reserved.
          </p>
        </footer>
      </Router>
    )
  }
}


export default NavbarComp;
