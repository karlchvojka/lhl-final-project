import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default ({}) => (
  <Navbar expand="md">
    <div className="container">
      <Navbar.Brand href="#home">Squabble</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)



