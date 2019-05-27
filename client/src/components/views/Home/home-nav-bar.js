import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from "../../../assets/Home/feather.svg";
class NavbarComp extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Navbar
            expand="md"
            className="navbar fixed-top navbar-light container"
          >
            <Navbar.Brand href="#home">
              <img alt="" src={Logo} />
              Squabble
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="nav navbar-nav" style={{ width: "100%" }}>
              <ul
                className="navbar-nav flex"
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <li />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                      style={{ color: "white" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/about"
                      style={{ color: "white" }}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      style={{ color: "white" }}
                    >
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-primary"
                      style={{
                        height: "46px",
                        width: "120px",
                        borderRadius: "100px",
                        background:
                          "linear-gradient(90deg, #FB6649 0%, #FB4E5B 100%"
                      }}
                    >
                      Sign in
                    </button>
                  </li>
                </div>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavbarComp;
